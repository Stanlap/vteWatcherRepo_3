module.exports.countKindsRF = (tArr, oP) => {
    oP = oP.split(',');
    let tArr_2 = [];
    tArr.split(',').forEach(el => tArr_2.push(el.split('')));
    tArr = [];
    tArr_2.forEach(el => {
        let el_2 = [];
        el.forEach(item => el_2.push(item = +item))
        el = el_2;
        el_2 = [];
        tArr.push(el);
    });
    let aSetRusSurgRF = [],
        aSetRusTraumRF = [],
    oRF = {
        sPadua: 0,
        sCHA2DS2_VASс: 0,
        sIMPROVE: 0,
        sHAS_BLED: 0,
        sRusSurgRF: 0,
        sCaprini: 0,
        sMajorBleed: 0,
        sRusTraumRF: 0,
        sTraumBleed: 0,
        sGreenTop37a: 0,
        sObstRusRF: 0,
        sObstBleed: 0
    },
    i = [],
    m = 0;
    tArr_2.forEach(el => {
        i.push(el[2]);
        i.push(el[3]);
        i.push(el[4]);
        m = Number(i.join(''));
        i = [];
        oRF.sIMPROVE += Number(m);
    });

    tArr.forEach(el => {
        oRF.sPadua += el[1];
        oRF.sCHA2DS2_VASс += el[5];
        oRF.sHAS_BLED += el[6];
        aSetRusSurgRF.push(el[7]);
        oRF.sCaprini += el[8];
        oRF.sMajorBleed += el[9];
        oRF.sTraumBleed += el[10];
        aSetRusTraumRF.push(el[11]);
        oRF.sGreenTop37a += el[12];
        oRF.sObstBleed += el[13];
        oRF.sObstRusRF += el[14];
    });

    aSetRusTraumRF.concat(aSetRusTraumRF, aSetRusSurgRF);

    aSetRusSurgRF = aSetRusSurgRF.filter(function (item, pos) {
        return aSetRusSurgRF.indexOf(item) == pos;
    });
    aSetRusTraumRF = aSetRusTraumRF.filter(function (item, pos) {
        return aSetRusTraumRF.indexOf(item) == pos;
    });

    function estimateSurgRiskGrade(age, time, kindSurg, risk) {
        let i = 0;
        if (age >= 40 && age <= 60) i++;
        if (age > 60) i += 2;
        if (time == true) i++;
        if (kindSurg >= 1) i++;
        if (risk == true) i++;
        return i;
    }

    if (oP[1]) {
        +oP[3] === 1 || +oP[3] === 2 ? oRF.sCaprini += 2 : +oP[3] === 3 ? (oRF.sRusSurgRF = 3, oRF.sCaprini += 5, oRF.sRusTraumRF = 3) : oRF.sCaprini += 1;
        oRF.sCaprini > 5 ? oRF.sCaprini = 5 : '';
    }

    function getBalls(vSet, vBalls) {
        vSet = vSet.filter((item, pos) => vSet.indexOf(item) == pos);
        vBalls = estimateSurgRiskGrade(+oP[0], oP[2], +oP[3], vSet.includes(1));
        vSet.includes(2) && vBalls < 3 ? vBalls = 2 : '';
        vSet.includes(3) ? vBalls = 3 : '';
        return vBalls;
    }

    oRF.sRusSurgRF = getBalls(aSetRusSurgRF, oRF.sRusSurgRF);
    oRF.sRusTraumRF = getBalls(aSetRusTraumRF, oRF.sRusTraumRF);


    //     oRF.sRusSurgRF = estimateSurgRiskGrade(+oP[0], oP[2], +oP[3], aSetRusSurgRF.includes(1));
    //     oRF.sRusTraumRF = estimateSurgRiskGrade(+oP[0], oP[2], +oP[3], aSetRusTraumRF.includes(1));    
    // };
    // aSetRusSurgRF.includes(2) && oRF.sRusSurgRF < 3 ? oRF.sRusSurgRF = 2 : '';
    // aSetRusSurgRF.includes(3) ? oRF.sRusSurgRF = 3 : '';

    // aSetRusTraumRF.includes(2) && oRF.sRusTraumRF < 3 ? oRF.sRusTraumRF = 2 : '';
    // aSetRusTraumRF.includes(3) ? oRF.sRusTraumRF = 3 : '';

    // aSetRusTraumRF.indexOf(2) != -1 && oRF.sRusTraumRF < 3 ? oRF.sRusTraumRF = 2: '';
    // aSetRusTraumRF.indexOf(3) != -1 ? oRF.sRusTraumRF = 3 : '';

    oRF.sMajorBleed > 0 ? oRF.sMajorBleed = 1 : '';
    oRF.sTraumBleed > 0 ? oRF.sTraumBleed = 1 : '';
    return oRF;
};