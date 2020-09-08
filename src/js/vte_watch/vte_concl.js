console.log('vte_concl has attached')
let aPat = [], aStepBack= [];
aPat = JSON.parse(localStorage.getItem('Patient'));
aStepBack = JSON.parse(localStorage.getItem('StepBack'));

let oSc = JSON.parse(localStorage.getItem('objScalesVTE')),
oPatProto = aPat[aPat.length - 1],
oPat ={...oPatProto};
oPat.aOrdersContainer = []; 
oPat.pkStartDateOfVTEProphyl = oPat.pkDateOfOper;

console.log(aStepBack, aPat, oPat);

$('#aStepBack').on('click', () => {
    doStepBack(aPat, 'Patient');
    doStepBack(aStepBack, 'StepBack');
    localStorage.removeItem('objScalesVTE');
}).prop({'href': aStepBack[aStepBack.length - 1]});

const ballsEnding = item => {
    return item === 1 ? 'балл' : item > 1 && item < 5 ? 'балла' : 'баллов';
}

function countStratRF(vCounterRF, vScaleTitle) {
    let vStratRF = '';
    switch (vScaleTitle) {
        case 'Padua':
            vCounterRF > 3 ? vStratRF = 'высокий' : vStratRF = 'низкий';
            return vStratRF;
        case 'IMPROVE':
            vCounterRF > 7 ? vStratRF = 'высокий' : vStratRF = 'низкий';
            return vStratRF;
        case 'HAS_BLED':
            vCounterRF > 2 ? vStratRF = 'высокий' : vStratRF = 'низкий';
            return vStratRF;
        case 'CHA2DS2_VASсOrRusSurgOrTraumRF':
            vCounterRF == 0 ? vStratRF = 'низкий' : vCounterRF >= 1 && vCounterRF <= 2 ? vStratRF = 'умеренный' : vStratRF = 'высокий';
            return vStratRF;
        case 'Caprini':
            vCounterRF == 0 ? vStratRF = 'низкий' : vCounterRF >= 1 && vCounterRF <= 2 ? vStratRF = 'умеренный' : vCounterRF >= 3 && vCounterRF <= 4 ? vStratRF = 'высокий' : vStratRF = 'очень высокий';
            return vStratRF;
        case 'SurgOrTraumBleedingRF':
            vCounterRF >= 1 ? vStratRF = 'высокий' : vStratRF = 'низкий';
            return vStratRF;
        case 'GreenTop37aRus':
            vCounterRF === 1 ? vStratRF = 'умеренный' : vCounterRF > 1 ? vStratRF = 'высокий' : vStratRF = 'низкий';
            return vStratRF;
    }
}

oPat.pkGeneralListOfRF.length ? $('<p>', {
    text: (`Риск-факторы: ${oPat.pkGeneralListOfRF}.`)
}).appendTo('.textContainer') : '';

oPat.pkAllChoosedOperations ? $('<p>', {
    text: (`Операции: ${oPat.pkAllChoosedOperations}.`)
}).appendTo('.textContainer') : '';

$('<div/>').prop({
    'id': 'divT_2'
}).text('Шкалы риска ВТЭО:').appendTo('.textContainer').hide();

$('<div/>').prop({
    'id': 'divT_3'
}).text('Шкалы риска кровотечения при профилактике ВТЭО:').appendTo('.textContainer').hide();

const makeScale = (sVal, sName, sExactName, par) =>
    $('<p>', {
        text: `Шкала ${sName}: ${sVal} ${ballsEnding(sVal)} и более. Риск ${countStratRF(sVal, sExactName)}.`
    }).appendTo(par);

let vPar = '#divT_2';

