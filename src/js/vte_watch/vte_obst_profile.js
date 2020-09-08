'use strict';
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

// let oPat = JSON.parse(localStorage.getItem('Patient'));
// localStorage.removeItem('Patient')
// console.log(oPat);

$("#inpWeekOfPregnancy, #inpDateOfChildbirth, #btnOne").hide();
let vCounter = 0;
const orderBehavior = item => {
    item.on('click', () => {
        item.next('input').toggle().val('');
        // item.next('div').children('label').toggle().siblings('input').prop('checked', false);
        item.siblings('button').toggle();
        vCounter = 0;
        $('#fg_1').empty();
        });
}
orderBehavior($('#btnPregnancy'));
orderBehavior($('#btnChildbirth'));
orderBehavior($('#btnGynPathol'));

$('#btnOne').on('click', function () {
    $('#inpWeekOfPregnancy').val() > 42 && vCounter === 0 ?
        ($('<div class="alert alert-warning alert-dismissible" id= "warning-alert_1" role="alert">').html(`Срок беременности действительно ${$('#inpWeekOfPregnancy').prop('value')} недель?`).appendTo('#fg_1'), $('<button type="button" class="close" id="close_1" data-dismiss="alert" aria-label="Close">').appendTo('#warning-alert_1'), $('<span aria-hidden="true">&times;</span></button>').appendTo('#warning-alert_1 .close'), vCounter = 1) : goToRF();
});

function goToRF() {
    oPat.pkWeekOfPregnancy = $('#inpWeekOfPregnancy').val() ? +$('#inpWeekOfPregnancy').val() : '';
    oPat.pkDateOfChildbirth = $('#inpDateOfChildbirth').val() ? $('#inpDateOfChildbirth').val() : '';
    oPat.pkIsOrNoSurg = $('#chkIsOrNoOper').prop('checked') ? true : false;
    oPat.pkSurgProfiles = $('#chkIsOrNoOper').prop('checked') ? true : false;
    oPat.pkPregnancyOrChildbirth = oPat.pkWeekOfPregnancy || oPat.pkDateOfChildbirth ? true : false;
    oPat.pkPostpartum= oPat.pkDateOfChildbirth? true: false;
    // console.log(oPat);

    aPat.push(oPat);
    aStepBack.push('/vte_obst_profile');
    localStorage.setItem('StepBack', JSON.stringify(aStepBack));
    localStorage.setItem('Patient', JSON.stringify(aPat));

    // let serialObj = JSON.stringify(oPat);
    // localStorage.setItem('Patient', serialObj);
    oPat.pkIsOrNoSurg || oPat.pkInvasions ? $(location).attr('href', '/vte_oper_profile') : $(location).attr('href', '/vte_patient_list_rf');
}

//     ($('.divObsGynOper select').prop('selectedIndex') == 1) ?
//     objSelectedOper.pkElectiveCSection = true: '';
//     ($('.divObsGynOper select').prop('selectedIndex') == 2) ?
//     objSelectedOper.pkCSectionInLabour = true: '';
