import Basics from "./Basics.js";
import { Upgrades } from "./upgrades/upMeele.js"
export default class Meele extends Basics {
    type = "meele"
    //paths
    range = 1;
    atkspd = 1000;
    atkdmg = 10;
    cmds = 5;
    hp = 400
    //id
    id = 0;
    constructor(x, y, team) {
        super(x, y);
        this.team = team ? "blue" : "red";
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