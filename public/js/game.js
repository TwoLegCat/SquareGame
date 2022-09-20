class Basics {
    constructor(x, y, hp, lvl) {
        this.tile = {
            x: x,
            y: y
        }

        this.hp = hp;
        this.lvl = lvl;
        this.mv = {
            path: [],
            isMoving: false,
            a: {
                x: 0,
                y: 0
            }

        };
        this.id = eid();
    }
    move(dir) { 
        let i = 0;
        if(dir == "right") {  
            if(this.tile.x < 16) {
                if(field[this.tile.x + 1][this.tile.y].occupied == false) {
                    field[this.tile.x][this.tile.y] = {occupied: false}
                    field[this.tile.x + 1][this.tile.y] = this;
                    this.mv.isMoving = true;
                    let temp = setInterval(() => {
                        this.mv.a.x = curve(i++);
                        if(i == 10) {
                            clearInterval(temp);
                            this.mv.a.x = 0;
                            this.tile.x++;
                            this.mv.isMoving = false;
                        } 
                    }, 50);
                } else {
                    console.error("tile occupied");
                }
            } else {
                console.error("entity on edge");
            }
        }
        if(dir == "left") {
            if(this.tile.x > 0) {
                field[this.tile.x][this.tile.y] = {occupied: false}
                field[this.tile.x - 1][this.tile.y] = this;
                this.mv.isMoving = true;
                let temp = setInterval(() => {
                    this.mv.a.x = -curve(i++);
                    if(i == 10) {
                        clearInterval(temp);
                        this.mv.a.x = 0;
                        this.tile.x--;
                        this.mv.isMoving = false;
                    } 
                }, 50);
            }
        }
        if(dir == "down") {
            if(this.tile.y < 16) {
                field[this.tile.x][this.tile.y] = {occupied: false}
                field[this.tile.x][this.tile.y + 1] = this;
                this.mv.isMoving = true;
                let temp = setInterval(() => {
                    this.mv.a.y = curve(i++);
                    if(i == 10) {
                        clearInterval(temp);
                        this.mv.a.y = 0;
                        this.tile.y++;
                        this.mv.isMoving = false;
                    } 
                }, 50);
            }
        }
        if(dir == "up") {
            if(this.tile.y > 0) {
                field[this.tile.x][this.tile.y] = {occupied: false}
                field[this.tile.x][this.tile.y - 1] = this;
                this.mv.isMoving = true;
                let temp = setInterval(() => {
                    this.mv.a.y = -curve(i++);
                    if(i == 10) {
                        clearInterval(temp);
                        this.mv.a.y = 0;
                        this.tile.y--;
                        this.mv.isMoving = false;
                    } 
                }, 50);
            }
        }
    }
    draw() {
        ctx.drawImage(this.type, xy(this.tile.x + this.mv.a.x), xy(this.tile.y + this.mv.a.y), 30, 30);
    }
    sync() {
        field[this.tile.x][this.tile.y] = this;
    }
}
class Creator extends Basics {
    constructor() {
        super(4, 4, 200, 0);
        this.type = player;
    }
}
class Entity extends Basics {
    constructor(x, y, type, team) {
        super(x, y, 200, team);
        this.type = type;
        this.team = team;
    }
}
function xy(xy) {
    return xy * 50 + 10;
}
let gameCode = "";
function createGameCode() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0; i < 6; i++) {
        gameCode += chars[~~(Math.random() * chars.length)];
    }
    return gameCode;
}
createGameCode();
function drawImg(img, x, y) {
    ctx.drawImage(img, xy(x), xy(y), 30, 30);
}
function curve(x) {
    //return .5 * Math.sin((x - .5) * Math.PI) + .5
    x *= .1
    return 1 / (1 + (x / (1 - x)) ** -2);
}
function add(x) {
    return curve(x) - curve(--x);
}
const ws = new WebSocket("ws://localhost:9090");                    
ws.addEventListener('open', () => {
    ws.send("sheesh");
});
ws.addEventListener('message', e => {
    console.log(`res: "${e.data}"`);
});
const board = {
    selected: true
};
const field = [];
for(let i = 0; i < 17; i++) {
    field.splice(i, 0, []);
    for(let j = 0; j < 17; j++) {
        field[i].splice(j, 0, {occupied: false});
    }
}
const canv = document.getElementById("canvas");
canv.width = canv.height = 850;
const ctx = canv.getContext("2d");
const mouse = {
    x: 0,
    y: 0,
    mvx: 0,
    mvy: 0,
    state: {
        isDown: false,
        button: -1
    },
    inCanv: false,
    canvX: 0,
    canvY: 0,
    tile: {
        x: 0,
        y: 0,
        content: {}
    }
}
const player = document.getElementById("player");
let batteryFull = document.getElementById("batteryFull");
let yellowArr = [];
let key = "";
window.addEventListener("keydown", e => {
    if(!(key.includes(e.key))) key += e.key;
    if(key.includes("s")) {
        creator.move("down");
    }
    if(key.includes("d")) {
        creator.move("right");
    }
    if(key.includes("w")) {
        creator.move("up");
    }
    if(key.includes("a")) {
        creator.move("left");
    }
    //console.log(evt.key)
});
let testArr = [[{hallo: "yello"}]];
//console.log(testArr[0][0].stallo == undefined);
//true
window.addEventListener("keyup", e => {
    key = key.replace(e.key, "");
    //console.log(key)
});
window.addEventListener("mousedown", e => {
    //console.log(evt.button);
    mouse.state.button = e.button;
    mouse.state.isDown = true;
    if(e.button == 2) {
        canv.style.cursor = "help";
        console.log(mouse.tile.content);
    }
});
window.addEventListener("mouseup", e => {
    //console.log(evt);
    if(e.button == 2) {
        canv.style.cursor = "default";
    }
    mouse.state.isDown = false;
});
window.addEventListener("wheel", e => {
    //console.log(evt);
});
window.addEventListener("mousemove", e => {
    mouse.mvx = e.movementX;
    mouse.mvy = e.movementY;
    mouse.x = e.x;
    mouse.y = e.y;
});
canv.addEventListener('mousemove', e => {
    mouse.canvX = e.offsetX;
    mouse.canvY = e.offsetY;
    mouse.tile.x = Math.floor(mouse.canvX / 50); 
    mouse.tile.y = Math.floor(mouse.canvY / 50);
    mouse.tile.content = field[mouse.tile.x][mouse.tile.y];
});
//prevent contextmenu
canv.addEventListener("contextmenu", e => {
    e.preventDefault();
});
window.addEventListener("touchstart", e => {
    console.log("Touch");
    console.log(e);
});
window.addEventListener("touchend", e => {
    console.log("Touch ended");
    console.log(e);
});
let bug = document.getElementById("bug");
let heart = document.getElementById("hp");
let creator = new Creator();
creator.sync();
let melee = document.getElementById("melee");
let js = document.getElementById("js");
const windowDiv = document.getElementById("windows");
function createWindow(entity) {
    let reposition = false;
    let window = document.createElement("div");
    let navbar = document.createElement("div");
    let x = document.createElement("img");
    let entityImg = document.createElement("img");
    let name = document.createElement("span");
    name.innerHTML = entity.name;
    name.className = "entityName";
    window.className = "window";
    navbar.className = "navbar";
    x.className = "closebtn";
    x.src = "svg/ui/x.svg";
    x.draggable = false;
    x.onclick = () => {window.remove(); if(mouse.inCanv) board.selected = true}
    entityImg.src = entity.src;
    entityImg.draggable = false;
    window.style.top = 300 + "px";
    window.style.left = 300 + "px";
    navbar.onmousedown = () => {reposition = true;}
    navbar.onmouseup = () => {reposition = false;}
    window.onmouseenter = () => {board.selected = false;}
    window.onmouseleave = () => {if(mouse.inCanv) board.selected = true;}
    this.addEventListener("mousemove", function(evt) {
        if(reposition) {
            let latest = {
                x: +(window.style.left.replace("px","")), 
                y: +(window.style.top.replace("px",""))
            }
            window.style.left = latest.x + evt.movementX + "px";
            window.style.top = latest.y + evt.movementY + "px";
        }
    });
    windowDiv.appendChild(window);
    window.appendChild(navbar);
    navbar.appendChild(entityImg);
    navbar.appendChild(name);
    navbar.appendChild(x);
}
let testEntity = {
    name: "feuer",
    src: "svg/battery/full.svg"
};
function gameUpdate() {
    requestAnimationFrame(gameUpdate);
    ctx.clearRect(0, 0, canv.width, canv.height);
    canv.style.top = (innerHeight - canv.height) / 2 + "px";
    canv.style.left = (innerWidth - canv.width) / 2 + "px";
    ctx.beginPath();
    for(let i = 0; i < 18; i++) {
        ctx.moveTo(i * 50, 0);
        ctx.lineTo(i * 50, canv.height);
        ctx.moveTo(0, i * 50);
        ctx.lineTo(canv.width, i * 50);
    }
    ctx.strokeStyle = "#000";
    ctx.stroke();
    if(board.selected) {
        if(mouse.inCanv) {
            ctx.beginPath();
            ctx.fillStyle = "#24242450"; 
            ctx.fillRect(mouse.tile.x * 50, mouse.tile.y * 50, 50, 50);
            ctx.fill();
        }
    }
    //Kreise drawen im arr
    yellowArr.forEach(proj => {
        proj.draw();
    });
    creator.draw();
    drawImg(bug, 5, 5);
    drawImg(melee, 6, 6);
    drawImg(js, 7, 7);
    //ctx.drawImage(bug, x(5), y(5), 30, 30)
    //ctx.drawImage(bug, x(5), y(5), 30, 30)
    /*ctx.font = "30px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("Code: " + createGameCode(), 50, 50);*/
}
console.log("%cLeave", `
    font-size: 100px; 
    color: #f21b2d;
`);