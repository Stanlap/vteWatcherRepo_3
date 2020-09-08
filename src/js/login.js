    
    
    console.log('Login has attached')
    $('#spnPasswHelp').html() === 'Пользователь не идентифицирован.' ? $('#spnPasswHelp').addClass('text-info') : $('#spnPasswHelp').removeClass('text-info');

    let modal = document.getElementById('modYN_1');

    $('#btn1').on('click', function(){
    modal.style.display = "block";
    });
    
