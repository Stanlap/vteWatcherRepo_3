// let aT1 = document.getElementsByName('passwords');
let aT1 = document.querySelectorAll('input[type="password"]');
// aT1.forEach(function (el) {
//     el.addEventListener('input', function () {
//         if (el.validity.patternMismatch) {
//             el.setCustomValidity('Пароль допускает строчные и прописные латинские буквы, цифры, спецсимволы. Минимум 8 знаков.');
//         } else {
//             el.setCustomValidity('');
//         }
//     });
// });
$(aT1).on('click', ()=>{
    $('#spnPasswHelp').html('Пароль допускает строчные и прописные латинские буквы, цифры, спецсимволы. Минимум 8 знаков.'); 
    $('#spnPasswHelp').removeClass('text-info');
});
let btn = document.getElementById('btn1');
btn.addEventListener('click', () => {
    if (aT1.item(0).value !== aT1.item(1).value) {
        // alert('Пароли не совпадают!');
        $('#spnPasswHelp').html('Пароли не совпадают.'); 
        $('#spnPasswHelp').addClass('text-info');
        aT1.forEach(function (el) {
            el.value = '';
        });
        aT1.item(0).focus();
    }
    // else{
    //     $('#spnPasswHelp').removeClass('text-info');
    // }
});

