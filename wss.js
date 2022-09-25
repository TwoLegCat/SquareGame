const Melee = require('./modules/Melee.js')
let m = new Melee(100, 200, 0);
console.log(m)

const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 9090});

const field = [];

function move(dir) {
    if(dir == "up") {

    }
}
for(let i = 0; i < 17; i++) {
    field[i] = [];
    for(let j = 0; j < 17; j++) {
        field[i][j] = {};
    }
}
function id() {
    return (~~(Math.random() * 16777216)).toString(16);
}
const users = {};
let data = {};
wss.on('connection', con => {
    const user = id();
    con.on('message', msg => {
        let object = JSON.parse(msg);
        users[user].name = object.name;
        console.log(users[user]);
    });
    users[user] = {
        connection: con,
        id: user,
        name: "Default Name"
    }
    console.log("Connected!");
    con.on('close', () => {
        console.log(`${users[user].id} disconnected!`);
        delete users[user];
        console.log(users)
    });
    //con.send({test: 5});
});
console.log(`Server listening on port 9090`);