class Entity {
    private static currentId = 1;
    readonly id: number;
    private x: number;
    private y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.id = Entity.currentId;
        ++Entity.currentId;
    }
}