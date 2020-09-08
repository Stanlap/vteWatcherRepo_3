console.log('Chat_2 is attached')
const ws = new WebSocket('ws://localhost:3000'),
    messages = $('#ulMsgs'),
    status = $('#pStatus');
let vName = '';

$('#frmMsg').on('submit', event => {
    event.preventDefault();
    vName = $('#inpName').val();
    let vContent = $('#taMsg').val();
    ws.send(`<strong>${vName}:</strong>   ${vContent}`);
    $('#taMsg').val('');

});

const setStatus = value => status.html(value);
ws.onopen = () => setStatus('ONLINE');
ws.onclose = () => setStatus('DISCONNECTED');

const printMessage = value => {
    $('<li/>').prop({
        class: 'list-group-item border-0'
    }).html(value).appendTo(messages);
    vName ? $(`li :contains(${vName})`).addClass('text-primary') : '';
    let oMsgs = $.makeArray($('#ulMsgs li'));
        while (oMsgs.length > 50) {
            $('#ulMsgs li').first().remove();
            oMsgs = $.makeArray($('#ulMsgs li'));
    }
}
ws.onmessage = response => printMessage(response.data);
$('#btnTwo').on('click', ()=> window.close());