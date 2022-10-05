console.log("You're on the login page");
let info = document.querySelector("#nameInfo");
function check() {
    //requestAnimationFrame(check);
    let name = document.querySelector("#name");
    let pw = document.getElementById("pw");
    if(pw == document.activeElement || name == document.activeElement) {
        if(name.value.length > 16 || name.value.length == 0) {
            info.innerHTML = "Invalid Name"
            info.style.color = "red";
        } else {
            info.innerHTML = "Valid Name"
            info.style.color = "lime";
        }
        requestAnimationFrame(check);
        console.log("checking")
        isOffensive(name.value)
    }
}
const pattern = /(penis|vagin|anu|sex|gay|scheiß|schwarz|nigg|f.ck|n.tte|boob|t.tte|br.st|)/i;
function isOffensive(name) {
    if (pattern.test(name)) {
        console.log("not okay")
    } else {
        console.log("okay")
    }
}
const user = {
    name: "",
    pw: "",
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