$( document ).ready(function() {
    // let oPat = JSON.parse(localStorage.getItem('Patient'));
// localStorage.removeItem('Patient')
console.log('vte_oper_profile has attached');

let aPat = [], aStepBack= [];
aPat = JSON.parse(localStorage.getItem('Patient'));
aStepBack = JSON.parse(localStorage.getItem('StepBack'));
console.log(aStepBack, aPat);

let oPatProto = aPat[aPat.length - 1],
oPat ={...oPatProto};

console.log(aStepBack, aPat, oPat);

$('#aStepBack').on('click', () => {
    doStepBack(aPat, 'Patient');
    doStepBack(aStepBack, 'StepBack');
}).prop({'href': aStepBack[aStepBack.length - 1]});




$('#divCreateOwnOpProf').hide();
!oPat.pkIsOrNoSurg || !oPat.pkSurgProfiles ? $('#divOper').hide() : '';
oPat.pkInvasions ? $('#txtInvasions').focus() : $('#txtInvasions').hide();

let vIsShow = false;


const createCard = (title, ind, content) => {
    $('#accListOp').append(`<div class="card"><div class="card-header" id="divCHeader_${ind}"><h5 class="mb-0"><button class="btn btn-block" type="button" data-toggle="collapse" data-target="#collapse_${ind}" aria-controls="collapse_${ind}">${title}</button></h5></div>
    <div id="collapse_${ind}" class="collapse ${vIsShow ? '': 'show'}" aria-labelledby="divCHeader_${ind}" data-parent="#accListOp"><div class="card-body"><ul class="list-group list-group-flush">${content}</ul></div></div></div>`);
    vIsShow = true;
}
function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
function correctDate(vD) {
    return `${vD.getFullYear()}-${('0' + (vD.getMonth() + 1)).slice(-2)}-${('0' + vD.getDate()).slice(-2)}`;
}

const addDatePicker = (vDate, ind) => `<input class="form-control" type="date" value= "${vDate}" id="inpDate_${ind}">`;


$(`${addDatePicker(correctDate(new Date()), 1)}`).appendTo('#divForDate_1');

$('#lblTimeOfSurg').hide();
$('span.comments').hide();

$('#rdoSmallOper').on('click', function () {
    $(this).prop('checked') ? $('#lblTimeOfSurg').show() : '';
});
$('#rdoLargeOper').on('click', function () {
    $(this).prop('checked') ? ($('#lblTimeOfSurg').hide(), $('#chkTimeOfSurg').prop('checked', false)) : '';
});

$(oPat.pkMedProfiles).each((ind, el) => {
    let vContent = '';
    el === 3 ? (vContent = '<li class="list-group-item" value="0"> плановая холецистэктомия</li><li class="list-group-item" value="0"> неосложненная аппендэктомия</li><li class="list-group-item" value="0"> грыжесечение</li><li class="list-group-item" value="1"> гастрэктомия</li><li class="list-group-item" value="1"> резекция печени</li><li class="list-group-item" value="1"> панкреатодуоденальная резекция</li><li class="list-group-item" value="1"> колэктомия</li><li class="list-group-item" value="1"> резекция желудка или кишечника</li><li class="list-group-item" value="1"> осложненная аппендэктомия</li><li class="list-group-item" value="1"> холецистэктомия по экстренным показаниям</li><li class="list-group-item" value="1"> пульмонэктомия или расширенная резекция легкого</li><li class="list-group-item" value="1"> ампутация бедра</li><li class="list-group-item" value="1"> бариатрические операции</li><li class="list-group-item" value="1"> лапароскопическое вмешательство (длительностью &gt; 45 мин.)</li>', createCard('Общая хирургия', el, vContent)) : '';

    el === 4 ? (vContent = '<li class="list-group-item" value="1"> ампутация бедра</li><li class="list-group-item" value="0"> вмешательство по поводу деформации стопы</li><li class="list-group-item" value="2"> эндоскопические операции на суставах нижней конечности</li><li class="list-group-item" value="0"> операции на мягких тканях нижних конечностей с последующей иммобилизацией</li><li class="list-group-item" value="1"> остеотомии и остеосинтез таза</li><li class="list-group-item" value="1"> остеотомии и остеосинтез голени</li><li class="list-group-item" value="3"> эндопротезирование тазобедренного сустава</li><li class="list-group-item" value="3"> эндопротезирование коленного сустава</li><li class="list-group-item" value="3"> операции при переломах бедра</li><li class="list-group-item" value="1"> операции на позвоночном столбе</li>', createCard('Травматология и ортопедия', el, vContent)) : '';

    el === 5 ? (vContent = '<li class="list-group-item" value="1"> операции на головном и спинном мозге</li>', createCard('Нейрохирургия', el, vContent)) : '';

    el === 6 ? (vContent = '<li class="list-group-item" value="0"> флебэктомия</li><li class="list-group-item" value="0"> стволовая лазерная или радиочастотная облитерация</li><li class="list-group-item" value="0"> кроссэктомия при восходящем тромбофлебите поверхностных вен</li><li class="list-group-item" value="1"> артериальная реконструкция</li><li class="list-group-item" value="1"> аорто-коронарное шунтирование</li><li class="list-group-item" value="1"> операция на открытом сердце</li>', createCard('Сердечно-сосудистая хирургия', el, vContent)) : '';

    el === 7 ? (vContent = '<li class="list-group-item" value="0"> трансуретральная аденомэктомия</li><li class="list-group-item" value="1"> чреспузырная аденомэктомия</li><li class="list-group-item" value="1"> экстирпация мочевого пузыря</li><li class="list-group-item" value="1"> нефрэктомия с лимфоаденэктомией и/или удалением опухолевого тромба из нижней полой вены</li>', createCard('Урология', el, vContent)) : '';

    el === 8 ? (vContent = '<li class="list-group-item" value="0"> некрэктомия ожоговых ран на площади до 10% поверхности тела</li><li class="list-group-item" value="0"> аутодермопластика до 15% поверхности тела</li><li class="list-group-item" value="1"> некрэктомия ожоговых ран на площади свыше 10% поверхности тела</li><li class="list-group-item" value="1"> аутодермопластика свыше 15% поверхности тела</li>', createCard('Комбустиология', el, vContent)) : '';

    el === 10 ? (vContent = '<li class="list-group-item" value="0"> аборт</li><li class="list-group-item" value="1"> кесарево сечение плановое </li><li class="list-group-item" value="1"> кесарево сечение в родах</li><li class="list-group-item" value="1"> ампутация матки</li><li class="list-group-item" value="1"> экстирпация матки</li>', createCard('Акушерство и гинекология', el, vContent)) : '';
});

$("#accListOp li").on('click', function (vTB) {
    vTB = $(this).parents('.collapse').siblings().find('button');
    $(this).toggleClass('list-group-item-secondary');
    $(this).siblings('.list-group-item-secondary').length > 0 || $(this).hasClass('list-group-item-secondary') ? $(vTB).addClass('btn-secondary') : $(vTB).removeClass('btn-secondary');
});

$('#btnCreateOwnOpProf').on('click', () => {
    $('#divCreateOwnOpProf').show();
    $('#accListOp').hide();
    $('#accListOp li').removeClass('list-group-item-secondary');
    $('#accListOp button').removeClass('btn-secondary');
});

$('#btnChooseOp').on('click', () => {
    $('#accListOp').show();
    $('#divCreateOwnOpProf').hide();
    $('#divCreateOwnOpProf radio').prop({
        checked: false
    });
    $('#taNonTrivialOperTitle').val('');
});
$('#btnOperTomorrow').on('click', () => {
    $('#divForDate_1').empty();
    $(`${addDatePicker(correctDate(addDays(new Date(), 1)))}`).appendTo('#divForDate_1');
});

$('span.preComments').on('click', function () {
    $(this).hide().next().show();
})
$('span.comments').on('click', function () {
    $(this).hide().prev().show();
});

console.log('inpDate_1  ' + $('#inpDate_1').val());

$('#selKindOfAnesth').on('input', () => {
    +$('#selKindOfAnesth option:selected').val() === 3 ? ($(`<br><span>Дата установки катетера</span>${addDatePicker($('#inpDate_1').val(), 2)}`).appendTo('#divForDate_2'), $(`<span>Дата удаления катетера</span>${addDatePicker($('#inpDate_1').val(), 3)}`).appendTo('#divForDate_2')) : $('#divForDate_2').empty();
});

$('#txtInvasions').on('input', function () {
    let vTD = oPat.pkIsOrNoSurg ? $('#inpDate_1').val() : correctDate(new Date());
    $(this).prop('value') ? ($(`<span>Дата установки катетера или начала процедуры</span>${addDatePicker(vTD, 4)}`).appendTo('#divForDate_3'),
        $(`<span>Дата удаления катетера или окончания процедуры</span>${addDatePicker(vTD, 5)}`).appendTo('#divForDate_3')) : $('#divForDate_3').empty();
});

function goToRF() {
    oPat.pkDateOfOper = $('#inpDate_1').val();
    if (+$('#selKindOfAnesth option:selected').val() === 3) {
        oPat.pkIsSpinalAnesth = true;
        oPat.pkStandDateITCath = $('#inpDate_2').val();
        oPat.pkRemoveDateITCath = $('#inpDate_3').val();
    }
    oPat.pkIsGenAnesth = (+$('#selKindOfAnesth option:selected').val() < 3) ? true : false;

    oPat.pkInvasions && $('#txtInvasions').prop('value') ? (
        oPat.pkTitleInvasion = $('#txtInvasions').val(),
        oPat.pkStartDateOfInvasion = $('#inpDate_4').val(),
        oPat.pkEndDateOfInvasion = $('#inpDate_5').val()
    ) : '';
console.log( $('#accListOp li.list-group-item-secondary'));
let aOperDifficultyGrades = [];
oPat.pkAllChoosedOperations = [];
$('#accListOp li.list-group-item-secondary').each((ind, el)=> {
    aOperDifficultyGrades.push($(el).val());
    oPat.pkAllChoosedOperations.push($(el).text());

});
console.log(aOperDifficultyGrades, oPat.pkAllChoosedOperations);
oPat.oSelOp = {
pkArtroplastyHipJoint: oPat.pkAllChoosedOperations.includes(' эндопротезирование тазобедренного сустава')? true: false,
pkArtroplastyKneeJoint: oPat.pkAllChoosedOperations.includes(' эндопротезирование коленного сустава')? true: false,
// pkArthroscopicSurgery: oPat.pkAllChoosedOperations.includes(' эндоскопические операции на суставах нижней конечности')? true: false,
// pkShinFractureSurgery: oPat.pkAllChoosedOperations.includes(' остеотомии и остеосинтез голени')? true: false,
pkHipFractureSurgery: oPat.pkAllChoosedOperations.includes(' операции при переломах бедра')? true: false,
pkLiverResection: oPat.pkAllChoosedOperations.includes(' резекция печени')? true: false,
pkPancreatoDuodResection: oPat.pkAllChoosedOperations.includes(' панкреатодуоденальная резекция')? true: false,
pkPulmonectomy: oPat.pkAllChoosedOperations.includes(' пульмонэктомия или расширенная резекция легкого')? true: false,
// pkLaparoscopicIntervention: oPat.pkAllChoosedOperations.includes(' лапароскопическое вмешательство (длительностью > 45 мин.)')? true: false,

pkBrainOrSpinalCordSurg: oPat.pkAllChoosedOperations.includes(' операции на головном и спинном мозге')? true: false
};

oPat.oSelOp.pkArtroplasty = oPat.oSelOp.pkArtroplastyHipJoint || oPat.oSelOp.pkArtroplastyKneeJoint ? true: false;
oPat.oSelOp.pkHeartSurgery = oPat.pkAllChoosedOperations.includes(' аорто-коронарное шунтирование') || oPat.pkAllChoosedOperations.includes(' операция на открытом сердце') ? true: false;


console.log(oPat.oSelOp);

$('#taNonTrivialOperTitle').val() ? oPat.pkAllChoosedOperations.push(` ${$('#taNonTrivialOperTitle').val()}`) : '';

$('input[name=rdoSmallOrLargeOper]:checked').val() ? aOperDifficultyGrades.push(+$('input[name=rdoSmallOrLargeOper]:checked').val()) : '';

const getMaxOfArray = numArray => Math.max.apply(null, numArray);
oPat.pkGradeOfOper = getMaxOfArray(aOperDifficultyGrades.map(Number));

($('#chkTimeOfSurg').is(':checked')) ? oPat.pkOperTimeMore60 = true: '';

aPat.push(oPat);
aStepBack.push('/vte_oper_profile');
localStorage.setItem('StepBack', JSON.stringify(aStepBack));
localStorage.setItem('Patient', JSON.stringify(aPat));

// console.log(oPat);
// let serialObj = JSON.stringify(oPat);
// localStorage.setItem('Patient', serialObj);
$(location).attr('href', '/vte_patient_list_rf');
}

$('#btnOne').on('click', goToRF);
});