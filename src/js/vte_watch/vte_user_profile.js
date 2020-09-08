console.log('vte_user_profile has attached')
let oUser = {
    name: '', 
    surname: '', 
    chief: '',
    org: '',  
    depart: '',     
    signature: '',
    surnameAndInitials: ''  
};

$('#btn1').on('click', function () {

    oUser.name = $('#name').val();
    oUser.patronymic = $('#patronymic').val();
    oUser.surname = $('#surname').val();
    oUser.chief = $('#chief').val();
    oUser.org = $('#org').val();
    oUser.depart = $('#depart').val();
    oUser.signature = oUser.name && oUser.patronymic && oUser.surname ? (oUser.name + oUser.patronymic + oUser.surname).match(/[А-Я]/g).join('') : '';
    oUser.surnameAndInitials = oUser.name && oUser.patronymic && oUser.surname ? (`${oUser.surname} ${(oUser.name).match(/[А-Я]/g)}. ${(oUser.patronymic).match(/[А-Я]/g)}.`): '';

    let serialObj = JSON.stringify(oUser);
    localStorage.removeItem('User');
    localStorage.setItem('User', serialObj);
    $("#success-alert").show().html(`Пользователь ${oUser.surnameAndInitials} создан.`);

    // alert(`User ${oUser.surnameAndInitials} has creared!`);
    this.form.reset();
});

// $('#btn2').on('click', function () {
    localStorage.getItem('User') ? (
        oUser = JSON.parse(localStorage.getItem('User')),
        $('#name').val(oUser.name),
        $('#patronymic').val(oUser.patronymic),
        $('#surname').val(oUser.surname),
        $('#chief').val(oUser.chief),
        $('#org').val(oUser.org),
        $('#depart').val(oUser.depart)
    ) : '';
    $("#success-alert").hide().html('');

// });

$('#btn2').on('click', function () {
    $("#success-alert").hide().html('');
});

$("#btn3").click(function() {
    window.close();
  });

$('#btn4').on('click', function () {
    $("#success-alert").show().html(`Пользователь ${oUser.surnameAndInitials} удален.`);
    localStorage.removeItem('User');
});
