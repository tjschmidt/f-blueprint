/// <reference path="Sprite.ts"/>

class SpriteGroup {
    private sprites: Sprite[];
    private spriteIndex: number;

    constructor(sprites: Sprite[] = null) {
        this.sprites = sprites || [];
        this.spriteIndex = -1;
    }

    addSprite(sprite: Sprite): void {
        this.sprites.push(sprite);
    }

    next(): Sprite {
        if (this.sprites.length === 0)
            return null;
        this.spriteIndex = (this.spriteIndex + 1) % this.sprites.length;
        return this.sprites[this.spriteIndex];
    }

    previous(): Sprite {
        if (this.sprites.length === 0)
            return null;
        this.spriteIndex = (this.spriteIndex - 1) % this.sprites.length;
        return this.sprites[this.spriteIndex];
    }
}