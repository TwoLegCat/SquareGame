const Basics = require("./Basics.js")
const Upgrades = require("./upgrades/upMelee.js")
class Melee extends Basics {
    type = "melee";
    //paths
    range = 1;
    atkspd = 1000;
    atkdmg = 10;
    cmds = 5;
    hp = 400
    //id
    id = "";
    constructor(x=0, y=0, team="blue") {
        super(x, y);
        this.team = team == "blue" ? "blue" : "red";
    }
    upgrade(path, lvl="0") {
        switch(path) {
            case "range": this.range = Upgrades.range[lvl];
            break;
            case "atkspd": this.atkspd = Upgrades.atkspd[lvl];
            break;
            case "atkdmg": this.atkdmg = Upgrades.atkdmg[lvl];
            break;
            case "cmds": this.cmds = Upgrades.cmds[lvl];
            break;
            case "hp": this.hp = Upgrades.hp[lvl];
            break;
            default: console.error(`${path} doesnt exist for ${this.type}`);
        }
    }
}
module.exports = Melee;