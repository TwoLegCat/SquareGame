const fs = require('fs');


let content = `{
    "user": "John",
    "kills": 23
}
`
let content2 = {
    user: "cena",
    kills: 34
}
function createUser(name, pw) {
    let id = ~~(Math.random() * 16777216).toString(16);
    let pattern = {
        user: {
            name: name,
            password: pw,
            id: id
        },
        kills: {
            total: 0,
            tanks: 0,
            etc: 0
        },
        entities: {
            total: 0,
            tanks: 0,
            etc: 0
        },
        resources: {
            
        }
    }
    fs.writeFile(`userData/${name}.json`, JSON.stringify(pattern, null, "  "), err => {
        if(err) console.error(err);
    })
}
//writes in the file; with writefile you can also create a new file; just type the new name! zb benny.txt
fs.writeFile("userData/database.json", JSON.stringify(content2, null, "  "), err => {
    if(err) console.error(err);
})
let restore = "";
let fixed = {};
//gets content in the file to later restore previous text
fs.readFile("userData/database.json", function(err, data) {
    if(err) console.error(err);
    restore = JSON.parse(data);
    console.log(restore);
    fixed = JSON.stringify(restore);
    console.log(fixed);
});
//fs.rename("database.json", "leon.json", err => console.error(err))
class User {
    constructor(name, kills, troops) {
        this.name = name;
        this.kills = kills;
        this.troops = troops;
    }
}
let x = new User("Benny", 3, 7);
console.log(x);