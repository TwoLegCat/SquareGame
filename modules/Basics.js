export default class Basics {
    
    constructor(x, y, hp) {
        this.x = x;
        this.y = y;
        this.hp = hp;
    }
    lvl = 0;
    tile = {
        x: ~~(this.x / 50),
        y: ~~(this.y / 50)
    };
}