const Basics = require("./Basics.js")
const upgrades = {
    range: [1,2],
    atkspd: [2000, 1800, 1600, 1400, 1000],
    atkdmg: [10, 20, 30, 40, 60],
    cmds: [5, 10, 15, 20, 30],
    hp: [400, 1000, 1500, 3000, 5000]
}
class Bit extends Basics {
    type = "melee";
    id = "";
    //paths
    range = 1; //wlan
    atkspd = 1000; //ping
    atkdmg = 10; //byte
    cmds = 5; //
    hp = 400 //gb
    artifacts = [{}, {}, {}];

    lvl = 0;
    

    constructor(x=0, y=0, team="blue") {
        super(x, y);
        this.team = team;
    }
    upgrade(path, lvl=0) {
        switch(path) {
            case "range": this.range = upgrades.range[lvl];
            break;
            case "atkspd": this.atkspd = upgrades.atkspd[lvl];
            break;
            case "atkdmg": this.atkdmg = upgrades.atkdmg[lvl];
            break;
            case "cmds": this.cmds = upgrades.cmds[lvl];
            break;
            case "hp": this.hp = upgrades.hp[lvl];
            break;
            default: console.error(`${path} doesnt exist for ${this.type}`);
        }
    }
}
module.exports = Bit;
/*
purple
#ca92ec
#c088e2
#b87fdb
#ae74d1
#a269c4
green
#03946D
#26AB7B
#48BF91
#91D7C3
#008153
*/