const WebSocket = require('ws');
const PORT = process.env.PORT || 3000
const ws_server = new WebSocket.Server({port: PORT});

ws_server.on('connection', ws =>{
    ws.on('message', message =>{
        ws_server.clients.forEach(client=>{
            if(client.readyState === WebSocket.OPEN){
                client.send(message);
            };
        });
    });
});

module.exports.ws_server = ws_server