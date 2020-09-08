import {creatMirrorRF} from './vte_mirror_rf'
import {calcCCAndGFR} from '../general/gfr'

console.log('vte_patient_list_rf has attached')
let aPat = [], aStepBack= [];
aPat = JSON.parse(localStorage.getItem('Patient'));
aStepBack = JSON.parse(localStorage.getItem('StepBack'));

let oSc = JSON.parse(localStorage.getItem('objScalesVTE')),
oPatProto = aPat[aPat.length - 1],
oPat ={...oPatProto};
console.log(aStepBack, aPat, oPat);

$('#aStepBack').on('click', () => {
    doStepBack(aPat, 'Patient');
    doStepBack(aStepBack, 'StepBack');
}).prop({'href': aStepBack[aStepBack.length - 1]});

creatMirrorRF();
$('#accListRF .card, #accListRF li,  #accListRF .btnSingleRF, span.reference').hide();
const showRF = (aRF, vB) => {
    let aSRF = [];
    $(aRF).each((ind, el) => $.merge(aSRF, $(`.cls${el}RF`)));
       oPat.pkSurgProfiles ? aSRF = $.merge($(aSRF), $('.cls3RF')): '';
        // aRF.includes(3) ? aRF.splice(aRF.indexOf(3), 1): '';

    vB ? $(aRF).each((ind, el) => el !== 3 ? $.merge(aSRF, $(`.cls${el}BRF`)) : ''):'';
    
    if (aRF && vB) {
        (aRF.includes(4) && aRF.includes(10)) ? aSRF = $.merge($(aSRF), $('.cls3BRF_1')): '';
        ($.inArray(4, aRF) === -1 && $.inArray(10, aRF) === -1) ? aSRF = $.merge($(aSRF), $('.cls3BRF_1')): '';
    };
    oPat.pkDateOfChildbirth ? $.merge($(aSRF), $('.clsLabourRF')) : '';

    $.extend({
        distinct: function (anArray) {
            let result = [];
            $.each(anArray, function (i, v) {
                if ($.inArray(v, result) === -1) result.push(v);
            });
            return result;
        }
    });
    $($.distinct(aSRF)).show();
    oPat.pkGender === 1 ? $('#accListRF .clsFemaleLvl').hide() : '';
};

showRF(oPat.pkMedProfiles, oPat.pkCalculateRiskOfBleeding);

// Behavior Inside Mirror RF

$("#accListRF .btnSingleRF").on('click', function () {
    $(this).toggleClass('btn-secondary');
});

$("#accListRF li").on('click', function (vTB) {
    vTB = $(this).parents('.collapse').siblings().find('button');
    $(this).toggleClass('list-group-item-secondary');
    $(this).parents('div.card').hasClass('clsOneChoice') ? $(this).siblings().removeClass('list-group-item-secondary') : '';
    $(this).hasClass('list-group-item-secondary') ? $(vTB).addClass('btn-secondary') : !$(this).siblings().hasClass('list-group-item-secondary') ? $(vTB).removeClass('btn-secondary') : '';
});

$('#liCC').on('click', function () {
    $(this).hasClass('list-group-item-secondary') ? $('#liCC').after('<div><form class="border-secondary border-bottom"" id="frmGFR_CC"><div class="form-row align-items-center"><div class="col-auto my-1"><label class="mr-sm-2" for="inpCreatinineVal">Значение:</label><input type="number" class="form-control" id="inpCreatinineVal" ></div><div class="col-auto my-1"><label class="mr-sm-2" for="slctCrUnitsGroup">Единицы:</label><select class="custom-select mr-sm-2" id="slctCrUnitsGroup"><option>мкмоль/л</option><option>ммоль/л</option><option>мг/100 мл, мг/дл, мг%</option><option>мкг/мл, мг/100 мл</option></select></div><div class="col-auto my-1"><div class="custom-control custom-checkbox mr-sm-2"><input type="checkbox" class="custom-control-input" id="chkRaceB" value="1000000000000000"><label class="custom-control-label" for="chkRaceB">негроидная раса</label></div></div></div></form><div class="alert alert-warning alert-dismissible" id= "warning-alert_2" role="alert"></div>') : $(this).next().remove();
    $('#warning-alert_2').html('Важно! Единицы измерения креатинина должны строго соответствовать его введенному значению.');
    $('<button type="button" class="close" id="close_1"  data-dismiss="alert" aria-label="Close">').appendTo('#warning-alert_2');
    $('<span aria-hidden="true">&times;</span></button>').appendTo('#warning-alert_2 .close');
});

