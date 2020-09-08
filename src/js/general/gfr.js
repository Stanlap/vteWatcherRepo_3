console.log('gfr has attached')
export function calcCCAndGFR(gender, age, weight, race, creatinVal, crUns) {
    let vC = 0;
    crUns === 'мкг/мл, мг/100 мл' ? vC = 10 : crUns === 'ммоль/л' ? vC = 0.0884 : crUns === 'мкмоль/л' ? vC = 88.4 : vC = 1;
    // function uniformCrValue(cU, vC) {
    //     cU === 'мкг/мл, мг/100 мл' ? vC = 10 : cU === 'ммоль/л' ? vC = 0.0884 : cU === 'мкмоль/л' ? vC = 88.4 : vC = 1;
    //     return vC;
    // }
    
    function findGenderCoefCockcroftGault(vG) {
        if (vG === 0) return 0.85;
        return 1;
    }
    function getCKD_EPIResGFR(gender, age, race, creatinVal, cU, SKD_EPI) {
        let cV = (creatinVal / vC).toFixed(2);
        if (gender == 0) {
            cV <= 0.7 ? SKD_EPI = Math.pow((cV / 0.7), -0.329) * Math.pow(0.993, age) : SKD_EPI = Math.pow((cV / 0.7), -1.209) * Math.pow(0.993, age);
        } else {
            cV <= 0.9 ? SKD_EPI = Math.pow((cV / 0.9), -0.411) * Math.pow(0.993, age) : SKD_EPI = Math.pow((cV / 0.9), -1.209) * Math.pow(0.993, age);
        }
        if (race == 0) { // белые
            gender == 0 ? SKD_EPI *= 144 : SKD_EPI *= 141;
        } else { // негроидная
            gender == 0 ? SKD_EPI *= 166 : SKD_EPI *= 163;
        }
        return Math.round(SKD_EPI);
    }
    let cc = parseInt(((140 - age) * weight) / (72 * creatinVal) * vC * findGenderCoefCockcroftGault(gender));
    let gfr = getCKD_EPIResGFR(gender, age, race, creatinVal, crUns, 0);
    return [cc, gfr]
}
