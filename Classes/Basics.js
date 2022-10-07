class Basics {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.tile = {
            x: ~~(this.x / 50),
            y: ~~(this.y / 50)
        };
    }
}
module.exports = Basics;