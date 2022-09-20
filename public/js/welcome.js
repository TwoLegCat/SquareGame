const ws = new WebSocket("ws://192.168.178.11:9090");                    
ws.addEventListener('open', () => {
//send irgendwas
});
ws.addEventListener('message', e => {
    console.log(e)
});