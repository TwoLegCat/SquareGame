console.log("You're on the login page");
function check() {
    requestAnimationFrame(check);
    let codeInput = document.getElementById("gameCode");
    let nameInput = document.querySelector("#name");
    let info = document.querySelector("#nameInfo");
    codeInput.value = codeInput.value.toUpperCase();
    if(codeInput == document.activeElement || nameInput == document.activeElement) {
        if(nameInput.value.length > 16 || nameInput.value.length == 0) {
            info.innerHTML = "Invalid Name"
            info.style.color = "red";
        } else {
            info.innerHTML = "Valid Name"
            info.style.color = "lime";
        }
    }
}
const user = {
    name: "",
    pw: "",
    id: "",
    con: {}
}
const ws = new WebSocket("ws://localhost:9090");                    
ws.addEventListener('open', () => {
//send irgendwas
});
ws.addEventListener('message', e => {
    console.log(`res: "${e.data}"`);
});
function submit() {
    user.name = document.querySelector("#name").value;
    console.log(user.name);
    let msg = JSON.stringify(user);
    ws.send(msg);
}