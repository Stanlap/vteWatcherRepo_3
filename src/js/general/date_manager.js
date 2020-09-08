console.log('date_manager has attached')
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

export function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export function correctDate(vD) {
    return `${vD.getFullYear()}-${('0' + (vD.getMonth() + 1)).slice(-2)}-${('0' + vD.getDate()).slice(-2)}`;
}

// function plusOrMinusDays(startDate, vAddDays) {
//     let searchedDate = startDate;
//     searchedDate.setDate(searchedDate.getDate() + vAddDays);
//     return searchedDate;
// }

// let dayOne = new Date(2019, 08, 20),
//     dayTwo = new Date(2019, 10, 07);

function diffDates(dateOne, dateTwo) {
    return (dateOne - dateTwo) / (60 * 60 * 24 * 1000);
};

function dateToYMD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
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

export const addDatePicker = (vDate, ind) => `<input class="form-control" type="date" value= "${vDate}" id="inpDate_${ind}">`;
