function bindBalls(counter) {
    let vBalls;
    if (counter == 1) {
        vBalls = ' балл';
    }
    if (counter > 1 && counter < 5) {
        vBalls = ' балла';
    }
    if (counter > 4) {
        vBalls = ' баллов';
    }
    return counter + vBalls;
}

$('#btnTwo').on('click', function () {
    $('#pTitleOfConclusion').show();

    (vGeneralListOfRF != '') ? $('<p>', {
        text: (vGeneralListOfRF + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_1')): '';

    (vGeneralListOfOper != '') ? $('<p>', {
        text: ('Операции:' + vGeneralListOfOper + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_1')): '';

    ($('#pTextCollector_1').children().length > 0) ? $('#pTextCollector_1').show(): '';

    (vCounterPaduaScore > 3 && valuesMedPfofile.is('[value = 1]')) ? $('<p>', {
        text: ('Padua: ' + bindBalls(vCounterPaduaScore) + '. Риск ' + countStratRF(vCounterPaduaScore, 'Padua') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';

    (vCounterCHA2DS2_VASс >= 1 && valuesMedPfofile.is('[value = 2]')) ? $('<p>', {
        text: ('CHA2DS2-VASс: ' + bindBalls(vCounterCHA2DS2_VASс) + '. Риск ' + countStratRF(vCounterCHA2DS2_VASс, 'CHA2DS2_VASсOrRusSurgOrTraumRF') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';

    (vCounterCapriniRF >= 2 && vAllSurgProfiles == true) ? $('<p>', {
        text: ('Caprini: ' + bindBalls(vCounterCapriniRF) + '. Риск ' + countStratRF(vCounterCapriniRF, 'Caprini') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';

    (vCounterRusSurgRF >= 1 && vAllSurgProfiles == true) ? $('<p>', {
        text: ('Российская риска ВТЭО в хирургии: ' + bindBalls(vCounterRusSurgRF) + '. Риск ' + countStratRF(vCounterRusSurgRF, 'CHA2DS2_VASсOrRusSurgOrTraumRF') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';

    (vCounterRusTraumRF > 2 && valuesMedPfofile.is('[value = 4]')) ? $('<p>', {
        text: ('Российская риска ВТЭО в травматологии: ' + bindBalls(vCounterRusTraumRF) + '. Риск ' + countStratRF(vCounterRusTraumRF, 'CHA2DS2_VASсOrRusSurgOrTraumRF') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';

    (vCounterGreenTop37a > 0 && $('#chkMale').prop('checked', false) && valuesMedPfofile.is('[value = 10]')) ? $('<p>', {
        text: ('GreenTopGuideline37a: ' + bindBalls(vCounterGreenTop37a) + '. Риск ' + countStratRF(vCounterGreenTop37a, 'GreenTop37aRus') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';
    (vCounterObstRuRF > 0 && $('#chkMale').prop('checked', false) && valuesMedPfofile.is('[value = 10]')) ? $('<p>', {
        text: ('Российская риска ВТЭО в акушерстве-гинекологии: ' + bindBalls(vCounterObstRuRF) + '. Риск ' + countStratRF(vCounterObstRuRF, 'GreenTop37aRus') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_2')): '';
    ($('#pTextCollector_2').children().length > 0) ? $('#pTextCollector_2').show(): '';



    (vCounterIMPROVE > 7 && valuesMedPfofile.is('[value = 1]')) ? $('<p>', {
        text: ('IMPROVE: ' + bindBalls(vCounterIMPROVE) + '. Риск ' + countStratRF(vCounterIMPROVE, 'IMPROVE') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_3')): '';
    (vCounterHAS_BLED > 2 && valuesMedPfofile.is('[value = 2]')) ? $('<p>', {
        text: ('HAS-BLED: ' + bindBalls(vCounterHAS_BLED) + '. Риск ' + countStratRF(vCounterHAS_BLED, 'HAS_BLED') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_3')): '';

    (vCounterMajorBleedingScoreRF > 0 && vAllSurgProfiles == true) ? $('<p>', {
        text: ('Major Bleeding Score: ' + bindBalls(vCounterMajorBleedingScoreRF) + '. Риск ' + countStratRF(vCounterMajorBleedingScoreRF, 'SurgOrTraumBleedingRF') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_3')): '';

    (vCounterTraumBleedingRF > 0 && valuesMedPfofile.is('[value = 4]')) ? $('<p>', {
        text: ('... при больших травматологических вмешательствах: ' + bindBalls(vCounterTraumBleedingRF) + '. Риск ' + countStratRF(vCounterTraumBleedingRF, 'SurgOrTraumBleedingRF') + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_3')): '';

    (vCounterObstBleedingRF > 0 && $('#chkMale').prop('checked', false) && valuesMedPfofile.is('[value = 10]')) ? $('<p>', {
        text: ('... в акушерстве-гинекологии: ' + bindBalls(vCounterObstBleedingRF) + '.'),
        class: 'pTextContainer'
    }).appendTo($('#pTextCollector_3')): '';

    ($('#pTextCollector_3').children().length > 0 && $('#chkCalculateRiskOfBleeding').is(':checked')) ? $('#pTextCollector_3').show(): '';
    $('.pTextContainer:contains("высокий")').css({
        'color': 'red'
    });
    $('.pTextContainer:contains("умеренный")').css({
        'color': 'orange'
    });
})

$('#btnThree').on('click', function () {

    console.log('Gender ' + objPatient.pkGender);
    console.log('Age ' + objPatient.pkAge);
    console.log('Height ' + objPatient.pkHeight);
    console.log('Weight ' + objPatient.pkWeight);
    console.log('Med Profile ' + objPatient.pkMedProfile);
    console.log('RiskVTE ' + objPatient.pkRiskVTE);
    console.log('CC ' + objPatient.pkCC);

    let arrStratRF = [0, 0, 0, [0, 0], 0];

    function getMainMedProfile() {

        vCounterPaduaScore > 3 ? arrStratRF[1] = 2 : '';
        if (valuesMedPfofile.is('[value = 2]')) {
            vCounterCHA2DS2_VASс > 0 ? arrStratRF[2] = 2 : '';
        };
        if ($('#chkIsOrNoSurg').is(':checked')) {
            vCounterRusSurgRF >= 1 && vCounterRusSurgRF <= 2 ? arrStratRF[3][0] = 1 : vCounterRusSurgRF >= 3 ? arrStratRF[3][0] = 2 : '';
            vCounterCapriniRF >= 1 && vCounterCapriniRF <= 2 ? arrStratRF[3][1] = 1 : vCounterCapriniRF >= 3 ? arrStratRF[3][1] = 2 : '';
        };
        if (valuesMedPfofile.is('[value = 4]')) {
            vCounterRusTraumRF >= 1 && vCounterRusTraumRF <= 2 ? arrStratRF[4] = 1 : vCounterRusTraumRF >= 2 ? arrStratRF[4] = 2 : '';
        };
        vCounterObstRuRF == 2 ? arrStratRF[5] = 1 : vCounterObstRuRF > 2 ? arrStratRF[5] = 2 : '';

        arrStratRF[3] = Math.max.apply(null, arrStratRF[3]);

        arrStratRF[1] === 2 ? (objPatient.pkMedProfile = 1, objPatient.pkRiskVTE = arrStratRF[1]) : '';
        arrStratRF[2] === 1 || arrStratRF[2] === 2 ? (objPatient.pkMedProfile = 2, objPatient.pkRiskVTE = arrStratRF[2]) : '';
        if (arrStratRF[1] === 0 && arrStratRF[2] === 0) {
            arrStratRF[3] >= 1 ? (objPatient.pkMedProfile = 3, objPatient.pkRiskVTE = arrStratRF[3]) : '';
            arrStratRF[4] >= 1 ? (objPatient.pkMedProfile = 4, objPatient.pkRiskVTE = arrStratRF[4]) : '';
            //    arrStratRF[3] === 2 ? objPatient.pkMedProfile = 3 : '';       arrStratRF[4] === 2 ? objPatient.pkMedProfile = 4 : '';
        };
        objPatient.pkDateOfChildbirth ?         (objPatient.pkMedProfile = 5, objPatient.pkRiskVTE =        arrStratRF[5]) :'';

        objPatient.pkRiskVTE = arrStratRF[objPatient.pkMedProfile];
//        return objPatient.pkMedProfile;
//        return [objPatient.pkMedProfile, objPatient.pkRiskVTE];
    }
getMainMedProfile();
    console.log(objPatient.pkMedProfile);
    console.log(objPatient.pkRiskVTE);
    console.log(objPatient.pkSevereHepaticFailure);
    console.log(objPatient.pkHeartInsuff3_4);
    console.log(objPatient.pkIsOrNoSurg);
    console.log(objPatient.pkIsOrNoSurg);
    console.log('Diabetes: ' + objPatient.pkDiabetes);
    console.log('vActiveUlcer: ' + objPatient.pkActiveUlcerOfStomachOrDuodenum);
    console.log('Chronic Dialysis: ' + objPatient.pkChronicDialysis);
    console.log('Artificial Heart Valve: ' + objPatient.pkArtificialHeartValve);
    console.log('Uncontrolled Systemic Hypertension: ' + objPatient.pkUncontrolledSystemicHypertension);
    console.log('Some Surg: ' + objPatient.pkPullOfSurg);
    console.log('Artroplasty: ' + objPatient.pkArtroplasty);
//    console.log('vProbe: ' + vProbe);

delete objPatient.pkHeight;
let serialObj = JSON.stringify(objPatient);
localStorage.setItem("Patient", serialObj);
let returnObj = JSON.parse(localStorage.getItem("Patient"))
alert(returnObj.pkMedProfile);//спарсим его обратно объект
});
