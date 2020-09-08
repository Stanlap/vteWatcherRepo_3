$(document).ready(function () {
    function correctDate(vD) {
        return `${vD.getFullYear()}-${('0' + (vD.getMonth() + 1)).slice(-2)}-${('0' + vD.getDate()).slice(-2)}`;
    }
    function addDays(date, days) {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    function formatDate() {
        let d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear(),
            vDateNow = '';
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        vDateNow = [year, month, day].join('-');
        return vDateNow;
    }
    function diffDates(dateOne, dateTwo) {
        return (dateOne - dateTwo) / (60 * 60 * 24 * 1000);
    }

    const convertDateToRuFormat = (date) => {
        let vD = new Date(date);
    
        function getZero(num) {
            if (num > 0 && num < 10) {
                return '0' + num;
            } else {
                return num;
            }
        }
        return getZero(vD.getDate()) + '.' + getZero(vD.getMonth() + 1) + '.' + vD.getFullYear()
    }
    
    

    let aPat = [], aStepBack= [];
    aPat = JSON.parse(localStorage.getItem('Patient'));
    aStepBack = JSON.parse(localStorage.getItem('StepBack'));
    
    oPatProto = aPat[aPat.length - 1],
    oPat ={...oPatProto};
    
    console.log(aStepBack, aPat, oPat);
    
    $('#aStepBack').on('click', () => {
        doStepBack(aPat, 'Patient');
        doStepBack(aStepBack, 'StepBack');
    }).prop({'href': aStepBack[aStepBack.length - 1]});

    let aLineOfFuncs = [],
        oUsr = JSON.parse(localStorage.getItem('User'));
    console.log(oPat, oUsr);

    // $('<div class="modal" tabindex="-1" role="dialog" id="#divModal" data-backdrop="static"><div class="modal-dialog" role="document" ><div class="modal-content"><div class="modal-body"><p>Вы укажете ФИО, № палаты, № истории б-ни пациента?</p></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal"  id="btnModalYes_1">Да</button><button type="button" class="btn btn-secondary" data-dismiss="modal" id="btnModalNo_1">Нет</button></div></div></div></div>').modal('show');
    // $('#btnModalYes_1').on('click', () => askPersonDates());
    // $('#btnModalNo_1').on('click', () => askAssignSheet());
    
    let vAgreement = '',
        vTblAssignSheet = '';

    let relDayOfManipul = oPat.pkDateOfOper? 1 + Math.round(diffDates(new Date(oPat.pkDateOfOper), new Date(oPat.pkStartDateOfVTEProphyl))): 0;

    
    oPat.aOrdersContainer.push(['компрессионный трикотаж на ноги', [relDayOfManipul, 1 + relDayOfManipul, 2 + relDayOfManipul]]);
    oPat.pkIsOrNoSurg ? oPat.aOrdersContainer.push(['активизация пациента', [1 + relDayOfManipul, 2 + relDayOfManipul, 3 + relDayOfManipul]]) : '';
    console.log(oPat.aOrdersContainer);
    let aVTEPrPlan = [];
    $(oPat.aOrdersContainer).each((ind, el) => aVTEPrPlan.push(' ' + el[0]));
console.log(oPat.aOrdersContainer);
    $('<h5/>').prop({
            id: 'invitToAct_1',
            class: 'invits'
        })
        .html('')
        .appendTo('#dialogMain');
    $('<div/>').prop({
        id: 'dialog_0',
        class: 'dialogs'
    }).appendTo('#dialogMain');
    $('<br>').prop({}).appendTo('#dialogMain');

    clearValues();
    executeFuncsLine();

    function clearValues() {
        $('.invits').html('');
        $('.dialogs').hide();
        $('#btnOne').off('click');
    }

    function executeFuncsLine() {
        aLineOfFuncs.length > 0 ? (aLineOfFuncs[0](), aLineOfFuncs.shift()) : '';
    }

    function askPersonDates() {
        console.log('askPersonDates');
        $('#invitToAct_1').html('Введите данные пациента:');
        $('#dialog_0').show();
        $('<div/>').prop({
            class: 'input-group mb-3',
            id: 'divDialog_0_0'
        }).appendTo('#dialog_0')
        $('<input/>').prop({
            id: 'inpText_0',
            type: 'text',
            class: 'form-control',
            placeholder: 'Фамилия, имя, отчество',
            'aria-label': 'Имя пользователя',
            'aria-describedby': 'basic-addon1'
        }).appendTo('#divDialog_0_0');
        $('<div/>').prop({
            class: 'input-group mb-3',
            id: 'divDialog_0_1'
        }).appendTo('#dialog_0');
        $('<input/>').prop({
            id: 'inpText_1',
            type: 'number',
            class: 'form-control',
            placeholder: 'Номер палаты',
            'aria-label': 'Номер палаты',
            'aria-describedby': 'basic-addon1',
            autocomplete: 'off'
        }).appendTo('#divDialog_0_1');
        $('<div/>').prop({
            class: 'input-group mb-3',
            id: 'divDialog_0_2'
        }).appendTo('#dialog_0');
        $('<input/>').prop({
            id: 'inpText_2',
            type: 'number',
            class: 'form-control',
            placeholder: 'Номер мед. карты',
            'aria-label': 'Номер мед. карты',
            'aria-describedby': 'basic-addon1',
            autocomplete: 'off'
        }).appendTo('#divDialog_0_2');

        $('#btnOne').on('click', definePersonDates);
    }
    askPersonDates();
    function definePersonDates() {
        console.log('definePersonDates');
        oPat.pkName = $('#inpText_0').val();
        oPat.pkRoom = $('#inpText_1').val();
        oPat.pkMedCard = $('#inpText_2').val();
        $('#dialog_0').empty();
        clearValues();
        aLineOfFuncs = [askAssignSheet, askAgreement, askPrintAndSave];
        executeFuncsLine();
    }

    function askAssignSheet() {
        console.log('askAssignSheet');
        $('#invitToAct_1').html('Проверьте лист назначений:');
        $('#dialog_0').show();
        $('<table/>').prop({
                class: 'table table-bordered table-sm table-responsive table-striped table-hover',
                id: 'tblAssignSheet',
            })
            .appendTo('#dialog_0');

        $('<caption/>').html(`${oUsr.org} ${oUsr.depart}`)
            .appendTo('#tblAssignSheet');

        $('<tbody/>').html(`<tr><td colspan="21">Лист врачебных назначений профилактики ВТЭО</td></tr><tr><th colspan="5" contenteditable>Мед. карта: ${oPat.pkMedCard}</th><th colspan="13" contenteditable>Пациент: ${oPat.pkName}</th><th colspan="3" contenteditable>Палата: ${oPat.pkRoom}</th></tr>`)
            .appendTo('#tblAssignSheet');

        let tArD = [],
            tArMY = [],
            vCnt = 0,
            vCnt_1 = 0,
            aTCont_1 = [],
            aTCont_3 = [];

        while (vCnt_1 < 14) {
            aTCont_1.push('<td></td>');
            aTCont_3.push('<td class="tdPhysitian"></td>');
            vCnt_1++;
        };

        for (let i = 0; i < 14; i++) {
            tArD.push(`<td>${(addDays(new Date(), i)).getDate()}</td>`);
            tArMY.push(`<td>${1 + (addDays(new Date(), i)).getMonth()}/${(addDays(new Date(), i)).getFullYear().toString().slice(2)}</td>`);
        };
        $('#tblAssignSheet > tbody:last-child').append(`<tr class="trDates"><td id="tdSignTitle" colspan="6" rowspan="2">Назначения:</td><td colspan="1">м./г.</td>${tArMY.join('')}</tr><tr class="trSignature"></td><td colspan="1">День</td>${tArD.join('')}</tr>`);

        $(oPat.aOrdersContainer).each((ind, el) => {
            el[1] = el[1].filter(item => item < 14);
            let aTCont_2 = [...aTCont_3];

            $(el[1]).each((ind1, el1) => {
                el1 = el1 + oPat.pkDaysSincePrevAnalysisToStartVTEProph;
                aTCont_2[el1] = `<td class="tdPhysitian">${oUsr.signature}</td>`;
            });
            $('#tblAssignSheet > tbody:last-child').append(`<tr class="trSignature"><td colspan="6" rowspan="2" contenteditable>${el[0]}</td><td colspan="1">врач</td>${aTCont_2.join('')}</tr><tr class="trSignature"></td><td colspan="1">сест.</td>${aTCont_1.join('')}</tr>`);
            vCnt++;
        });

        while (vCnt < 20) {
            $('#tblAssignSheet > tbody:last-child').append(`<tr class="trSignature"><td colspan="6" rowspan="2" contenteditable></td><td colspan="1">врач</td>${aTCont_3.join()}</tr><tr class="trSignature"></td><td colspan="1">сест.</td>${aTCont_1.join()}</tr>`);
            vCnt++;
        }

        $('.tdPhysitian').dblclick(function () {
            $(this).html() === '' ? $(this).html(oUsr.signature) : $(this).html('');
        });
        $('#btnOne').on('click', defineAssignSheet);
    }

    function defineAssignSheet() {
        console.log('defineAssignSheet');
        $('header, footer, #invitToAct_1, #btnOne').hide();
        vTblAssignSheet = printDoc($('body').html(), 1);
        $('header, footer, #invitToAct_1, #btnOne').show();
        $('#dialog_0').empty();
        aLineOfFuncs = [askAgreement, askPrintAndSave];
        clearValues();
        executeFuncsLine();
    }

    function askAgreement() {
        console.log('askAgreement');
        $('#invitToAct_1').html('Проверьте текст согласия на профилактику ВТЭО:');
        $('#dialog_0').show();
        $('<div/>').prop({
            contenteditable: true,
            id: 'taDialog_0'
        }).css({
            'overflow': 'auto'
        }).html(fillAgreement()).appendTo('#dialog_0');
        $('#btnOne').on('click', defineAgreement);
    }

    function defineAgreement() {
        console.log('askAgreement');
        vAgreement = $('#taDialog_0').html();
        $('#dialog_0').empty();
        clearValues();
        executeFuncsLine();
    }

    function fillAgreement() {
        return `<p>СОГЛАСИЕ ПАЦИЕНТА НА ПРЕДЛОЖЕННЫЙ ПЛАН
        ПРОФИЛАКТИКИ ТРОМБОЭМБОЛИИ ЛЕГОЧНОЙ АРТЕРИИ</p>Приложение к медицинской карте N ${oPat.pkMedCard ? oPat.pkMedCard: '_______'}
        <P>Я,
        ${oPat.pkName ? oPat.pkName : '________________________________________________________'}
        получил  разъяснения  по  поводу  необходимости  профилактики тромбоэмболии
        легочной  артерии,  информацию  об  особенностях,  длительности  течения  и
        прогнозе этого осложнения в послеоперационном периоде. ${oPat.pkGeneralListOfRF !== 'отсутствуют' ? 'У меня имеются риск-факторы развития ВТЭО: ' + oPat.pkGeneralListOfRF + '.': ''} ${oPat.pkAllChoosedOperations > 0 ? 'Мне предстоит оперативное вмешательство: ' + oPat.pkAllChoosedOperations + '.': ''} ${oPat.pkIsCentrAVAccess && !oPat.pkHasCentrAVAccess ? 'Мне планируется установка центрального венозного (артериального) катетера.': ''} ${oPat.pkIsSpinalAnesth ? 'Оперативное вмешательство будет выполнено под с/м анестезией.': ''} ${aVTEPrPlan.length > 0 ? `Краткий план назначенной мне профилактики ВТЭО: ${aVTEPrPlan}.`: ''}
        ${oPat.pkStartDateOfVTEProphyl ? 'Начало профилактики ВТЭО: ' + convertDateToRuFormat(new Date(oPat.pkStartDateOfVTEProphyl)) + ' г.': ''} 
        Мне даны полные разъяснения о ее целях и продолжительности, возможных неблагоприятных эффектах лекарственных средств, а также о том, что предстоит мне делать в случае их возникновения.
        Я извещен о необходимости соблюдать режим в ходе профилактики, немедленно сообщать врачу о любом ухудшении самочувствия.
        Я извещен, что несоблюдение рекомендаций врача может осложнить лечение и отрицательно сказаться на состоянии здоровья.
        Я извещен о возможном течении заболевания при отказе от профилактики тромбоэмболии легочной артерии.
        Я имел возможность задать любые интересующие меня вопросы, касающиеся состояния моего здоровья, профилактики тромбоэмболии легочной артерии, получил на них удовлетворяющие меня ответы.
        Я получил информацию об альтернативных методах профилактики, а также об их примерной стоимости.</P>
        Беседу провел врач ${oUsr.surnameAndInitials} (_______________)      ${convertDateToRuFormat(new Date())} г.
        <p>Пациент ${oPat.pkName ? oPat.pkName: '__________________________________'} (_______________)      ${convertDateToRuFormat(new Date())} г.</p>`;
    }

    function printDoc(item_1, pr = 0) {
        nick = 0;
        $('<iframe/>').prop({
            id: 'if_1',
            hidden: true
        }).appendTo('body');
        let vDoc = $('#if_1')[0].contentDocument || $('#if_1')[0].contentWindow.document,
            vWin = $('#if_1')[0].contentWindow || $('#if_1')[0];
        vDoc.getElementsByTagName('body')[0].innerHTML = item_1;
        pr === 0 ? vWin.print() : '';
        return vWin;
    }

    function askPrintAndSave() {
        console.log('askPrintAndSave');
        $('#invitToAct_1').html('Распечатать документы?');
        $('#dialog_0').show();
        $('#btnOne').text('Принять');
        $('#btnOne').on('click', definePrintAndSave);
    }

    function definePrintAndSave() {
        console.log('definePrintAndSave');
        vTblAssignSheet.print();
        printDoc(vAgreement);
        $('#if_1').remove();
        clearValues();
        $(location).attr('href', '/vte_patient_profile');
    }
});