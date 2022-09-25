const Basics = require("./Basics.js");
class Range extends Basics {
    type = "range";
    //main
    range = 3;
    atkspd = 1500;
    atkdmg = 10;
    cmds = 5;
    hp = 200;
    //weapon
    ability = 1.1;
    perc = 0.2;
    addcrit = 10;
    //artifacts
    slots = 3;
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