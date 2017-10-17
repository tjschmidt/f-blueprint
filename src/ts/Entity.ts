/// <reference path="EntityType.ts"/>
/// <reference path="Sprite.ts"/>
/// <reference path="SpriteGroup.ts"/>

class Entity {
    private static currentId = 1;

    readonly id: number;
    x: number;
    y: number;

    private sprite: Sprite;

    constructor(readonly type: EntityType, sprite: Sprite, readonly spriteGroup: SpriteGroup = null) {
        this.type = type;
        this.sprite = sprite;
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
        else if (this.spriteGroup !== null) {
            this.nextSprite();
            if (this.sprite !== null)
                this.sprite.draw(context, x, y, width, height);
        }
        return this;
    }

    nextSprite(): Entity {
        if (this.spriteGroup !== null)
            this.sprite = this.spriteGroup.next();
        return this;
    }

    previousSprite(): Entity {
        if (this.spriteGroup !== null)
            this.sprite = this.spriteGroup.previous();
        return this;
    }

}