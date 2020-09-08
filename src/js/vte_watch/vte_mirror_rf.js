console.log('vte_mirror_rf has attached')
export function creatMirrorRF() {
    let vIsShow = false,
        vCardCounter = 0,
        aLi = [];

    const createCard = (cls, val, title, ind, content, id) => {
        vCardCounter++;
        $('#accListRF').append(`<div class="card  ${cls}"><div class="card-header" id="divCHeader_${ind}"><h5 class="mb-0"><button type="button"  class="btn btn-block" id="${id}" value="${val}" data-toggle="collapse" data-target="#collapse_${ind}" aria-controls="collapse_${ind}">${title}</button></h5></div>
        <div id="collapse_${ind}" class="collapse ${vIsShow ? '': 'show'}" aria-labelledby="divCHeader_${ind}" data-parent="#accListRF"><div class="card-body"><ul class="list-group list-group-flush">${content}</ul></div></div></div>`);
        vIsShow = true;
        aLi.length = 0;
    }
    const creatReference = cmt => cmt ? `<span class="preReference"> &hellip;</span><span class="reference"> ${cmt}</span>` : '';

    const creatTitle = (ttl, cmt) => `${ttl}${creatReference(cmt)}`;

    const createLi = (cls, id, vle, ttl, cmt) => ($(`<li class="list-group-item ${cls}" id="${id}" data-value="${vle}">${creatTitle(ttl, cmt)}</li>`).prop('outerHTML'));

    const createBtn = ((cls, id, vle, ttl, cmt) => $('#accListRF').append($(`<button type="button"  class="btn btn-block btnSingleRF ${cls}" id="${id}" value="${vle}">${creatTitle(ttl, cmt)}</button>`).prop('outerHTML')));

    // High Blood Pressure
    aLi.push(createLi('cls2RF', 'liSystHypert1th', '1000000000000000', ' артериальная гипертензия 1 степени', ', CАД 140-159 или ДАД 90-99 мм рт. ст.'));

    aLi.push(createLi('cls2RF cls2BRF liSystHypert_1', 'liSystHypert2th', '1000000000000000', ' артериальная гипертензия 2 степени', ', САД 160-179 или ДАД 100-109 мм рт. ст.'));

    aLi.push(createLi('cls2RF cls2BRF liSystHypert_1', 'liSystHypert3th', '1000000000000000', ' артериальная гипертензия 3 степени', ', САД &ge; 180 или АД &ge; 110 мм рт. ст.'));

    aLi.push(createLi('cls2RF cls9RF cls10RF cls2BRF  cls3BRF_1 cls4BRF liSystHypert_1', 'liUncontrolSystHypert', '1000000001000100', ' неконтролируемая артериальная гипертензия', ', артериальное давление &ge; 200 мм рт.ст. систолическое или &ge; 120 мм рт.ст. диастолическое'));

    createCard('cls2RF cls9RF cls10RF cls2BRF  cls3BRF_1 cls4BRF clsOneChoice', '10000100000000000', 'артериальная гипертензия', vCardCounter, aLi.join(''));
    
    // Diabetes mellitus
    aLi.push(createLi('cls2RF cls9RF cls10RF cls2BRF  cls3BRF_1 cls4BRF  clsObstComorbidities', '', '1000000000000000', '<span> сахарный диабет</span> I типа с нефропатией', ''));

    aLi.push(createLi('cls2RF cls9RF cls10RF cls2BRF  cls3BRF_1 cls4BRF', '', '1000000000000000', '<span> сахарный диабет</span> II типа', ''));

    createCard('cls2RF cls9RF cls10RF cls2BRF  cls3BRF_1 cls4BRF clsOneChoice', '1000010000000000', 'сахарный диабет', vCardCounter, aLi.join(''), 'ulIsDiabetes');
    
    // Acute Infection

    aLi.push(createLi('cls1RF cls3RF liSumTherRF_2', 'liAcuteInflamDisease', '10000000000000000', ' острое воспалительное заболевание', ''));

    aLi.push(createLi('cls3RF', 'liSepsis', '1000000310000000', ' сепсис (&lt; 1 мес.)', ''));

    aLi.push(createLi('cls9RF cls10RF', '', '1000000000000000', ' септический эндокардит', ''));

    aLi.push(createLi('cls1RF cls3RF liSumTherRF_2', '', '1000000000000000', ' острая инфекция', ''));

    createCard('cls1RF cls3RF cls9RF cls10RF', '1000000000001000', 'острое воспалительное заболевание или инфекция', vCardCounter, aLi.join(''), 'ulIsAcuteInflamDiseaseOrInf');
    
    // Therm trauma

    aLi.push(createLi('cls8RF liBurnsSuperficial_1 liBurns_1', '', '1000000000020000', ' ожоги поверхностные, площадью &lt; 20% поверхности тела', ''));

    aLi.push(createLi('cls8RF liBurnsSuperficial_1 liBurns_2', '', '1000000000030000', '<span><span hidden>ожоги поверхностные, площадью</span> &gt; 20% поверхности тела</span>', ''));

    aLi.push(createLi('cls8RF liBurnsDeep_1 liBurns_1', '', '1000000000020000', '  ожоги глубокие, площадью &lt; 10% поверхности тела', ''));

    aLi.push(createLi('cls8RF liBurnsDeep_1 liBurns_1', '', '1000000000030000', ' ожоги глубокие, площадью от 10% до 20% поверхности тела', ''));

    aLi.push(createLi('cls8RF liBurnsDeep_1 liBurns_2', '', '1000000000030000', ' ожоги глубокие, площадью &gt; 20% поверхности тела', ''));

    aLi.push(createLi('cls8RF liThermalInhalationInjury_1', '', '100000020000000', ' термоингаляционная травма II степени', ''));

    aLi.push(createLi('cls8RF liThermalInhalationInjury_1', '', '1000000300000000', ' термоингаляционная травма III степени', ''));

    aLi.push(createLi('cls8RF', '', '1000000000030000', ' отморожение II–IV степени', ''));

    aLi.push(createLi('cls8RF', '', '1000000300000000', ' осложнения ожоговой болезни', ': шок, острая токсемия и септикотоксемия'));

    createCard('cls8RF', '1000000000000000', 'термическая травма', vCardCounter, aLi.join(''));
    
    // Onco

    aLi.push(createLi('cls3RF cls9RF', '', '1000000000000000', ' злокачественное новообразование в анамнезе', ''));

    aLi.push(createLi('cls1RF cls3RF cls9RF liNeoplasm_1', 'liActiveNeoplasm', '1000000100000000', ' активное злокачественное новообразование', ': имеются локальные или отдаленные метастазы и/или химиотерапия/радиотерапия &lt; 6 мес назад'));

    aLi.push(createLi('cls1RF cls3RF cls9RF liNeoplasm_1 liNeoplasm_2', 'liHormoneTherOnco', '110000000000000', ' гормонотерапия у онкологических пациентов', ''));

    aLi.push(createLi('cls1RF cls3RF cls9RF liNeoplasm_1 liNeoplasm_2', '', '1000000000000000', ' химиотерапия, рентгенотерапия у онкологических пациентов', ''));

    createCard('cls9RF clsObstComorbidities', '1000000020000000', 'злокачественное новообразование', vCardCounter, aLi.join(''));
    

    // Rheumo
// Возможно опция ревм заболевание вообще не понадобится!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // aLi.push(createLi('', 'liRheumDiseases', '1000000000000000', '  ревматологическое заболевание', ''));

    aLi.push(createLi('cls1RF liSumTherRF_2 clsObstComorbidities', 'liAcuteRheumDiseases', '1000000000000000', ' острое ревматологическое заболевание', ': активная системная красная волчанка, воспалительная полиартропатия'));

    createCard('cls1RF clsObstComorbidities clsOneChoice', '102.000000000000', 'ревматологическое заболевание', vCardCounter, aLi.join(''));
    
    // Lung Disease

    aLi.push(createLi('cls1RF cls3RF liLungDiseases_1', 'liSevereLungDiseases', '1000000300000000', '<span hidden> тяжелые заболевания легких</span> на ИВЛ', ': с выраженной дыхательной недостаточностью, требующие искусственной вентиляцией легких'));

    aLi.push(createLi('cls1RF cls3RF liLungDiseases_1', 'liModerateLungDiseases', '1000000200000000', '<span hidden> заболевания легких</span> без ИВЛ', ', в том числе пневмония, с дыхательной недостаточностью, не требующие искусственной вентиляции'));

    aLi.push(createLi('cls3RF', '', '1000000010000000', '<span hidden>заболевания легких длительностью</span> &lt; 1 мес.', ''));

    aLi.push(createLi('cls3RF', '', '1000000010000000', ' ХОБЛ', ' (хроническая обструктивная болезнь легких)'));

    createCard('cls1RF cls3RF', '1000000100000000', 'заболевания легких с дыхательной недостаточностью', vCardCounter, aLi.join(''), 'ulIsPulmInsuff');

    // Anemia

    aLi.push(createLi('cls9RF cls2BRF', 'liHbLess_100', '1000000100000000', ' Hb &lt; 100 г/л'));

    aLi.push(createLi('cls10RF clsObstComorbidities', '', '1000000000000000', ' серповидноклеточная анемия'));

    createCard('cls9RF cls10RF cls2BRF', '1000000000000000', 'анемия', vCardCounter, aLi.join(''));
    
    // Thrombophilia

    aLi.push(createLi('cls1RF cls3RF liHighRiskThrombophilia_1', '', '1000000030000000', ' полиморфизм фактора Лейдена', ' (V фактора свертывания крови)'));

    aLi.push(createLi('cls1RF cls3RF liHighRiskThrombophilia_1', '', '1000000030000000', ' полиморфизм протромбина G20210A'));

    aLi.push(createLi('cls3RF liHighRiskThrombophilia_1', '', '1000000030000000', ' гипергомоцистеинемия'));

    aLi.push(createLi('cls1RF cls3RF liHighRiskThrombophilia_1', '', '1000000030000000', ' повышенный уровень антител к кардиолипину', ' (антифосфолипидный синдром)'));


    aLi.push(createLi('cls1RF cls3RF liHighRiskThrombophilia_1', '', '1000000030000000', ' наличие волчаночного антикоагулянта', ' (антифосфолипидный синдром)'));

    aLi.push(createLi('cls1RF cls3RF liHighRiskThrombophilia_1', '', '1000000030000000', ' другая врожденная или приобретенная тромбофилия', ' (дефекты антитромбина, протеина С или S и др.)'));

    aLi.push(createLi('cls10RF', '', '1000000000001000', ' известная тромбофилия низкого риска (без ВТЭО)'));

    createCard('cls1RF cls3RF', '1000000000000000', 'тромбофилия ', vCardCounter, aLi.join(''));
    
    // Hypercoagulation

    aLi.push(createLi('cls9RF', '', '1000000100000000', ' тромбоциты &gt; 350 × 10 <sup><small>9</small></sup>/л'));

    aLi.push(createLi('cls9RF', '', '1000000100000000', ' фибриноген &gt; 400 мг/мл'));

    aLi.push(createLi('cls9RF', '', '1000000100000000', ' Д-димер &gt; 0,5 мкг/мл'));

    createCard('cls9RF', '1000000000000000', 'гиперкоагуляция ', vCardCounter, aLi.join(''));
    
    // Hemorragic Syndrome

    aLi.push(createLi('cls2BRF cls10BRF liСoagulopathy_1', '', '1000000000000000', ' геморрагические генетические коагулопатии', ' . Наиболее часто встречаются гемофилия и болезнь Виллебранда. Более редкие генетические нарушения включают гемофилию С, гипопроконвертинемию и ряд других аномалий.'));

    aLi.push(createLi('cls2BRF cls10BRF liСoagulopathy_1', '', '1000000000000000', ' геморрагические аутоиммунные коагулопатии', ' обусловлены появлением антител (ингибиторов свертывания) к факторам свёртывания крови или фосфолипидам. Наиболее часто встречается коагулопатия иммунного генеза на фоне Антифосфолипидного синдрома. Дефицит факторов свертывания в результате аутоиммунных реакций иногда происходит у пациентов после частых переливаний крови.'));

    aLi.push(createLi('cls2BRF cls3BRF_1 cls4BRF cls10BRF liСoagulopathy_1', '', '1000000000000000', ' геморрагические приобретенные коагулопатии', ', могут быть обусловлены нарушением функции печени, применением разных антикоагулянтов, антиагрегантов или тромболитических препаратов, недостаточностью всасывания витамина «К» и повышенным потреблением компонентов системы свёртывания крови на фоне ДВС-синдрома. Поражение факторов свертываемости может быть в результате преждевременной отслойки плаценты, эмболии околоплодными водами и рака простаты. Коагулопатию вызывают некоторые виды гемотоксичных змеиных ядов, некоторые виды вирусных геморрагических лихорадок, иногда - лейкемия.'));

    aLi.push(createLi('cls2BRF cls10BRF liСoagulopathy_1', '', '1000000000000000', ' геморрагические вазопатии', '- заболевания, обусловленные патологией сосудов. Типичные заболевания этой группы — болезнь Рандю–Ослера, пурпура Шёнляйна–Геноха, первичные геморрагические васкулиты.'));

    aLi.push(createLi('cls2BRF cls10BRF liThrombocytopenia_1 liThrombocytopenia_2', 'liPlateletsLess150', '1000000000000000', ' тромбоциты в крови &lt; 150 х 10 <sup><small>9</small></sup>/л', ' (тромбоцитопения)'));

    aLi.push(createLi('cls3BRF_1 cls10BRF liThrombocytopenia_1 liThrombocytopenia_2', 'liPlateletsLess75', '1000000000000100', ' тромбоциты в крови &lt; 75 х 10 <sup><small>9</small></sup>/л'));

    aLi.push(createLi('cls3BRF_1 cls10BRF liThrombocytopenia_1  liThrombocytopenia_2', 'liPlateletsLess50', '104.000000000100', ' тромбоциты в крови &lt; 50 х 10 <sup><small>9</small></sup>/л'));

    aLi.push(createLi('cls3RF liThrombocytopenia_1', '', '1000000030000000', ' гепарин-индуцированная тромбоцитопения'));

    aLi.push(createLi('cls3BRF_1', '', '1000000001000000', ' нелеченная коагулопатия', '. Любая из коагулопатий без эффективной медикаментозной коррекции.'));

    createCard('cls2BRF cls3RF cls3BRF_1 cls4BRF cls10BRF', '1000000000000000', 'геморраг. гемостазиопатии (геморраг. диатез, геморраг. с-м) ', vCardCounter, aLi.join(''), 'ulIsHemorrSyndrome');
    
    // VTE

    aLi.push(createLi('cls1RF cls2RF cls3RF liThromboemb_1', 'liWasPulmEmb', '1000000000000000', ' эпизод ВТЭО в анамнезе', ' (за исключением тромбоза поверхностных вен)'));

    aLi.push(createLi('cls10RF liThromboemb_1 liThromboemb_2', '', '1000000000004030', ' предшествующие рецидивирующие ВТЭО'));

    aLi.push(createLi('cls10RF liThromboemb_1 liThromboemb_2', '', '1000000000000030', ' предшествующие ВТЭО, ничем не спровоцированные или связанные с приемом эстрогенов'));

    aLi.push(createLi('cls10RF liThromboemb_1 liThromboemb_2 liProvocedVTE_1', '', '1000000000004000', ' предшествующие спровоцированные ВТЭО', ' кроме единичного эпизода, связанного с большим хирургическим вмешательством'));

    aLi.push(createLi('cls10RF liThromboemb_1 liThromboemb_2 liProvocedVTE_1', '', '1000000000003000', ' предшествующие ВТЭО спровоцированные большим хирургическим вмешательством'));

    aLi.push(createLi('cls3RF cls10RF liThromboemb_3', '', '10000000000000003', ' тромбоэмболия в семейном анамнезе'));

    createCard('cls1RF cls2RF cls3RF cls10RF', '1000000000000000', 'ВТЭО в анамнезе ', vCardCounter, aLi.join(''));
    
    // Restricted Mobility

    aLi.push(createLi('cls3RF', '', '1000000010000000', ' постельный режим'));

    aLi.push(createLi('cls1RF cls3RF cls10R', 'liBedRestMore3Days', '1000000120000000', ' строгий постельный режим', ' (без посещения туалетной комнаты) &gt; 72 часов'));

    aLi.push(createLi('cls3RF cls4RF', '', '1000000020000000', ' гипсовая иммобилизация конечности', ' (давностью до 1 мес.)'));

    aLi.push(createLi('cls3RF', 'liPlegia', '1000000020000000', ' паралич или глубокий парез', ' (тетра- геми- или нижний грубый монопарез/плегия)'));

    aLi.push(createLi('cls3RF', '', '10000001000000000', ' длительное положение сидя', ' (например длительный перелет в эконом-классе или поездка на транспорте сидя)'));

    createCard('cls1RF cls3RF cls10RF', '1300000000000010', 'ограниченная подвижность ', vCardCounter, aLi.join(''), 'ulIsRestrictedMobility');
    
    // Is Trauma

    aLi.push(createLi('cls1RF cls3RF liTraum_1', '', '1000000000030000', ' перелом костей таза', ' (давностью до 1 мес.)'));

    aLi.push(createLi('cls1RF cls3RF liTraum_1', '', '1000000000030000', ' перелом бедра', ' (давностью до 1 мес.)'));

    aLi.push(createLi('cls1RF cls3RF  liTraum_1', '', '1000000200000000', ' изолированные переломы голени', ' (давностью до 1 мес.)'));

    aLi.push(createLi('cls1RF cls3RF ', '', '10000002000000005', ' повреждения связочного аппарата и сухожилий голени', ', требующие иммобилизации голеностопного сустава'));

    aLi.push(createLi('cls1RF cls3RF', 'liSpinalCordInjure', '1000000000000000', ' повреждение спинного мозга'));

    aLi.push(createLi('cls1RF cls3RF ', '', '1000000350000000', ' множественная и сочетанная травма'));

    createCard('cls1RF cls3RF', '1000000000000000', 'есть травма &lt; 1 месяца назад ', vCardCounter, aLi.join(''), 'ulIsTraum');

    // Birth

    aLi.push(createLi('clsLabourRF', '', '1000000000001000', ' преждевременные роды', ' (37 недель при текущей беременности)'));

    aLi.push(createLi('clsLabourRF', '', '1000000000001010', ' многоплодная беременность'));

    aLi.push(createLi('clsLabourRF', '', '1000000000001010', ' послеродовое кровотечение', ' требующее &gt; 1 литра трансфузии'));

    aLi.push(createLi('clsLabourRF', '', '1000000000001010', ' затяжные роды', ' (>24 часов)'));

    aLi.push(createLi('clsLabourRF', '', '1000000000001010', ' полостные или ротационные щипцы'));

    aLi.push(createLi('clsLabourRF', '', '1000000000001000', ' ВРТ, ЭКО', ' (ART - вспомогательные репродуктивные технологии, IVF - экстракорпоральное оплодотворение)'));

    aLi.push(createLi('clsLabourRF', '', '1000000000001010', ' преэклампсия'));

    aLi.push(createLi('clsLabourRF liLabourRuRF_1', 'liSeverePreeclampsia', '1000000000000000', ' тяжелая форма преэклампсии'));

    aLi.push(createLi('clsLabourRF liLabourRuRF_1', 'liStillbirth', '1000000000001000', ' мертворождение при текущей беременности'));

    createCard('clsLabourRF', '1000000000000000', 'особенности данных родов ', vCardCounter, aLi.join(''));
    
    // Chronic Heart Insuff 

    aLi.push(createLi('cls1RF cls2RF cls3RF cls9RF cls10RF', 'liSomeHeartInsuff', '1000000000000000', '<span hidden> хроническая сердечная недостаточность</span> любой стадии'));

    aLi.push(createLi('cls3RF', 'liHeartInsuffLess1Month', '1000000010000000', '<span hidden> сердечная недостаточность любой стадии</span> &lt; 1 мес.'));

    aLi.push(createLi('cls3RF cls9RF cls10RF cls2BRF  cls3BRF_1 cls4BRF', 'liHeartInsuff3_4', '10000002000000000', ' хроническая сердечная недостаточность III—IV ФК по NYHA'));

    aLi.push(createLi('cls3RF', 'liCongestHeartFailOrSystLVDysfunctEFLess40Percent', '10000000000000001', ' застойная сердечная недостаточность/дисфункция ЛЖ', ' (в частности, ФВ ≤ 40 %)'));

    // aLi.push(createLi('cls1RF cls2RF cls3RF cls9RF cls10RF cls2BRF  cls3BRF_1 cls4BRF', 'liArtificialHeartValve', '10000000000000000', ' искусственный клапан сердца'));

    createCard('cls1RF cls2RF cls3RF cls9RF cls10RF cls2BRF  cls3BRF_1 cls4BRF', '1000010000000000', 'хроническая сердечная недостаточность ', vCardCounter, aLi.join(''), 'ulIsHeartInsuff');

    // Hormone Taking

    aLi.push(createLi('cls3RF clsFemaleLvl', '', '10000000000000000', ' применение эстроген-гестагенных препаратов', ' (контрацепция или гормональная заместительная терапия)'));

    aLi.push(createLi('cls3RF clsFemaleLvl', '', '1000000100000000', ' применение селективных модуляторов эстрогеновых рецепторов'));

    aLi.push(createLi('cls1RF cls3RF', '', '1000000000000000', ' гормональная заместительная терапия'));

    createCard('cls1RF cls3RF', '1100000000000000', 'применение гормональных препаратов ', vCardCounter, aLi.join(''), 'ulIsHormoneTaking');

    // Stroke

    aLi.push(createLi('cls1RF cls2BRF cls3RF cls3BRF_1 liStroke_1', 'liAcuteStroke', '1000000151000100', ' острый период инсульта', ' - учитывается 30 суток т. к. используемая шкала принимает как параметр этот срок острого периода (несмотря на то, что в России острым считается период 21 сутки)'));

    aLi.push(createLi('cls2RF liSumAtrFibrRF_1', '', '1000000000000000', ' ТИА в анамнезе'));
    aLi.push(createLi('cls2RF cls2BRF liSumAtrFibrRF_1 liStroke_1', '', '1000000000000000', ' инсульт в анамнезе'));

    createCard('cls1RF cls2RF cls2BRF cls3RF cls3BRF_1', '1000000000000000', 'ОНМК ', vCardCounter, aLi.join(''));

    // Kidney Failure

    aLi.push(createLi('cls9RF cls10RF cls2BRF  cls3BRF_1 cls4BRF liSevereRenalInsuff_1 liSevereRenalInsuff_2', 'liChronicDialysis', '1000000000000000', ' хронический диализ'));

    aLi.push(createLi('cls2BRF  cls3BRF_1 cls4BRF liSevereRenalInsuff_1 liSevereRenalInsuff_2', '', '1000000000000000', ' трансплантация почки'));

    aLi.push(createLi('cls3RF clsObstComorbidities', '', '1000000100000000', ' нефротический синдром'));

    aLi.push(createLi('cls1BRF cls2BRF cls3BRF_1 cls4BRF cls9RF cls10RF', 'liCC', '1000000000000000', ' повышен креатинин крови'));

    aLi.push(createLi('cls1BRF cls2BRF cls3BRF_1 cls4BRF cls9RF cls10RF liGlomerFiltrRate_1', 'liGlomerFiltrRate30_59', '101.000000000000', ' скорость клубочковой фильтрации 30—59 мл/мин'));

    aLi.push(createLi('cls1BRF cls2BRF cls3BRF_1 cls4BRF cls9RF cls10RF liGlomerFiltrRate_1 liSevereRenalInsuff_1', 'liGlomerFiltrRateLess30', '102.500000000000', ' скорость клубочковой фильтрации &lt; 30 мл/мин'));

    createCard('cls1BRF cls2BRF cls3BRF_1 cls4BRF cls3RF cls9RF cls10RF', '1000000000000000', 'почечная недостаточность ', vCardCounter, aLi.join(''), 'ulIsRenalInsuff');
    
    // Liver Failure

    aLi.push(createLi('cls1BRF cls3BRF_1', '', '1000000000000000', ' печеночная недостаточность (МНО &gt; 1,5)'));

    aLi.push(createLi(' cls9RF cls10RF cls2BRF cls3BRF_1 cls4BRF', '', '1000000000000000', ' нарушение функции печени', '. Хронические болезни печени (цирроз), либо значительные сдвиги в печеночных пробах (повышение билирубина &gt; чем в 2 раза от верхней границы нормы + повышение АЛТ/АСТ/щелочной фосфатазы &gt; чем в 3 раза от верхней границы нормы)'));

    createCard(' cls9RF cls10RF cls2BRF  cls3BRF_1 cls4BRF', '102.501000000100', 'печеночная недостаточность ', vCardCounter, aLi.join(''), 'ulIsLiverFailure');
    
    // Bad Habits

    aLi.push(createLi('cls2BRF', '', '1000001000000000', ' злоупотребление алкоголем', ' (&gt; 8 стаканов в неделю)'));

    aLi.push(createLi('cls10RF', '', '1000000000000000', ' текущее внутривенное употребление наркотиков'));

    aLi.push(createLi('cls10RF', '', '1000000000001010', ' курение'));

    createCard('cls2BRF cls10RF', '1000000000000000', 'вредные привычки ', vCardCounter, aLi.join(''));
    
    // Bleeding

    aLi.push(createLi('cls1BRF', '', '104.000000000000', ' кровотечения &lt; чем за 3 мес до госпитализации'));

    aLi.push(createLi('cls3BRF_1 cls10BRF', '', '1000000001000100', ' продолжающееся активное кровотечение'));

    aLi.push(createLi('cls4BRF', '', '1000000001000100', ' трудно контролируемое кровотечение во время текущего оперативного лечения /обширность хирургического вмешательства'));

    aLi.push(createLi('cls2BRF cls3BRF_1 cls4BRF', 'liPriorMajorBleeding', '1000000001000100', ' кровотечение в анамнезе', ' (интракраниальное, либо требующее госпитализации, либо со снижением Hb &gt; 2 г/л, либо требующее гемотрансфузии)'));

    createCard('cls2BRF cls3BRF_1 cls4BRF cls10BRF', '1000000000000000', 'кровотечение активное или в анамнезе ', vCardCounter, aLi.join(''));
    

    // Single RF

    createBtn('cls2BRF cls3BRF_1 cls4BRF', '', '1000001001100000', ' текущее применение антикоагулянтов, антиагрегантов или тромболитических препаратов');

    createBtn('cls2BRF', '', '1000001000000000', ' лабильное МНО', ' (&lt; 60% времени в терапевтическом диапазоне)');

    // createBtn(' cls5RF', 'btnSpCordDamage', '1000000000000000', ' повреждение спинного мозга в анамнезе');

    createBtn('cls1RF cls3RF', 'liAcuteInfarction', '1000000010000000', ' острый инфаркт миокарда', ' - 12-14 дней от начала, подострый - до 2 месяцев.');

    createBtn('cls10BRF', '', '1000000000000100', ' высокий риск кровотечения в родах', ' (например, предлежание плаценты)');

    createBtn('cls1RF cls3RF', 'ulLargeOperIn30Days', '1000000010000000', ' большая операция &lt; 1 мес. назад');

    createBtn('cls10RF', '', '1000000000003000', ' гиперемезис', ': форма раннего токсикоза, основными симптомами которой являются сильная тошнота, регулярная рвота, ощущение слабости.');

    createBtn('cls10RF', '', '1000000000003000', ' синдром гиперстимуляции яичников', ' (учитывается только в первом триместре)');

    createBtn('cls3RF clsFemaleLvl', 'liStillbirthsMiscarriagesPrematureBirth', '1000000010000000', ' необъяснимые мертворождения, выкидыши (&ge; 3), преждевременные роды с токсикозом или задержка внутриутробного развития');

    createBtn('cls10RF', '', '1000000000001010', ' роды в анамнезе больше 3');

    createBtn('cls10RF', '', '1000000000003030', ' хирургические вмешательства во время беременности или в раннем послеродовом периоде', ', за исключением немедленного восстановления промежности, а также аппендэктомии, послеродовой стерилизации');

    createBtn('cls3RF', '', '1000000010000000', ' отек нижних конечностей');

    createBtn('cls3RF cls10RF', '', '1000000110001010', ' варикозное расширение вен нижних конечностей');

    createBtn('cls3RF', '', '1000000100000000', ' сдавление вен', ' опухолью, гематомой и пр.');

    createBtn('cls3RF ', '', '1000000110020000', ' воспалительные заболевания толстого кишечника');

    createBtn('cls3BRF_1', '', '1000000001000000', ' люмбальная пункция, эпидуральная или спинномозговая анестезия', ' за 4 ч. до или в течение 12 ч после операции');

    // createBtn('', 'btnGeneralAnesthesia', '10000001000000000', ' общая анестезия');

    createBtn('cls2RF', '', '10000100000000000', ' сосудистое заболевание', ' (инфаркт миокарда в анамнезе, периферический атеросклероз, атеросклеротические бляшки в аорте)');

    createBtn('cls2BRF', '', '1000001000000000', ' совместный прием антикоагулянтов и НПВП', ' (нестероидных противовоспалительных препаратов)');

    createBtn('cls9RF cls10RF cls2BRF  cls3BRF_1 cls4BRF', 'ulActiveUlcerOfStomachOrDuodenum', '104.500000000000', ' активная язва желудка или двенадцатиперстной кишки');

    createBtn('cls1BRF', '', '102.500000000000', ' пребывание в отделении интенсивной терапии', ' в период госпитализации');

    createBtn('cls1BRF cls3RF', 'btnCentralVeinCatheter', '102.001220000000', ' катетер в центральной вене');

    createBtn('cls3RF', '', '1000000100000000', ' пароксизмальная ночная гемоглобинурия');

    createBtn('cls4RF', '', '1000000000000000', ' наложение жгута/турникета во время операции');

    // createBtn('cls4RF', '', '1000000020000000', ' гипсовая иммобилизация конечности', ' &lt; 1 мес.');

    createBtn('cls9RF', '', '1000000100000000', ' лейкоциты крови &gt; 11 × 10 <sup><small>9</small></sup>/л');

    createBtn('cls4RF', '', '1000000000000000', ' воспаление суставов нижних конечностей (артрит), остеомиелит');

    createBtn('cls4RF cls10RF', 'btnDehydration', '1000000000000000', ' дегидратация', ' - cостояние, связанное со значительными потерями воды (потоотделение, рвота, диурез, диарея), либо недостаточным поступлением воды в организм');

    createBtn('cls3RF', '', '1000000100000000', ' миелопролиферативные заболевания', ': эссенциальная тромбоцитемия (увеличение числа тромбоцитов), истинная полицитемия (увеличенное количество эритроцитов), хронический миелолейкоз (увеличенное количество лейкоцитов)');
}
