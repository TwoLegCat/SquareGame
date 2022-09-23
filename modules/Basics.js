export default class Basics {
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    lvl = 0;
    tile = {
        x: ~~(this.x / 50),
        y: ~~(this.y / 50)
    };
}