$('span.preReference').on('click', function () {
    $(this).hide().next().show();
})
$('span.reference').on('click', function () {
    $(this).hide().prev().show();
});

const makeLiInteract_1 = (it_1, it_2) => {
    $(it_1).on('click', function (vTB) {
        vTB = $(this).parents('.collapse').siblings().find('button');
        $(it_1).hasClass('list-group-item-secondary') ? $(it_2).addClass('list-group-item-secondary') : !$(this).siblings().hasClass('list-group-item-secondary') ? $(vTB).removeClass('btn-secondary') : '';
    });
}


makeLiInteract_1('#liSepsis', '#liAcuteInflamDisease');
makeLiInteract_1('.liThromboemb_2', '#liWasPulmEmb');
makeLiInteract_1('.liNeoplasm_2', '#liActiveNeoplasm');
makeLiInteract_1('#liHeartInsuff3_4, #liHeartInsuffLess1Month, #liCongestHeartFailOrSystLVDysfunctEFLess40Percent', '#liSomeHeartInsuff');

const doActiveOneInGroup = (el) => {
    $(el).on('click', function () {
        $(el).not(this).removeClass('list-group-item-secondary');
    });
}

doActiveOneInGroup('.liLungDiseases_1');
doActiveOneInGroup('.liBurnsSuperficial_1');
doActiveOneInGroup('.liBurnsDeep_1');
doActiveOneInGroup('.liThermalInhalationInjury_1');
doActiveOneInGroup('.liThrombocytopenia_2');
doActiveOneInGroup('.liGlomerFiltrRate_1');

