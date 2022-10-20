const adc = require('./Classes/adc.js')
let m = new adc(100, 200, "green", "fsadf");
console.log(m)

const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 9090});

const field = [];

function move(dir) {
    if(dir == "up") {

    }
}
for (let i = 0; i < 17; i++) {
    field[i] = [];
    for (let j = 0; j < 17; j++) {
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
    con.on('message', message => {
        let msg = JSON.parse(message);
        console.log(msg)
        if (msg.type === 'move') {
            msg.object.tile.x++
        }
        if (msg.type === 'newUser') {
            users[user].name = msg.name;
            console.log(users[user])
        }
        if (msg.type === 'request') {
            switch (msg.entity) {
                case "adc": users[user].pcs.adc["ashjd"] = new adc(200, 300, "purple", "fad")
            }
            console.log(users[user])
        }
        
    });
    users[user] = {
        connection: con,
        name: "",
        id: user,
        pcs: {
            adc: {},
            rgc: {},
            asc: {},
            hpc: {},
            cdc: {},

            spy: {},
            esf: {},

            vrs: {},
            hlr: {},

            bug: {},
            def: {},

            afy: {},
            efy: {},
            ify: {}

        },
        money: 0,

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