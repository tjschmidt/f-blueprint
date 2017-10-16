class Entity {
    private static currentId = 1;

    readonly id: number;
    x: number;
    y: number;
    private sprite: Sprite;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.sprite = null;
        this.id = Entity.currentId;
        ++Entity.currentId;
    }

    setSprite(sprite: Sprite): Entity {
        this.sprite = sprite;
        return this;
    }

    draw(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number): Entity {
        if (this.sprite !== null) {
            this.sprite.draw(context, x, y, width, height);
            return this;
        }
    }

}