oSc.sPadua > 3 && oPat.pkMedProfiles.includes(1) ? makeScale(oSc.sPadua, 'Padua', 'Padua', vPar) : '';
oSc.sCHA2DS2_VASс >= 1 && oPat.pkMedProfiles.includes(2) ? makeScale(oSc.sCHA2DS2_VASс, 'CHA2DS2-VASс', 'CHA2DS2_VASсOrRusSurgOrTraumRF', vPar) : '';
oPat.pkIsOrNoSurg && oSc.sCaprini >= 2 && oPat.pkSurgProfiles == true ? makeScale(oSc.sCaprini, 'Caprini', 'Caprini', vPar) : '';
oPat.pkIsOrNoSurg && oSc.sRusSurgRF >= 1 && oPat.pkSurgProfiles == true ? makeScale(oSc.sRusSurgRF, 'Российская риска ВТЭО в хирургии', 'CHA2DS2_VASсOrRusSurgOrTraumRF', vPar) : '';
oPat.pkIsOrNoSurg && oSc.sRusTraumRF > 2 && oPat.pkMedProfiles.includes(4) ? makeScale(oSc.sRusTraumRF, 'Российская риска ВТЭО в травматологии', 'CHA2DS2_VASсOrRusSurgOrTraumRF', vPar) : '';
oSc.sGreenTop37a > 0 && oPat.pkMedProfiles.includes(10) ? makeScale(oSc.sGreenTop37a, 'GreenTopGuideline37a', 'GreenTop37aRus', vPar) : '';
oSc.sObstRusRF > 0 && oPat.pkMedProfiles.includes(10) ? makeScale(oSc.sObstRusRF, 'Российская риска ВТЭО в акушерстве-гинекологии', 'GreenTop37aRus', vPar) : '';

$('#divT_2').children().length ? (oPat.pkRiskVTE = true, $('#divT_2').show()): (oPat.pkRiskVTE = false, $('<strong>Риск ВТЭО низкий. Медикаментозная профилактика не показана.</strong>').appendTo('.textContainer'));

if (oPat.pkCalculateRiskOfBleeding) {
    vPar = '#divT_3';

    oSc.sIMPROVE > 7 && oPat.pkMedProfiles.includes(1) ? makeScale(oSc.sIMPROVE, 'IMPROVE', 'IMPROVE', vPar) : '';
    oSc.sHAS_BLED > 2 && oPat.pkMedProfiles.includes(2) ? makeScale(oSc.sHAS_BLED, 'HAS-BLED', 'HAS_BLED', vPar) : '';
    oSc.sMajorBleed > 0 && oPat.pkSurgProfiles ? makeScale(oSc.sMajorBleed, 'Major Bleeding Score', 'SurgOrTraumBleedingRF', vPar) : '';
    oSc.sTraumBleed > 0 && oPat.pkMedProfiles.includes(4) ? makeScale(oSc.sTraumBleed, '... при больших травматологических вмешательствах', 'SurgOrTraumBleedingRF', vPar) : '';
    oSc.sObstBleed > 0 && oPat.pkGender === 0 && oPat.pkMedProfiles.includes(10) ?
        $('<p>', {
            text: `... в акушерстве-гинекологии: ${oSc.sObstBleed} ${ballsEnding(oSc.sObstBleed)}. Риск высокий.`
        }).appendTo('#divT_3') : '';

    $('#divT_3').children().length ? ($('#divT_3').show(), oPat.pkHighRiskOfBleed = true) : oPat.pkHighRiskOfBleed = false;
};

$('.textContainer p:contains("высокий")').addClass('text-danger');
$('.textContainer p:contains("умеренный")').addClass('text-warning');

$('#btnOne').on('click', function () {
    aStepBack.push('/vte_concl');
    localStorage.setItem('StepBack', JSON.stringify(aStepBack));
        aPat.push(oPat);
        localStorage.setItem('Patient', JSON.stringify(aPat));
        const initModal = (quest, ind) => {
            $(`<div class="modal" tabindex="-1" role="dialog" id="#divModal_${ind}" data-backdrop="static"><div class="modal-dialog" role="document" ><div class="modal-content"><div class="modal-body"><p>${quest}</p></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal"  id="btnMYes_${ind}">Да</button><button type="button" class="btn btn-secondary" data-dismiss="modal" id="btnMNo_${ind}">Нет</button></div></div></div></div>`).appendTo('body').show();
        };
    if (oPat.pkRiskVTE) {
        if (oPat.pkHighRiskOfBleed) {
            initModal('Риск кровотечения высокий. Отменить медикаментозную профилактику ВТЭО?', 1);
            $('#btnMYes_1').on('click', () => {
                $(location).attr('href', '/vte_assignment_sheet');
            });
            $('#btnMNo_1').on('click', () => {
                $(location).attr('href', '/vte_drug');
            });
        } else {
            $(location).attr('href', '/vte_drug');
        };
    } else {
        $(location).attr('href', '/vte_patient_profile');
    };
});