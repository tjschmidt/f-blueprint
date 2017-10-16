import {EntityType} from "./EntityType";
import {Sprite} from "./Sprite";

export class Entity {
    private static currentId = 1;

    readonly id: number;
    x: number;
    y: number;

    constructor(readonly type: EntityType, readonly sprite: Sprite) {
        this.type = type;
        this.id = Entity.currentId;
        ++Entity.currentId;
    }

    moveTo(x: number, y: number): Entity {
        this.x = x;
        this.y = y;
        return this;
    }

    draw(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number): Entity {
        if (this.sprite !== null)
            this.sprite.draw(context, x, y, width, height);
        return this;
    }

}