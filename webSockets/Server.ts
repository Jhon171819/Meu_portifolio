import WebSocket from "ws";

const wss = new WebSocket({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Cliente conectado ao WebSocket');
    ws.on('close', () => console.log('Cliente desconectado'));
});

export default wss;