function countRF() {

    oPat.pkDiabetes = $('#ulIsDiabetes').hasClass('btn-secondary') ? true : false;
    oPat.pkActiveUlcerOfStomachOrDuodenum = $('#ulActiveUlcerOfStomachOrDuodenum').hasClass('btn-secondary') ? true : false;
    oPat.pkSevereHepaticFailure = $('#ulIsLiverFailure').hasClass('btn-secondary') ? true : false;

    oPat.pkChronicDialysis = $('#liChronicDialysis').hasClass('list-group-item-secondary') ? true : false;
    // oPat.pkArtificialHeartValve = $('#liArtificialHeartValve').hasClass('list-group-item-secondary') ? true : false;

    oPat.pkUncontroldSystHypert = $('#liUncontrolSystHypert').hasClass('list-group-item-secondary') ? true : false;
    oPat.pkHeartInsuff3_4 = $('#liHeartInsuff3_4').hasClass('list-group-item-secondary') ? true : false;


    $('span.preReference, span.reference').remove();

    let aRFVal = [];

    aRFVal.push(oPat.pkGender === 1 ? '101.000000000000' : '10000100000000000');
    $('#ulIsAcuteInflamDiseaseOrInf').hasClass('btn-secondary') && $('#ulIsRestrictedMobility').hasClass('btn-secondary') ? aRFVal.push('1000000200000000') : '';
    $('.liSevereRenalInsuff_2').hasClass('list-group-item-secondary') ? aRFVal.push('1000001000000000'): '';
    $('#ulIsTraum, #ulLargeOperIn30Days').hasClass('btn-secondary') ? aRFVal.push('1200000000000000') : '';
    ($('#ulIsHeartInsuff').hasClass('btn-secondary') || $('.liLungDiseases_1').hasClass('list-group-item-secondary')) ? aRFVal.push('1100000000000000') : '';
    $('.liSevereRenalInsuff_1').hasClass('list-group-item-secondary') || $('#ulIsLiverFailure').hasClass('btn-secondary') ? aRFVal.push('1000000001000000') : '';
    $('#liAcuteStroke').hasClass('list-group-item-secondary') || $('#liAcuteInfarction').hasClass('btn-secondary') ? aRFVal.push('1100000000000000') : '';
    $('#ulIsHemorrSyndrome').hasClass('btn-secondary') || $('#liPriorMajorBleeding, #liHbLess_100').hasClass('list-group-item-secondary') ? aRFVal.push('1000001000000000') : '';
    $('.liStroke_1').hasClass('list-group-item-secondary') && $('#liPlegia').hasClass('list-group-item-secondary') ? aRFVal.push('1000000300030000') : '';
    $('.clsObstComorbidities').hasClass('list-group-item-secondary') || $('.clsObstComorbidities').hasClass('btn-secondary') ? aRFVal.push('1000000000003020') : '';
    $('#liHormoneTherOnco').hasClass('list-group-item-secondary') || $('#ulIsHormoneTaking').hasClass('btn-secondary') ? aRFVal.push('1000000010000000') : '';
    $('.cls4RF').hasClass('list-group-item-secondary') || $('.cls4RF').hasClass('btn-secondary') ? aRFVal.push('1000000000010000') : '';
    $('#ulIsRestrictedMobility, #btnDehydration').hasClass('btn-secondary') ? aRFVal.push('1000000000001000') : '';

    const putVal = (item, val) => $(item).hasClass('list-group-item-secondary') ? aRFVal.push(val) : '';

    putVal('.liSystHypert_1', '1000001000000000');
    putVal('.liSumTherRF_2', '1100000000000000');
    putVal('.liThromboemb_1, .liSumAtrFibrRF_1', '1000020000000000');
    putVal('.liThromboemb_1', '130000033000000');
    putVal('.liThromboemb_3', '1300000130000010');
    putVal('.liProvocedVTE_1', '1000000000000020');
    putVal('.liTraum_1', '1000000050000000');
    putVal('.liHighRiskThrombophilia_1', '1300000300003030');
    putVal('.liNeoplasm_1', '132.000100000000');
    putVal('.liNeoplasm_2', '1000000300000000');
    putVal('.liStroke_1', '1000001000000000');
    putVal('.liSevereRenalInsuff_1', '1000000000100100');
    putVal('.liBurns_1', '1000000200000000');
    putVal('.liBurns_2', '1000000300000000');
    putVal('#liSpinalCordInjure, #liPlegia', '1000000350000000');
    putVal('.liСoagulopathy_1', '1000000000000100');
    putVal('.liLabourRuRF_1', '1000000000000020');
    putVal('.liThrombocytopenia_1', '1000000001000000');

    oPat.pkPostpartum || oPat.pkWeekOfPregnancy ? aRFVal.push('1000000110000000') : '';

    if (oPat.pkIsOrNoSurg) {
        oPat.oSelOp.pkArtroplasty ? aRFVal.push('1000000300000000') : '';
        oPat.oSelOp.pkHipFractureSurgery ? aRFVal.push('1000000300000000') : '';
        oPat.oSelOp.pkLiverResection ? aRFVal.push('10000000010000001') : '';
        oPat.oSelOp.pkPancreatoDuodResection ? aRFVal.push('1000000001000000') : '';
        oPat.oSelOp.pkPulmonectomy ? aRFVal.push('10000000010000001') : '';
        oPat.oSelOp.pkHeartSurgery ? aRFVal.push('1000000001000000') : '';
        oPat.oSelOp.pkBrainOrSpinalCordSurg ? aRFVal.push('1000000001000000') : '';
        oPat.oSelOp.pkElectiveCSection ? aRFVal.push('1000000000001000') : '';
        oPat.oSelOp.pkCSectionInLabour ? aRFVal.push('1000000000002010') : '';
    }

    oPat.pkGeneralListOfRF = [];

    if (oPat.pkAge > 35) {
        aRFVal.push('1000000000001010');
        const ageEnding = item => {
            let vA = +String(item).split('').pop();
            return vA === 1 ? 'год' : vA > 1 && vA < 5 ? 'года' : 'лет';
        }
        oPat.pkGeneralListOfRF.push(` возраст ${oPat.pkAge} ${ageEnding(oPat.pkAge)}`);
    }
    oPat.pkAge > 40 ? aRFVal.push('1000000000000000') : '';
    oPat.pkAge > 40 && oPat.pkAge < 61 ? aRFVal.push('1000000010000000') : '';
    oPat.pkAge > 60 && oPat.pkAge < 76 ? aRFVal.push('1000000020000000') : '';
    oPat.pkAge > 64 && oPat.pkAge < 75 ? aRFVal.push('10000100000000000') : '';
    oPat.pkAge >= 40 && oPat.pkAge < 85 ? aRFVal.push('101.500000000000') : '';
    oPat.pkAge > 65 ? aRFVal.push('1000001000000000') : '';
    oPat.pkAge > 70 ? aRFVal.push('1100000000000000') : '';
    oPat.pkAge >= 75 ? aRFVal.push('1000020030000000') : '';
    oPat.pkAge >= 85 ? aRFVal.push('103.500000000000') : '';

    oPat.pkBMI > 25 ? (aRFVal.push('1000000010000000'), oPat.pkGeneralListOfRF.push(` ${oPat.pkBMI <= 30 ? 'избыточный вес': 'ожирение'} (ИМТ > ${oPat.pkBMI} кг/м2)`)) : '';
    oPat.pkBMI > 30 ? aRFVal.push('1100000100000000') : '';
    oPat.pkBMI > 30 && oPat.pkBMI < 40 ? aRFVal.push('1000000100001010') : '';
    oPat.pkBMI > 35 ? aRFVal.push('1000000000000000') : '';
    oPat.pkBMI > 40 ? aRFVal.push('1000000000002000') : '';

    oPat.pkIsGenAnesth ? (aRFVal.push('10000001000000000'), oPat.pkGeneralListOfRF.push(' общая анестезия')) : '';
    oPat.pkIsSpinalAnesth ? (aRFVal.push('1000000001000000'), oPat.pkGeneralListOfRF.push(' люмбальная пункция')) : '';

    oPat.pkWeekOfPregnancy ? oPat.pkGeneralListOfRF.push(` беременность ${oPat.pkWeekOfPregnancy} недель`): '';
    oPat.pkPostpartum ? oPat.pkGeneralListOfRF.push(` ранний послеродовый период`): '';

    if ($('#liCC').hasClass('list-group-item-secondary')) {
        let creatinVal = $('#inpCreatinineVal').val() ? $('#inpCreatinineVal').val() : 94,
            creatinUnits = $('#slctCrUnitsGroup').val(),
            vRace = ($('#chkRaceB').is(':checked')) ? 1 : 0;
            console.log(oPat.pkGender, oPat.pkAge, oPat.pkWeight, vRace, creatinVal, creatinUnits);

        oPat.pkCC = calcCCAndGFR(oPat.pkGender, oPat.pkAge, oPat.pkWeight, vRace, creatinVal, creatinUnits)[0];
        oPat.pkGFR = calcCCAndGFR(oPat.pkGender, oPat.pkAge, oPat.pkWeight, vRace, creatinVal, creatinUnits)[1];
    } else {
        $('#liGlomerFiltrRate30_59').hasClass('list-group-item-secondary') ? (oPat.pkGFR = 59, oPat.pkCC = 72) : $('#liGlomerFiltrRateLess30').hasClass('list-group-item-secondary') ? (oPat.pkGFR = 29, oPat.pkCC = 40) : (oPat.pkGFR = 80, oPat.pkCC = 94);
    }

    console.log(`GFR: ${oPat.pkGFR}, CC ${oPat.pkCC}`);
    oPat.pkGFR < 30 ? aRFVal.push('1000001001000000'): '';

    let selectedRF = [];
    $.merge(selectedRF, $('#accListRF button.btn-secondary'));
    $(selectedRF).each((ind, el) => {
        aRFVal.push($(el).val())
    });
    selectedRF.length = 0;

    $.merge(selectedRF, $('#accListRF li.list-group-item-secondary'));
    $(selectedRF).each((ind, el) => {
        aRFVal.push(el.dataset.value);
    });
    selectedRF.length = 0;

    $.merge(selectedRF, $('#accListRF .btnSingleRF.btn-secondary, #accListRF li.list-group-item-secondary'));
    $(selectedRF).each((ind, el) => {
        oPat.pkGeneralListOfRF.push($(el).text());
    });

    console.log(aRFVal, oPat.pkGeneralListOfRF, oPat);

    let aForCounter = [oPat.pkAge, oPat.pkIsOrNoSurg, oPat.pkOperTimeMore60, oPat.pkGradeOfOper];

    console.log(aForCounter);
    console.log(oPat.pkAge, oPat.pkIsOrNoSurg, oPat.pkOperTimeMore60, oPat.pkGradeOfOper);
    console.log(aRFVal.join());
    console.log(aForCounter.join());
    // console.log(JSON.stringify(oPatForCounter));
localStorage.removeItem('objScalesVTE');
$.post('/count', {
    'rfArr': aRFVal.join(),
    'aForCounter': aForCounter.join()
},
function (data) {
    localStorage.setItem('objScalesVTE', data);
});
// aPat.push(oPat);
// serialObj = JSON.stringify(aPat);
// localStorage.setItem('Patient', serialObj);
//     $(location).attr('href', '/vte_concl');
aStepBack.push('/vte_patient_list_rf');
localStorage.setItem('StepBack', JSON.stringify(aStepBack));
    aPat.push(oPat);
    localStorage.setItem('Patient', JSON.stringify(aPat));
    $(location).attr('href', '/vte_concl');


}

$('#btnOne').on('click', countRF);