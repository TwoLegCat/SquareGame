import Basics from "./Basics.js";
import { Upgrades } from "./upgrades/upMeele.js"
export default class Meele extends Basics {
    range = 1;
    atkspd = 1000;
    atkdmg = 10;
    cmds = 5;
    lvl = 0;
    constructor(x, y, team) {
        super(x, y, 400);
        this.team = team ? "blue" : "red";
    }
    upgrade(path, lvl="0") {
        switch(path) {
            case "range": range = Upgrades.range[lvl];
            break;
        }
    }
}