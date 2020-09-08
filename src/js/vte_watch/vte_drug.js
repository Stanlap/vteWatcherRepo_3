$(document).ready(function () {
    oDrugsList = {
        'Enoxaparin sodium': {
            pair: {
                'Enoxaparin sodium': 'Эноксапарин натрия'
            },
            'singleProphDose': 40,
            officUnits: 'мл',
            delivery: 'п/к',
            container: 'шприц',
            timesADay: 1,
            potentTimeADay: [1, 2],
            drugs: {
                Anfibra: {
                    nameCyr: 'Анфибра',
                    nameLat: 'Anfibra',
                    officDose: [0.2, 0.4, 0.6, 0.8, 1, ],
                },
                Hemapaxan: {
                    nameCyr: 'Гемапаксан',
                    nameLat: 'Hemapaxan',
                    officDose: [0.4],
                },
                Clexane: {
                    nameCyr: 'Клексан',
                    nameLat: 'Clexane',
                    officDose: [0.2, 0.4, 0.6, 0.8, 1, ],
                },
                'Flenox Neo': {
                    nameCyr: 'Фленокс НЕО',
                    nameLat: 'Flenox Neo',
                    officDose: [0.2, 0.4, 0.6, 0.8, 1, ],
                },
                Enixum: {
                    nameCyr: 'Эниксум',
                    nameLat: 'Enixum',
                    officDose: [0.2, 0.4, 0.6, 0.8, 1, ],
                },
                'Enoxaparin sodium': {
                    nameCyr: 'Эноксапарин натрия',
                    nameLat: 'Enoxaparin sodium',
                    officDose: [0.2, 0.3, 0.4, 0.6, 0.8, 1, ],
                },
                'Enoxaparin Binergia': {
                    nameCyr: 'Эноксапарин-Бинергия',
                    nameLat: 'Enoxaparin Binergia',
                    officDose: [0.2, 0.4, 0.6, 0.8, 1, ],
                }
            }
        },
        'Nadroparin calcium': {
            pair: {
                'Nadroparin calcium': 'Надропарин кальция'
            },
            'singleProphDose': 0.4,
            officUnits: 'мл',
            delivery: 'п/к',
            container: 'шприц',
            timesADay: 1,
            potentTimeADay: [1],
            drugs: {
                Fraxiparine: {
                    nameCyr: 'Фраксипарин',
                    nameLat: 'Fraxiparine',
                    officDose: [0.3, 0.4, 0.6, 0.8, 1, ],
                },
                'Fraxiparine Forte': {
                    nameCyr: 'Фраксипарин Форте',
                    nameLat: 'Fraxiparine Forte',
                    officDose: [0.6, 0.8, 1, ],
                }
            }
        },
        'Bemiparinum natrium': {
            pair: {
                'Bemiparinum natrium': 'Бемипарин натрия'
            },
            'singleProphDose': 3500,
            officUnits: 'МЕ',
            delivery: 'п/к',
            container: 'шприц',
            timesADay: 1,
            potentTimeADay: [1],
            drugs: {                    
            }
        },
        'Heparin sodium': {
            pair: {
                'Heparin sodium': 'Гепарин натрия'
            },
            'singleProphDose': 5000,
            officUnits: 'МЕ',
            delivery: 'п/к',
            container: 'амп.',
            timesADay: 3,
            potentTimeADay: [2, 3],
            drugs: {
                Heparinum: {
                    nameCyr: 'Гепарин',
                    nameLat: 'Heparinum',
                    officDose: [5000],
                },
                'Heparinum natrium': {
                    nameCyr: 'Гепарин натрия',
                    nameLat: 'Heparinum natrium',
                    officDose: [5000],
                }
            }
        },
        'Fondaparinux sodium': {
            pair: {
                'Fondaparinux sodium': 'Фондапаринукс натрия'
            },
            'singleProphDose': 0.5,
            officUnits: 'мл',
            delivery: 'п/к',
            container: 'шприц',
            timesADay: 1,
            potentTimeADay: [1],
            drugs: {
                Arixrta: {
                    nameCyr: 'Арикстра',
                    nameLat: 'Arixrta',
                    officDose: [0.5, 1, ],
                }
            }
        },
        'Acetylsalicylic acid': {
            pair: {
                'Acetylsalicylic acid': 'Ацетилсалициловая кислота'
            },
            'singleProphDose': 100,
            officUnits: 'мг',
            delivery: 'внутрь',
            container: 'таб.',
            timesADay: 1,
            potentTimeADay: [1],
            drugs: {
                'Acetylsalicylic acid': {
                    nameCyr: 'Ацетилсалициловая кислота',
                    nameLat: 'Acetylsalicylic acid',
                    officDose: [500],
                },

                'Aspirin Cardio': {
                    nameCyr: 'Аспирин кардио',
                    nameLat: 'Aspirin Cardio',
                    officDose: [100, 300],
                },

                'ASK-cardio': {
                    nameCyr: 'АСК-кардио',
                    nameLat: 'ASK-cardio',
                    officDose: [100],
                },

                Acecardol: {
                    nameCyr: 'Ацекардол',
                    nameLat: 'Acecardol',
                    officDose: [50, 100, 300],
                },

                Trombopol: {
                    nameCyr: 'Тромбопол',
                    nameLat: 'Trombopol',
                    officDose: [75, 175],
                },

                Sanovasc: {
                    nameCyr: 'Сановаск',
                    nameLat: 'Sanovasc',
                    officDose: [50, 75, 100],
                },

                'Thrombo ASS': {
                    nameCyr: 'Тромбо АСС',
                    nameLat: 'Thrombo ASS',
                    officDose: [50, 100],
                },

                CardiASK: {
                    nameCyr: 'КардиАСК',
                    nameLat: 'CardiASK',
                    officDose: [50, 100, 300],
                },

                Aspicor: {
                    nameCyr: 'Аспикор',
                    nameLat: 'Aspicor',
                    officDose: [100],
                },

                'Upsarin UPSA': {
                    nameCyr: 'Упсарин УПСА',
                    nameLat: 'Upsarin UPSA',
                    officDose: [500],
                }
            }
        },
        'Dabigatran etexilate': {
            pair: {
                'Dabigatran etexilate': 'Дабигатрана этексилат'
            },
            'singleProphDose': 150,
            officUnits: 'мг',
            delivery: 'внутрь',
            container: 'капс.',
            timesADay: 2,
            potentTimeADay: [1, 2],
            drugs: {
                Pradaxa: {
                    nameCyr: 'Прадакса',
                    nameLat: 'Pradaxa',
                    officDose: [75, 150],
                }
            }
        },
        'Rivaroxaban': {
            pair: {
                'Rivaroxaban': 'Ривароксабан'
            },
            'singleProphDose': 20,
            officUnits: 'мг',
            delivery: 'внутрь',
            container: 'таб.',
            timesADay: 1,
            potentTimeADay: [1],
            drugs: {
                Xarelto: {
                    nameCyr: 'Ксарелто',
                    nameLat: 'Xarelto',
                    officDose: [2.5, 10, 15, 20],
                }
            }
        },
        'Apixaban': {
            pair: {
                'Apixaban': 'Апиксабан'
            },
            'singleProphDose': 2.5,
            officUnits: 'мг',
            delivery: 'внутрь',
            container: 'таб.',
            timesADay: 1,
            potentTimeADay: [1, 2],
            drugs: {
                Eliquis: {
                    nameCyr: 'Эликвис',
                    nameLat: 'Eliquis',
                    officDose: [2.5, 5],
                }
            }
        },
        'Edoxaban': {
            pair: {
                'Edoxaban': 'Эдоксабан'
            },
            'singleProphDose': 60,
            officUnits: 'мг',
            delivery: 'внутрь',
            container: 'таб.',
            timesADay: 1,
            potentTimeADay: [1],
            drugs: {
                Lixiana: {
                    nameCyr: 'Ликсиана',
                    nameLat: 'Lixiana',
                    officDose: [15, 30, 60],
                }
            }
        },
        'Warfarin': {
            pair: {
                'Warfarin': 'Варфарин'
            },
            'singleProphDose': 5.0,
            officUnits: 'мг',
            delivery: 'внутрь',
            container: 'таб.',
            timesADay: 1,
            potentTimeADay: [1],
            drugs: {
                Warfarex: {
                    nameCyr: 'Варфарекс',
                    nameLat: 'Warfarex',
                    officDose: [1, 3, 5],
                },
                Warfarin: {
                    nameCyr: 'Варфарин',
                    nameLat: 'Warfarin',
                    officDose: [2.5],
                },
                Warfarin: {
                    nameCyr: 'Варфарин Канон',
                    nameLat: 'Warfarin',
                    officDose: [2.5],
                },
                'Warfarin Nycomed': {
                    nameCyr: 'Варфарин Никомед',
                    nameLat: 'Warfarin Nycomed',
                    officDose: [2.5],
                },
                'Warfarin-OBL': {
                    nameCyr: 'Варфарин-OBL',
                    nameLat: 'Warfarin-OBL',
                    officDose: [2.5],
                }
            },
        }
    },
    
    oChoosDrug = {
        titleGroupCyr: '',
        titleGroupLat: '',
        titleDrugLat: '',
        titleDrugCyr: '',
        officDose: 0,
        singleDoseOfAspirin: 0,
        sheduleAspirinTakingDaily: '',
        singleProphDose: '',
        tempCont: '',
        signature: '',
        realSingleDose: 0,
        numberOfOfficDose: 1,
        frequencyOfDrugTaking: 'сут.',
        oOfficDose: {},
        startDateOfVTEProphyl: '', 
        endDateOfVTEProphyl: '',
        minTreatPeriod: 0,
        aLine: []
    };

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

    const initModal = (quest, ind) => {
        $(`<div class="modal" tabindex="-1" role="dialog" id="divModal_${ind}" data-backdrop="static"><div class="modal-dialog" role="document" ><div class="modal-content"><div class="modal-body"><p>${quest}</p></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal"  id="btnMYes_${ind}">Да</button><button type="button" class="btn btn-secondary" data-dismiss="modal" id="btnMNo_${ind}">Нет</button></div></div></div></div>`).appendTo('body').show();
    };



    let vTakesVTEProph = false;

    initModal('Пациент уже получает антикоагулянтную терапию?', 1);
    $('#btnMYes_1').on('click', () => {
        vTakesVTEProph = true;
        $('#divModal_1').hide();
        });
    $('#btnMNo_1').on('click', () => {
        $('#divModal_1').hide();
    });

    let aPat = [], aStepBack= [];
    aPat = JSON.parse(localStorage.getItem('Patient'));
    aStepBack = JSON.parse(localStorage.getItem('StepBack'));
    
    oPatProto = aPat[aPat.length - 1],
    oPat ={...oPatProto};
    
    console.log(oPat);
    
    $('#aStepBack').on('click', () => {
        doStepBack(aPat, 'Patient');
        doStepBack(aStepBack, 'StepBack');
    }).prop({'href': aStepBack[aStepBack.length - 1]});

    let aPairs = [],
        oDrugsPairs = {},
        aChMeds = [],
        aLineOfFuncs = [],
        aTitles = [],
        tCtr = [0, 0, 0, 0],
        vPath_2 = '',
        vPath_3 = '',
        aStartDates = [],
        aStartDatesNative = [],
        aSplitPeriod = [0, 0],
        relDayOfManipul = 0,
        oBridgeTherDrugsList = {
            'Enoxaparin sodium': 'Эноксапарин натрия',
            'Nadroparin calcium': 'Надропарин кальция',
            'Bemiparinum natrium': 'Бемипарин натрия',
            'Heparin sodium': 'Гепарин натрия'
        };
        
    oPat.pkINRDates = [];
    oPat.pkBridgeTherMedGroup = '';
    oPat.pkDaysSincePrevAnalysisToStartVTEProph = 0;
    oPat.aOrdersContainer = [];

    const vXaInhibitors = tGR => tGR === 'Эдоксабан' || tGR === 'Апиксабан' || tGR === 'Ривароксабан' || tGR === 'Дабигатрана этексилат';

    $('<h5/>').prop({
            id: 'invitToAct_1',
            class: 'invits'
        })
        .html('')
        .appendTo('#divMainDialog');
    $('<div/>').prop({
        id: 'dialog_0'
    }).appendTo('#divMainDialog');
    $('<div/>').prop({
        id: 'dialog_1',
        class: 'dialogs'
    }).appendTo('#divMainDialog');
    $('<div/>').prop({
        id: 'dialog_1',
        class: 'input-group'
    }).appendTo('#dialog_1');

    $('<select/>').prop({
            id: 'select_1',
            value: '',
            class: 'custom-select selects'
        })
        .appendTo('#dialog_1');
    $('<div/>').prop({
        id: 'dialog_2',
        class: 'dialogs'
    }).appendTo('#divMainDialog');
    $('<div/>').prop({
            id: 'invitToAct_2',
            class: 'invits'
        })
        .appendTo('#dialog_2');
    $('<select/>').prop({
            id: 'select_2',
            value: '',
            class: 'custom-select selects'
        })
        .appendTo('#dialog_2');
    $('<div/>').prop({
        id: 'dialog_3',
        class: 'dialogs'
    }).appendTo('#divMainDialog');
    $('<div/>').prop({
            id: 'invitToAct_3',
            class: 'invits'
        })
        .appendTo('#dialog_3');
    $('<select/>').prop({
            id: 'select_3',
            value: '',
            class: 'custom-select selects'
        })
        .appendTo('#dialog_3');
    $('<div/>').prop({
        id: 'dialog_4',
        class: 'dialogs'
    }).appendTo('#divMainDialog');
    $('<input/>').prop({
            id: 'inpDate_4',
            type: 'date',
            class: 'form-control',
            value: correctDate(addDays(new Date(), 0))
        })
        .appendTo('#dialog_4');
    $('<br>').prop({}).appendTo('#divMainDialog');

    oPat.pkStartDateOfVTEProphyl = oPat.pkDateOfOper ? oPat.pkDateOfOper : formatDate();

    oPat.pkRiskVTE === 1 ? delete oDrugsList['Bemiparinum natrium'].drugs['Zibor 3500'] : oPat.pkRiskVTE === 2 ? delete oDrugsList['Bemiparinum natrium'].drugs['Zibor 2500'] : '';

    oPat.pkRiskVTE === 1 ? oDrugsList['Bemiparinum natrium'].drugs['Zibor 2500'] = {
        nameCyr: 'Цибор 2500',
        nameLat: 'Zibor 2500',
        officDose: [2500]
    } : oPat.pkRiskVTE === 2 ? oDrugsList['Bemiparinum natrium'].drugs['Zibor 3500'] = {
        nameCyr: 'Цибор 3500',
        nameLat: 'Zibor 3500',
        officDose: [3500]
    } : '';

    const emptyOChoosDrug = () => {
        oChoosDrug = {
            titleGroupCyr: '',
            titleGroupLat: '',
            titleDrugLat: '',
            titleDrugCyr: '',
            officDose: 0,
            singleDoseOfAspirin: 0,
            sheduleAspirinTakingDaily: '',
            singleProphDose: '',
            tempCont: '',
            signature: '',
            realSingleDose: 0,
            numberOfOfficDose: 1,
            frequencyOfDrugTaking: 'сут.',
            oOfficDose: {},
            startDateOfVTEProphyl: '',
            endDateOfVTEProphyl: '',
            minTreatPeriod: 0,
            aLine: []
        };
    }

    prepareToStart();

    function getArrPairs(vArr, ) {
        return Object.keys(vArr).map(function (index) {
            return vArr[index].pair;
        });
    }

    function getObjFromArrPairs(vArrP) {
        let vObjP = {};
        $(vArrP).each(function (index) {
            vObjP[Object.keys(vArrP[index])] = Object.values(vArrP[index])[0];
        });
        return vObjP;
    }

    function checkConditions(oP) {
        oPat.pkDateOfChildbirth === formatDate() ? delete oP['Heparin sodium'] : '';
        if (oPat.pkAge < 18) {
            delete oP['Apixaban'];
            delete oP['Rivaroxaban'];
            delete oP['Enoxaparin sodium'];
            delete oP['Nadroparin calcium'];
            delete oP['Bemiparinum natrium'];
            delete oP['Dabigatran etexilate'];
            delete oP['Acetylsalicylic acid'];
        };
        (oPat.pkAge > 60) ? delete oP.Warfarin: '';
        if (oPat.pkSevereHepaticFailure) {
            delete oP['Apixaban'];
            delete oP['Rivaroxaban'];
            delete oP['Warfarin'];
            delete oP['Heparin sodium'];
            delete oP['Dabigatran etexilate'];
            delete oP['Acetylsalicylic acid'];
        };
        (oPat.pkHeartInsuff3_4 || oPat.pkActiveUlcerOfStomachOrDuodenum) ? delete oP['Acetylsalicylic acid']: '';
        oPat.pkUncontrolledSystemicHypertension ? delete oP['Heparin sodium'] : '';
        (oPat.pkIsOrNoSurg && oPat.pkPullOfSurg) ? delete oP['Heparin sodium']: '';
        oPat.pkSevereHepaticFailure ? delete oP['Bemiparinum natrium'] : '';
        (oPat.pkCC < 15 || oPat.pkChronicDialysis) ? (delete oP.Rivaroxaban, delete oP.Edoxaban) : '';
        (oPat.pkCC < 30 || oPat.pkChronicDialysis) ? (delete oP['Acetylsalicylic acid'], delete oP['Dabigatran etexilate'], delete oP['Fondaparinux sodium'], delete oP.Warfarin) : '';

        oPat.pkWeekOfPregnancy > 0 ? (delete oP['Heparin sodium'], delete oP.Rivaroxaban, delete oP.Apixaban) : '';
        (oPat.pkWeekOfPregnancy > 0 && oPat.pkArtificialHeartValve) ? delete oP['Enoxaparin sodium']: '';

        (oPat.pkWeekOfPregnancy < 13 || oPat.pkWeekOfPregnancy > 28) && oPat.pkWeekOfPregnancy !== 0 ? delete oP['Acetylsalicylic acid'] : '';
        oPat.pkWeekOfPregnancy > 36 ? delete oP.Warfarin : '';

        if (oPat.vGender == 0 && oPat.pkAge < 45 && oPat.pkWeekOfPregnancy == 0) {
            let vAns = false;
            initModal('Если пациентка кормит грудью, следует отменить грудное вскармливание. Ваше решение?', 7);
            $('#btnMYes_7').on('click', () => {
                vAns = true;
                $('#divModal_7').hide();
                });
            $('#btnMNo_7').on('click', () => {
                $('#divModal_7').hide();
            });
        


            // let vAns = confirm('Если пациентка кормит грудью, следует отменить грудное вскармливание. Ваше решение?');
            if (vAns) {
                delete oP['Apixaban'];
                delete oP['Rivaroxaban'];
                delete oP['Warfarin'];
                delete oP['Acetylsalicylic acid'];
                delete oP['Dabigatran etexilate'];
                delete oP['Heparin sodium'];
            }
        };
        return oP;
    }

    function clearValues() {
        $('.invits').html('');
        $('.dialogs').hide();
        $('#inpDate_4').val(correctDate(addDays(new Date(), 0)));
        $('.selects').off('input').empty();
        $('#btnOne, #btnTwo').off('click');
    }

    function executeFuncsLine() {
        aLineOfFuncs.length > 0 ? (aLineOfFuncs[0](), aLineOfFuncs.shift()) : '';
    }

    function prepareToStart() {
        oDrugsPairs = checkConditions(getObjFromArrPairs(getArrPairs(oDrugsList)));
        aLineOfFuncs.push(askGroupOfMedicine, askNameOfMedicine, askOfficDoseOfMedicine);
        aLineOfFuncs.push(askStartDateMedicineTaking, askEndDateMedicineTaking, askAnotherDrug);
        emptyOChoosDrug();
        clearValues();
        $('#btnTwo').hide();
        executeFuncsLine();
    }

    function askGroupOfMedicine() {
        console.log('askGroupOfMedicine');
        $('#invitToAct_1').html('Выберите лек. группу препарата:');
        $('#dialog_1').show();
        $.each(oDrugsPairs, function (key, value) {
            $('#select_1').append('<option value="' + value + '">' + value + '</option>');
        });
        // $('<br><br>').appendTo('#dialog_1');
        // $('<div/>').prop({
        //     class: 'custom-control custom-checkbox',
        //     id: 'divHadTakenDrug'
        // }).appendTo('#dialog_1');
        // $('<input/>').prop({
        //     type: 'checkbox',
        //     class: 'custom-control-input',
        //     id: 'chkHadTakenDrug'
        // }).appendTo('#divHadTakenDrug');
        // $('<label>Пациент уже получает антикоагулянтную терапию</label>').prop({
        //     class: 'custom-control-label',
        //     for: 'chkHadTakenDrug'
        // }).appendTo('#divHadTakenDrug');

        $('#btnOne').on('click', defineGroupOfMedicine);
        $('#select_1').on('input', tryChooseDrugGroup);
    }

    function defineGroupOfMedicine() {
        oChoosDrug.titleGroupCyr = $('#select_1').val();
        $.each(oDrugsPairs, function (index, value) {
            value === oChoosDrug.titleGroupCyr ? oChoosDrug.titleGroupLat = index : '';
        });
        console.log(oChoosDrug.titleGroupCyr, oChoosDrug.titleGroupLat);
        aTitles.push(oChoosDrug.titleGroupCyr);
        clearValues();
        executeFuncsLine();
    }

    function tryChooseDrugGroup() {
        console.log('tryChooseDrugGroup');
        if ($('#select_1').val() === 'Гепарин натрия' && oPat.pkPullOfSurg && tCtr[0] === 0) {
            initModal('Гепарин противопоказан при офтальмологических операциях. Отказаться от данного препарата?', 2);
            
            $('#btnMYes_2').on('click', () => {
                $('#select_1 :selected').remove();
                $('#divModal_2').hide();
            });
            $('#btnMNo_2').on('click', () => {
                tCtr[0] = 1;
                $('#divModal_2').hide();
            });
        };
        if ($('#select_1').val() === 'Гепарин натрия' && oPat.pkDiabetes && tCtr[1] === 0) {
            initModal('Гепарин противопоказан при наличии диабетической ретинопатии. Отказаться от данного препарата?', 3 );
            $('#btnMYes_3').on('click', () => {
                $('#select_1 option:selected').remove();
                $('#divModal_3').hide();
            });
            $('#btnMNo_3').on('click', () => {
                tCtr[1] = 0;
                $('#divModal_3').hide();
            });
        };
        if ($('#select_1').val() === 'Ацетилсалициловая кислота' && tCtr[2] === 0) {
            initModal('Ацетилсалициловая кислота противопоказана при приеме с метотрексатом в дозе 15 мг в неделю и более, бронх. астме, индуцированной приемом салицилатов. Отказаться от данного препарата?', 4);
            $('#btnMYes_4').on('click', () => {
                $('#select_1 option:selected').remove();
                $('#divModal_4').hide();

            });
            $('#btnMNo_4').on('click', () => {
                tCtr[2] = 1;
                $('#divModal_4').hide();
            });
        };
        if ($('#select_1').val() === 'Ривароксабан' && tCtr[3] === 0) {

            initModal('Ривароксабан противопоказан при врожденном дефиците лактозы. Отказаться от данного препарата?', 5);
            $('#btnMYes_5').on('click', () => {
                $('#select_1 option:selected').remove();
                $('#divModal_5').hide();
            });
            $('#btnMNo_5').on('click', () => {
                tCtr[3] = 1;
                $('#divModal_5').hide();
            });
        };
    }

    function askNameOfMedicine() {
        console.log('askNameOfMedicine');
        $('#invitToAct_1').text('Выберите препарат по коммерческому названию:');
        $('#dialog_1').show();
        let vComName = '';
        $.each(oDrugsPairs, function (index, value) {
            value === oChoosDrug.titleGroupCyr ? vComName = index : '';
        });
        aPairs = Object.keys(oDrugsList[vComName].drugs).map(function (name) {
            return [oDrugsList[vComName].drugs[name].nameCyr, oDrugsList[vComName].drugs[name].nameLat];
        });
        oDrugsPairs = {};
        aPairs.forEach(item => oDrugsPairs[item[1]] = item[0]);
        $.each(oDrugsPairs, function (key, value) {
            $('#select_1').append('<option value="' + value + '">' + value + '</option>');
        });
        $('#btnOne').on('click', defineNameOfMedicine);
    }

    function defineNameOfMedicine() {
        $.each(oDrugsPairs, function (index, value) {
            value === $('#select_1').val() ? (oChoosDrug.titleDrugLat = index, oChoosDrug.titleDrugCyr = value) : '';
        });
        console.log(oChoosDrug.titleDrugLat, oChoosDrug.titleDrugCyr);
        clearValues();
        executeFuncsLine();
    }

    function askOfficDoseOfMedicine() {
        console.log('askOfficDoseOfMedicine');

        let vPath_1 = oDrugsList['Dabigatran etexilate'];
        vPath_2 = oDrugsList[oChoosDrug.titleGroupLat];
        vPath_3 = vPath_2.drugs;

        (oPat.vMedProfile === 2 && (oPat.pkAge > 75 || oPat.pkCC < 51)) ? (vPath_1.singleProphDose = 110, vPath_1.drugs.Pradaxa.officDose = [110]) : '';
        if (oPat.vMedProfile === 4) {
            vPath_1.timesADay = 1;
            oPat.pkAge < 76 ? (vPath_1.singleProphDose = 220, vPath_1.drugs.Pradaxa.officDose = [110]) : '';
        };

        $('#invitToAct_1').text(`Выберите аптечную дозу препарата (${vPath_2.officUnits}):`);
        $('#dialog_1').show();

        $.each(vPath_3[oChoosDrug.titleDrugLat].officDose, function (key, value) {
            $('#select_1').append('<option value="' + value + '">' + value + '</option>');
        });
        if (oChoosDrug.titleGroupLat === 'Acetylsalicylic acid') {
            $('#invitToAct_2').text(`Выберите разовую дозу препарата (${vPath_2.officUnits}):`);
            $('#dialog_2').show();
            $.each([100, 200, 300], function (key, value) {
                $('#select_2').append('<option value="' + key + '">' + value + '</option>');
            });
            $('#select_2').on('input', askAspirineTakingShedule);
        };
        $('#btnOne').on('click', defineOfficDoseOfMedicine);
    }

    function defineOfficDoseOfMedicine() {
        console.log('defineOfficDoseOfMedicine');
        oChoosDrug.officDose = +$('#select_1').val();
        $('#select_2').val() ? oChoosDrug.singleDoseOfAspirin = $('#select_2 :selected').text() : oChoosDrug.singleDoseOfAspirin = '';
        $('#select_3').val() ? oChoosDrug.sheduleAspirinTakingDaily = $('#select_3 :selected').text() : oChoosDrug.sheduleAspirinTakingDaily = '';
        console.log(oChoosDrug.officDose, oChoosDrug.singleDoseOfAspirin, oChoosDrug.sheduleAspirinTakingDaily);
        console.log(parseFloat($('#select_1').val()));
        makeSignatureOfMedicine(oChoosDrug, oDrugsList[oChoosDrug.titleGroupLat], oChoosDrug.oOfficDose, oChoosDrug.officDose);
        vTakesVTEProph ? aLineOfFuncs.unshift(askHadTakenSingleDoseOfMedicine) : '';

        oChoosDrug.titleGroupCyr === 'Варфарин' ? aLineOfFuncs.unshift(askOfINRAndVKI) : '';
        clearValues();
        executeFuncsLine();
    }

    function askAspirineTakingShedule() {
        console.log('askAspirineTakingShedule', $('#select_2').val());
        if (+($('#select_2').val()) === 2) {
            $('#dialog_3').show();
            $('#invitToAct_3').text('Выберите частоту приема препарата:');
            $.each(['ежедневно', 'через день'], function (key, value) {
                $('#select_3').append('<option value="' + key + '">' + value + '</option>');
            });
        }
    }

    function askHadTakenSingleDoseOfMedicine() {
        console.log('askHadTakenSingleDoseOfMedicine');
        $('#invitToAct_1').text(`Укажите разовую дозу препарата, которую уже получает пациент (${vPath_2.officUnits}):`);
        $('<input/>').prop({
            id: 'inpText_0',
            type: 'number',
            class: 'form-control',
            value: oChoosDrug.officDose
        }).appendTo('#dialog_0');
        $('#btnOne').on('click', defineRealSingleDoseOfMedicine);
    }

    function defineRealSingleDoseOfMedicine() {
        console.log('defineRealSingleDoseOfMedicine');
        let tRSD = correctEnteredValue($('#inpText_0').val());
        !isFinite(tRSD) || tRSD === 0 ? $('#inpText_0').val('').focus() : (oChoosDrug.realSingleDose = correctEnteredValue($('#inpText_0').val()), $('#inpText_0').hide(), $('#inpText_0').off('input'), clearValues(), executeFuncsLine(), $('#inpText_0').remove());
    }

    function correctEnteredValue(el) {
        el = +el.replace(/\s+/g, '').replace(",", ".");
        return parseFloat(el.toFixed(1));
    }

    function makeSignatureOfMedicine(vOCD, vTGLat, vOfDos, vOfDosGen) {
        console.log('makeSignatureOfMedicine');
        let vT_3,
            vT_4 = ' mg, ',
            vT_5 = '';

        switch (vOCD.titleGroupLat) {
            case 'Enoxaparin sodium':
                console.log('Enoxaparin sodium');
                vOfDos.Ml = vOfDosGen;
                vOfDos.Mg = vOfDos.Ml * 100;
                vOfDos.aXa = vOfDos.Ml * 10000;
                if (vOfDos.Mg === 30 && oPat.vRiscVTE === 2) {
                    vTGLat.timesADay = 2;
                    vTGLat.singleProphDose = 30;
                }
                (oPat.vRiscVTE === 1 || oPat.pkCC < 30) ? (vTGLat.singleProphDose = 20, oChoosDrug.numberOfOfficDose = 1) : '';
                vT_3 = vOfDos.Mg;
                while (vT_3 < vTGLat.singleProphDose) {
                    vT_3 += vT_3;
                    oChoosDrug.numberOfOfficDose++;
                };
                vT_5 = (vTGLat.singleProphDose / 100) + ' ml, ';
                break;

            case 'Nadroparin calcium':
                console.log('Nadroparin calcium');

                vOfDos.Ml = vOfDosGen;
                vOfDos.aXa = vOfDos.Ml * 9500;
                ((oPat.vMedProfile === 1 || oPat.vMedProfile === 2) && oPat.vWeight > 70) ? vTGLat.singleProphDose = 0.6: '';
                (oPat.vMedProfile === 3) ? vTGLat.singleProphDose = 0.3: '';
                if (oPat.vMedProfile === 4) {
                    oPat.vWeight < 50 ? vTGLat.singleProphDose = 0.2 : oPat.vWeight > 70 ? vTGLat.singleProphDose = 0.4 : vTGLat.singleProphDose = 0.3;
                };
                oPat.pkCC < 30 ? vTGLat.singleProphDose = +(vTGLat.singleProphDose *= 0.75).toFixed(2) : '';

                vI = vOfDos.Ml;
                while (vI < vTGLat.singleProphDose) {
                    vI += vI;
                    oChoosDrug.numberOfOfficDose++;
                }
                vT_5 = vTGLat.singleProphDose + ' ml, ';
                vTGLat.singleProphDose *= 100;
                break;

            case 'Bemiparinum natrium':
                console.log('Bemiparinum natrium');
                vTGLat.singleProphDose = vOfDosGen;
                // oPat.pkRiskVTE === 1 ? vTGLat.singleProphDose = 2500 : '';
                vT_4 = ' ME, ';
                break;

            case 'Heparin sodium':
                console.log('Heparin sodium');
                oPat.vWeight < 50 ? vTGLat.timesADay = 2 : '';
                oPat.vWeight > 150 ? vTGLat.singleProphDose = 6500 : '';
                vOfDos.ME = vOfDosGen;
                vOfDos.Ml = vOfDos.ME / 1000;
                oChoosDrug.numberOfOfficDose = (vTGLat.singleProphDose / 25000).toFixed(1);
                vT_4 = ' ME, ';
                break;

            case 'Fondaparinux sodium':
                console.log('Fondaparinux sodium');
                oPat.pkCC < 50 ? vTGLat.singleProphDose *= 0.6 : '';
                vOfDos.Ml = vOfDosGen;
                vOfDos.Mg = vOfDos.Ml * 5;
                vT_5 = (vTGLat.singleProphDose) + ' ml, ';
                vTGLat.singleProphDose *= 5;
                break;

            case 'Acetylsalicylic acid':
                console.log('Acetylsalicylic acid');
                oChoosDrug.sheduleAspirinTakingDaily === 'через день' ?
                    oChoosDrug.frequencyOfDrugTaking = '2 сут.' : '';
                // !!!!!!!!!!!!!!!!!!!!!!!!!!!!! problem
                // vOfDosGen = oChoosDrug.singleDoseOfAspirin;
                vOfDos.Mg = vOfDosGen;
                vTGLat.singleProphDose = oChoosDrug.singleDoseOfAspirin;
                oChoosDrug.tempCont = (`${(vTGLat.singleProphDose / vOfDosGen).toFixed(1)} ${vTGLat.container},`);
                $('#btnTry').trigger('click').remove();
                oChoosDrug.numberOfOfficDose = (vTGLat.singleProphDose / vOfDos.Mg).toFixed(1);
                break;

            case 'Dabigatran etexilate':
                console.log('Dabigatran etexilate');

                vOfDos.Mg = vOfDosGen;
                vI = vOfDosGen;
                while (vI < vTGLat.singleProphDose) {
                    vI += vI;
                    oChoosDrug.numberOfOfficDose++;
                }
                break;

            case 'Rivaroxaban':
                console.log('Rivaroxaban');
                (oPat.pkCC > 30 || oPat.pkCC < 51) ? vTGLat.singleProphDose = 15: '';
                vOfDos.Mg = vOfDosGen;
                oChoosDrug.numberOfOfficDose = (vTGLat.singleProphDose / vOfDosGen).toFixed(1);
                break;

            case 'Apixaban':
                console.log('Apixaban');
                vOfDos.Mg = vOfDosGen;
                oChoosDrug.numberOfOfficDose = (vTGLat.singleProphDose / vOfDosGen).toFixed(1);
                break;

            case 'Edoxaban':
                console.log('Edoxaban');
                (oPat.pkCC > 15 || oPat.pkCC < 51) ? vTGLat.singleProphDose = 30: '';
                vOfDos.Mg = vOfDosGen;
                oChoosDrug.numberOfOfficDose = (vTGLat.singleProphDose / vOfDosGen).toFixed(1);
                break;

            case 'Warfarin':
                console.log('Warfarin');
                vOfDos.Mg = vOfDosGen;
                oChoosDrug.numberOfOfficDose = (vTGLat.singleProphDose / vOfDosGen).toFixed(1);
                break;
        };
        vOCD.singleProphDose = (`${vTGLat.singleProphDose}${vT_4}${vT_5}`);
        vOCD.tempCont = (`${vTGLat.container} ${vOCD.numberOfOfficDose},`);
        let vTimE_S = 'раза';

        (vTGLat.timesADay === 1 || vTGLat.timesADay > 4) ? vTimE_S = 'раз': '';

        let vText_1 = convertObjPairsToString(vOfDos),
            vText_2 = (`${oChoosDrug.tempCont} ${oChoosDrug.singleProphDose}`);
        vOCD.signature = `${vOCD.titleDrugCyr} (${vOCD.titleDrugLat}${vText_1}, ${vTGLat.container} 1) ${vTGLat.delivery}, ${vText_2} ${vTGLat.timesADay} ${vTimE_S}/${oChoosDrug.frequencyOfDrugTaking}`;
        console.log(vOCD);
    }

    function convertObjPairsToString(vObj) {
        let vText = '',
            vPairs = Object.entries(vObj);
        vPairs.forEach(entry => {
            let key = entry[0];
            let value = entry[1];
            vText += (`, ${value} ${key}`);
        });
        return vText;
    }

    function askStartDateMedicineTaking() {
        console.log('askStartDateMedicineTaking');
        $('#invitToAct_1').html('Укажите дату начала профилактики ВТЭО:');
        $('#dialog_4').show();
        if (aStartDates.length) {
            let vPD = addDays(new Date(oPat.pkStartDateOfVTEProphyl), 1);
            $('#inpDate_4').val(`${vPD.getFullYear()}-${('0' + (vPD.getMonth() + 1)).slice(-2)}-${('0' + vPD.getDate()).slice(-2)}`);
        } else {
            $('#inpDate_4').val(oPat.pkStartDateOfVTEProphyl);
        }
        // if (aStartDates.length === 0) {
        //     $('#inpDate_4').val(oPat.pkStartDateOfVTEProphyl);
        // } else {
        //     let vPD = addDays(new Date(oPat.pkStartDateOfVTEProphyl), 1);
        //     $('#inpDate_4').val(`${vPD.getFullYear()}-${('0' + (vPD.getMonth() + 1)).slice(-2)}-${('0' + vPD.getDate()).slice(-2)}`);
        // }
        $('#inpDateOfOper').hide();;
        $('#btnOne').on('click', defineStartDateMedicineTaking);
    }

    function defineStartDateMedicineTaking() {
        oChoosDrug.startDateOfVTEProphyl = $('#inpDate_4').val();
        aStartDates.push(oChoosDrug.startDateOfVTEProphyl);
        aStartDatesNative.push(oChoosDrug.startDateOfVTEProphyl);
        aStartDates.sort();
        console.log(aStartDates[0]);
        clearValues();
        executeFuncsLine();
    }

    function askEndDateMedicineTaking() {
        console.log('askEndDateMedicineTaking');
        oChoosDrug.minTreatPeriod = defineMinTreatmentPeriod(oPat.pkMedProfile, oChoosDrug.titleGroupCyr, mTP = 10);
        $('#invitToAct_1').html(`Укажите дату окончания профилактики ВТЭО (мин. рекомендуемый период ${oChoosDrug.minTreatPeriod} сут.):`);
        $('#dialog_4').show();
        $('#inpDate_4').val(correctDate(addDays(oChoosDrug.startDateOfVTEProphyl, oChoosDrug.minTreatPeriod - 1)));
        $('#btnOne').on('click', defineEndDateMedicineTaking);
    }

    function defineEndDateMedicineTaking() {
        oPat.pkStartDateOfVTEProphyl = oChoosDrug.endDateOfVTEProphyl = $('#inpDate_4').val();
        oPat.pkDateOfOper? relDayOfManipul = 1 + Math.round(diffDates(new Date(oPat.pkDateOfOper), new Date(aStartDates[0]))): 0;
        oChoosDrug.aLine = fillLine(aStartDates[0], oChoosDrug.startDateOfVTEProphyl, oChoosDrug.endDateOfVTEProphyl);
        console.log(oChoosDrug.aLine);
        if (oChoosDrug.titleGroupCyr === 'Варфарин' && oPat.pkIsOrNoSurg && oChoosDrug.startDateOfVTEProphyl < oPat.pkDateOfOper && oPat.pkIsOrNoSurg && oChoosDrug.endDateOfVTEProphyl > oPat.pkDateOfOper) {
            aLineOfFuncs.unshift(askOfBridgeTherUsage);
        } else {
            sheduleSplitPeriod();
        };
        interactOfXaInhibAndVKA();
        clearValues();
        executeFuncsLine();
    }

    let fillLine = (vDG, vDS, vDE, vLn = []) => {
        for (let i = 1 + diffDates(new Date(vDS), new Date(vDG)); i <= 1 + diffDates(new Date(vDE), new Date(vDG)); i++) {
            vLn.push(i)
        }
        return vLn
    }

    function askOfINRAndVKI() {
        $('<div/>').prop({
            id: 'dialog_3'
        }).appendTo('#dialog_0');
        $('<label/>').attr({
            for: 'chkB_1'
        }).html('Исходное значение МНО (5 суток до вмешательства) > 4.0').appendTo('#dialog_3');
        $('<input/>').attr({
            type: 'checkbox',
            id: 'chkB_1'
        }).appendTo('#dialog_3');
        $('<br>').appendTo('#dialog_3');
        $('<label/>').attr({
            for: 'chkB_2'
        }).html('Значение МНО (1 сутки до вмешательства) > 2.0').appendTo('#dialog_3');
        $('<input/>').attr({
            type: 'checkbox',
            id: 'chkB_2'
        }).appendTo('#dialog_3');
        $('<br>').appendTo('#dialog_3');
        $('<label/>').attr({
            for: 'chkB_3'
        }).html('Суточная доза варфарина > 7,5 mg').appendTo('#dialog_3');
        $('<input/>').attr({
            type: 'checkbox',
            id: 'chkB_3'
        }).appendTo('#dialog_3');
        $('#btnOne').on('click', defineINRAndVKI);
    }

    function defineINRAndVKI() {
        oPat.pkInitINRMore4 = $('#chkB_1').is(':checked') ? true : false;
        oPat.pkHighINRDayBeforeSurg = $('#chkB_2').is(':checked') ? true : false;
        oPat.pkHighDoseVKI = $('#chkB_3').is(':checked') ? true : false;
        oPat.pkHighINRDayBeforeSurg ? oPat.pkDateOfOper = dateToYMD(new Date(prompt('МНО выше нормы! Следует перенести операцию на другую дату. Введите дату в формате "yyyy-MM-dd"', ''))) : '';
        console.log(oPat.pkDateOfOper);
        console.log(oPat.pkInitINRMore4, oPat.pkHighINRDayBeforeSurg, oPat.pkHighDoseVKI);
        $('#dialog_3').remove();
        clearValues();
        executeFuncsLine();
    }

    function sheduleSplitPeriod() {
        aSplitPeriod = [relDayOfManipul, relDayOfManipul];
        console.log(oPat.pkDateOfOper, aStartDates[0], aSplitPeriod);
        vXaInhibitors(oChoosDrug.titleGroupCyr) ? aSplitPeriod[0] = relDayOfManipul - defineXaInhibitorsPeriopTactics(oChoosDrug.titleGroupCyr, oPat.pkRiskBleed, oPat.pkCC, oPat.pkGradeOfOper) : '';
        if (oChoosDrug.titleGroupCyr === 'Варфарин') {
            aSplitPeriod[0] = relDayOfManipul - stopVitKAntagTakingBeforeOper(oPat.pkInitINRMore4, oPat.pkRiskBleed, oPat.pkHighDoseVKI);
            oPat.pkBridgeTherMedGroup !== '' ? aSplitPeriod[0] = relDayOfManipul - 5 : '';
        };
        console.log(aSplitPeriod);
        oChoosDrug.aLine = oChoosDrug.aLine.filter(el => el < aSplitPeriod[0]).concat(oChoosDrug.aLine.filter(el => el > aSplitPeriod[1]));
        if (oPat.pkIsSpinalAnesth) {
            relDayOfManipul = 1 + Math.round(diffDates(new Date(oPat.pkStandDateITCath), new Date(aStartDates[0])));
            oChoosDrug.aLine = oChoosDrug.aLine.filter(el => el < relDayOfManipul).concat(oChoosDrug.aLine.filter(el => el > relDayOfManipul));
            if (oPat.pkStandDateITCath !== oPat.pkRemoveDateITCath) {
                relDayOfManipul = 1 + Math.round(diffDates(new Date(oPat.pkRemoveDateITCath), new Date(aStartDates[0])));
                oChoosDrug.aLine = oChoosDrug.aLine.filter(el => el < relDayOfManipul).concat(oChoosDrug.aLine.filter(el => el > relDayOfManipul));
            };
        };
        if (oPat.pkIsCentrAVAccess) {
            if (!oPat.pkHasCentrAVAccess) {
                relDayOfManipul = 1 + Math.round(diffDates(new Date(oPat.pkStandDateCentrAVAccess), new Date(aStartDates[0])));
                oChoosDrug.aLine = oChoosDrug.aLine.filter(el => el < relDayOfManipul).concat(oChoosDrug.aLine.filter(el => el > relDayOfManipul));
            }
            if (oPat.pkStandDateCentrAVAccess !== oPat.pkRemoveDateCentrAVAccess) {
                relDayOfManipul = 1 + Math.round(diffDates(new Date(oPat.pkRemoveDateCentrAVAccess), new Date(aStartDates[0])));
                oChoosDrug.aLine = oChoosDrug.aLine.filter(el => el < relDayOfManipul).concat(oChoosDrug.aLine.filter(el => el > relDayOfManipul));
            };
        };
        console.log(oChoosDrug.aLine);
        const oChoosDrug_2 = { ...oChoosDrug };
        console.log(oChoosDrug_2);
        aChMeds.push(oChoosDrug_2);
        console.log('aChMeds:' + aChMeds);

    }

    function defineXaInhibitorsPeriopTactics(choosDrug, highBleedRisk, CC, gradeOfOper) {
        let vSBO = [0, 0];
        if (highBleedRisk === 1) {
            choosDrug === 'Эдоксабан' || choosDrug === 'Апиксабан' || choosDrug === 'Ривароксабан' ? vSBO[0] = 1 : '';
            if (choosDrug === 'Дабигатрана этексилат') {
                CC >= 80 ? vSBO[0] = 1 : CC >= 50 && CC < 80 ? vSBO[0] = 2 : CC >= 15 && CC < 50 ? vSBO[0] = 3 : '';
            };
        } else {
            if (gradeOfOper === 0) {
                switch (choosDrug) {
                    case 'Дабигатрана этексилат':
                        vSBO[1] = 1;
                        break;
                };
            } else {
                switch (choosDrug) {
                    case 'Дабигатрана этексилат':
                        CC > 50 && CC < 81 ? vSBO[1] = 2 : CC > 30 && CC < 51 ? vSBO[1] = 3 : '';
                        break;
                    default:
                        vSBO[1] = 1;
                        break;
                };
            };
        };
        return Math.max.apply(null, vSBO);
    }

    const stopVitKAntagTakingBeforeOper = (vINR_5, highBleedRisk, highDoseVKI, vDST) => {
        vDST = vINR_5 > 4 ? vDST = 5 : 4;
        highDoseVKI ? vDST = 4 : '';
        highBleedRisk === 1 ? vDST = 10 : '';
        return vDST;
    }

    function interactOfXaInhibAndVKA() {
        let findIndXaInhibitors = (vArr, vInd = -1) => {
            $(vArr).each((ind, el) => {
                vXaInhibitors(el) ? vInd = ind : '';
            });
            return vInd;
        }

        if (aTitles.length > 1 && (findIndXaInhibitors(aTitles, vInd = -1) !== -1 && aTitles.indexOf('Варфарин') !== -1)) {
            oPat.pkINRDates[0] = diffDates(new Date(aChMeds[Math.max(findIndXaInhibitors(aTitles, vInd = -1), aTitles.indexOf('Варфарин'))].startDateOfVTEProphyl), new Date(aStartDates[0]));
            oPat.pkINRDates[1] = oPat.pkINRDates[0] + 1;
            console.log(oPat.pkINRDates);
            if (diffDates(new Date(aStartDatesNative[findIndXaInhibitors(aTitles, vInd = -1)]), new Date(aStartDatesNative[aTitles.indexOf('Варфарин')])) < 0) {
            } else {
                $(aChMeds).each((ind, el) => {
                    vXaInhibitors(el.titleGroupCyr) ? el.aLine = [] : '';
                });
            };
        };
    }

    function askAnotherDrug() {
        $('#invitToAct_1').html('Выбрать следующий препарат?');
        $('#btnTwo').show();
        $('#btnOne').on('click', function () {
            defineAnotherDrug();
        });

        $('#btnTwo').on('click', () => {
            console.log(aChMeds);
            $(aChMeds).each((ind, el) => {
                oPat.aOrdersContainer.push([el.signature, el.aLine]);
            });
            aTLine = defineAllTestsPlan(aChMeds);
            aTLine.length > 0 ? (
                    aLineOfFuncs.unshift(askOfPrevLabExams),
                    clearValues(),
                    executeFuncsLine(),
                    $('#btnTwo').remove()
                ) :
                (
                    goToAssignSheet()
                );
        });
    }

    function defineAnotherDrug() {
        console.log('defineAnotherDrug');
        prepareToStart();
    }

    function defineMinTreatmentPeriod(mP, choosDrug, mTP = 10) {
        switch (choosDrug) {
            case 'Эноксапарин натрия':
                (mP === 1 || mP === 2) ? mTP = 6: (mP === 3 || mP === 4) ? mTP = 7 : '';
                break;
            case 'Надропарин кальция':
                (mP < 4) ? mTP = 7: '';
                break;
            case 'Гепарин натрия':
                mTP = 7;
                break;
            case 'Фондапаринукс натрия':
                (mP === 1 || mP === 2) ? mTP = 6: (mP === 3) ? mTP = 5 : '';
                break;
            case 'Дабигатрана этексилат':
                (mP === 4 && oPat.pkArtroplastyKneeJoint === true) ? mTP = 28: '';
                break;
            case 'Апиксабан':
                (mP === 4 && oPat.pkArtroplastyKneeJoint === true) ? mTP = 32: '';
                break;
            case 'Варфарин':
                mTP = 4;
                break;
        };
        return mTP;
    }

    function goToAssignSheet() {
        oPat.pkStartDateOfVTEProphyl = aStartDates[0];
        aStepBack.push('/vte_drug');
        localStorage.setItem('StepBack', JSON.stringify(aStepBack));
            aPat.push(oPat);
            localStorage.setItem('Patient', JSON.stringify(aPat));
        $(location).prop('href', '/vte_assignment_sheet');
    }

    function askOfBridgeTherUsage() {
let vBridge = false;
        initModal('Планируется периоперационная мост-терапия?', 8);
        $('#btnMYes_8').on('click', () => {
            vBridge = true;
            $('#divModal_8').hide();
        });
        $('#btnMNo_8').on('click', () => {
            $('#divModal_8').hide();
        });
        !vBridge ? (clearValues(), executeFuncsLine()) : (
            $('#invitToAct_1').html('Выберите группу препарата для мост-терапии:'),
            $('#dialog_1').show(),
            oDrugsList['Bemiparinum natrium'].drugs.hasOwnProperty('Zibor 2500') ? (delete oDrugsList['Bemiparinum natrium'].drugs['Zibor 2500'],
                oDrugsList['Bemiparinum natrium'].drugs['Zibor 3500'] = {
                    nameCyr: 'Цибор 3500',
                    nameLat: 'Zibor 3500',
                    officDose: [3500]
                }) : '',
            $.each(oBridgeTherDrugsList, function (key, value) {
                $('#select_1').append('<option value="' + key + '">' + value + '</option>');
            }),
            $('#btnOne').on('click', defineBridgeTherUsage));
    }

    function defineBridgeTherUsage() {
        console.log('defineBridgeTherUsage');
        oPat.pkBridgeTherMedGroup = $('#select_1 :selected').val();
        console.log(oPat.pkBridgeTherMedGroup);
        sheduleSplitPeriod();
        oBridgeTherDrugsList = {};
        $('#select_1 option').remove();
        aLineOfFuncs.unshift(askNameOfMedicineForBridgeTher);
        clearValues();
        executeFuncsLine();
    }

    function askNameOfMedicineForBridgeTher() {
        console.log('askNameOfMedicineForBridgeTher');
        $('#invitToAct_1').text('Выберите препарат по коммерческому названию:');
        $('#dialog_1').show();
        aPairs = Object.keys(oDrugsList[oPat.pkBridgeTherMedGroup].drugs).map(function (name) {
            return [oDrugsList[oPat.pkBridgeTherMedGroup].drugs[name].nameCyr, oDrugsList[oPat.pkBridgeTherMedGroup].drugs[name].nameLat];
        });
        aPairs.forEach(item => oBridgeTherDrugsList[item[1]] = item[0]);
        $.each(oBridgeTherDrugsList, function (key, value) {
            $('#select_1').append('<option value="' + key + '">' + value + '</option>');
        });
        $('#btnOne').on('click', defineNameOfMedicineForBridgeTher);
    };

    function defineNameOfMedicineForBridgeTher() {
        oPat.pkNameOfMedicineForBridgeTherLat = $('#select_1 :selected').val();
        oPat.pkNameOfMedicineForBridgeTherCyr = $('#select_1 :selected').text();
        makeAlgorithmBridgeTher();
        clearValues();
        executeFuncsLine();
    }

    function getRound10(val) {
        return Math.round(val / 10) * 10;
    }

    function getRound100(val) {
        return Math.round(val / 100) * 100;
    }

    function makeAlgorithmBridgeTher() {
        console.log('makeAlgorithmBridgeTher');
        let aTDC_1 = ['', []],
            aTDC_2 = ['', []],
            vBTM = oPat.pkBridgeTherMedGroup,
            vNMC = oPat.pkNameOfMedicineForBridgeTherCyr,
            vNML = oPat.pkNameOfMedicineForBridgeTherLat,
            vRDM = relDayOfManipul,
            vAddD = oPat.pkGradeOfOper > 0 ? 1 : 0;
        vAddD = (oPat.pkArtroplasty || oPat.pkHipFractureSurgery) ? 2 : vAddD;

        switch (vBTM) {
            case 'Heparin sodium':
                aTDC_1[0] = `${vNMC} (${vNML}), ${getRound100(oPat.pkWeight * 80)} МЕ, в/в, болюсно.`;
                aTDC_2[0] = `${vNMC} (${vNML}), ${getRound100(oPat.pkWeight * 18)} МЕ/ч, в/в, прекратить ${oPat.pkDateOfOper} за 6 ч до опер.`;
                aTDC_1[1].push(vRDM - 2);
                aTDC_2[1].push(vRDM - 2, vRDM - 1, vRDM, vRDM + 1 + vAddD, vRDM + 2 + vAddD);
                break;

            case 'Enoxaparin sodium':
                aTDC_1[0] = `${vNMC} (${vNML}), ${getRound10(oPat.pkWeight)} мг, п/к, 2 раза/сут.`;
                aTDC_2[0] = `${vNMC} (${vNML}), ${getRound10(oPat.pkWeight)} мг, п/к, 1 раз/сут. утро`;
                aTDC_1[1].push(vRDM - 2, vRDM + 1 + vAddD, vRDM + 2 + vAddD);
                aTDC_2[1].push(vRDM - 1, vRDM);
                break;
            case 'Nadroparin calcium':
                aTDC_1[0] = `${vNMC} (${vNML}), ${getRound100(oPat.pkWeight * 100)} МЕ, п/к, 2 раза/сут.`;
                aTDC_2[0] = `${vNMC} (${vNML}), ${getRound100(oPat.pkWeight * 100)} МЕ, п/к, 1 раз/сут. утро`;
                aTDC_1[1].push(vRDM - 2, vRDM + 1 + vAddD, vRDM + 2 + vAddD);
                aTDC_2[1].push(vRDM - 1, vRDM);
                break;
            case 'Bemiparinum natrium':
                aTDC_1[0] = aTDC_1[0] = `Цибор 3500 (Zibor 3500), 3500 МЕ, п/к, 1 раз/сут. ${oPat.pkDateOfOper} утро`;
                aTDC_1[1].push(vRDM - 2, vRDM - 1, vRDM, vRDM + 1 + vAddD, vRDM + 2 + vAddD);
                break;
        }

        oPat.aOrdersContainer.push(aTDC_1);
        aTDC_2[0] !== '' ? oPat.aOrdersContainer.push(aTDC_2) : '';
        console.log(aTDC_1, aTDC_2);
        console.log(oPat.aOrdersContainer);
        oPat.pkINRDates = oPat.pkINRDates.concat([vRDM - 1, vRDM, vRDM + 1, vRDM + 3]);
        console.log(oPat.pkINRDates);
        // Если выполняется протокол мост-терапии: 
        // МНО  за 1 день до операции и в день операции, через день и еще раз через день.
        // НМГ целесообразно использовать в случае выполнения спинальной анестезии.

    }


    function askOfPrevLabExams() {
        initModal('Назначать лабораторные исследования в субботу и воскресенье?', 6);
        $('#btnMYes_6').on('click', () => {
            oPat.pkIncludeWeekends = true;
            $('#divModal_6').hide();
        });
        $('#btnMNo_6').on('click', () => {
            oPat.pkIncludeWeekends = false;
            $('#divModal_6').hide();
        });
        oPat.pkIncludeWeekends = true;
        $('#invitToAct_1').html('До начала профилактивки ВТЭО необходимо наличие перечисленных ниже исследований. Если обследование неполное, установите дату и отметьте, какие исследования требуется выполнить:');
        let vTom = addDays(new Date(), 1);
        new Date().getHours() < 10 ? $('#inpDate_4').val(formatDate()) : $('#inpDate_4').val(`${vTom.getFullYear()}-${('0' + (vTom.getMonth() + 1)).slice(-2)}-${('0' + vTom.getDate()).slice(-2)}`);
        $('#dialog_4').show();
        $('<div/>').prop({
            id: 'dialog_5',
        }).appendTo('#dialog_4');
        $(aTLine).each(function (ind, el) {
            $(`<br><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id = "chkTest_${ind}"><label class="custom-control-label" id="chkTest_${ind}" for="chkTest_${ind}">${el[0]}</label></div>`).appendTo('#dialog_5');


            // $('<br>').appendTo('#dialog_5');
            // $('<div/>').prop({class: 'custom-control custom-checkbox', id:'divDialog_5'}).appendTo('#dialog_5');
            // $('<label/>').prop({
            //     class: 'custom-control-label',
            //     for: `chkTest_${ind}`
            // }).html(`<input type = 'checkbox' class='custom-control-input' id = 'chkTest_${ind}' value = '${el[0]}'></input> ${el[0]}`).appendTo('#divDialog_5');
        });
        $('<br>').appendTo('#dialog_5');
        $('#btnOne').on('click', definePrevLabExams);
    }

    function definePrevLabExams() {
        console.log('definePrevLabExams');
        console.log(oPat.pkIncludeWeekends);
        let aTTCyr = [];
        $('#dialog_5 input:checked').each((ind, el) => aTTCyr.push($(el).next().text()));
        if (aTTCyr.length > 0) {
            oPat.pkStartDateOfPrevAnalysis = $('#inpDate_4').val();
            oPat.pkDaysSincePrevAnalysisToStartVTEProph = Math.round(diffDates(new Date(aStartDates[0]), new Date($('#inpDate_4').val())));
            console.log(aTLine);
            $(aTTCyr).each((ind, el) => {
                $(aTLine).each((ind, item) => item[0] === el ? (item[1].push(1 + Math.round(diffDates(new Date(oPat.pkStartDateOfPrevAnalysis), new Date(aStartDates[0])))), console.log(item[1])) : '');
                console.log(el);
            });
        };
        aTLine = !oPat.pkIncludeWeekends ? takeIntoConsiderationWeekend(aTLine) : aTLine;
        console.log(aTLine);
        oPat.aOrdersContainer = oPat.aOrdersContainer.concat(aTLine);
        // $('#dialog_5').remove();
        // clearValues();
        // executeFuncsLine();
        // console.log(aTLine);
        console.log(oPat.aOrdersContainer);
        goToAssignSheet();

    }

    // $(aChMeds).each((ind, el) =>{
    //     oPat.aOrdersContainer.push([el.signature, el.aLine]);   
    // })


    const definePltTestPlan = el => {
        let aTCpl = el.titleGroupCyr !== 'Гепарин натрия' ? [2 + el.aLine[0], 3] : [el.aLine[0], 3];
        return buildLine(aTCpl, el.minTreatPeriod);
    }
    const defineRenalTestPlanOrGenUrineTest = el => {
        let aTCpl = el.titleGroupCyr === 'Надропарин кальция' ? [el.aLine[0] + 1, 10] : [el.aLine[0], 5];
        return buildLine(aTCpl, el.minTreatPeriod);
    }
    const defineElectrolytesTestPlan = el => buildLine([el.aLine[0], 10], el.minTreatPeriod);
    const defineINRPlan = el => buildLine([2 + el.aLine[0], 5], el.minTreatPeriod);
    const defineCoagulogramPlan = el => buildLine([el.aLine[0], 10], el.minTreatPeriod);

    function buildLine(aT2, tP) {
        let vLine = [],
            vV = aT2[0] + 1;
        vLine.push(aT2[0] + 1);
        while (vV + aT2[1] <= tP) {
            vV = vV + aT2[1];
            vLine.push(vV);
        }
        return vLine;
    }

    let aTLine = [
        ['исследование тромбоцитов в крови', []],
        ['исследование уровня мочевины и креатинина в крови', []],
        ['электролиты крови', []],
        ['коагулограмма (ПТИ, МНО, фибриноген, АТ3, АЧТ)', []],
        ['коагулограмма (МНО)', []],
        ['ОАМ', []]
    ];

    function defineAllTestsPlan(choosDrug) {

        $(choosDrug).each(function (ind, el) {
            el.aLine === [] ? el.aLine[0] = 0 : '';
            el.titleGroupCyr === 'Эноксапарин натрия' || el.titleGroupCyr === 'Надропарин кальция' || el.titleGroupCyr === 'Гепарин натрия' ? aTLine[0][1] = aTLine[0][1].concat(definePltTestPlan(el)) : '';
            el.titleGroupCyr === 'Надропарин кальция' ? aTLine[2][1] = aTLine[2][1].concat(defineElectrolytesTestPlan(el)) : '';
            el.titleGroupCyr === 'Гепарин натрия' ? aTLine[3][1] = aTLine[3][1].concat(defineCoagulogramPlan(el)) : '';
            el.titleGroupCyr === 'Варфарин' ? aTLine[4][1] = aTLine[4][1].concat(defineINRPlan(el)) : '';
            el.titleGroupCyr === 'Надропарин кальция' || el.titleGroupCyr === 'Дабигатрана этексилат' ?
                (aTLine[5][1] = aTLine[5][1].concat(defineRenalTestPlanOrGenUrineTest(el)), aTLine[1][1] = aTLine[1][1].concat(defineRenalTestPlanOrGenUrineTest(el))) : '';
        });

        oPat.pkINRDates.length > 0 ? aTLine[4][1] = aTLine[4][1].concat(oPat.pkINRDates) : '';
        console.log(aTLine.filter(item => item[1].length > 0));
        return aTLine.filter(item => item[1].length > 0);
    }

    let vTDS = 0;
    // Функция учитывает выходные дни.
    function takeIntoConsiderationWeekend(item) {
        let vSats = [vTDS, vTDS + 7],
            vSuns = [vTDS + 1, vTDS + 8];
        console.log(vSats, vSuns);

        $(vSats).each((ind, el) => {
            $(item).each((ind, item) => {
                item[1].indexOf(el) !== -1 ? item[1][item[1].indexOf(el)]-- : '';
            })
        });
        $(vSuns).each((ind, el) => {
            $(item).each((ind, item) => {
                item[1].indexOf(el) !== -1 ? item[1][item[1].indexOf(el)]++ : '';
            })
        });
        return item;
    }

});