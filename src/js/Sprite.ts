class Sprite {
    constructor(readonly spriteSheet: SpriteSheet, readonly x: number, readonly y: number, readonly width: number, readonly height: number, readonly type: SpriteType) {
    }

    draw(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number): void {
        context.drawImage(this.spriteSheet.getImage(), this.x, this.y, this.width, this.height, x, y, width, height);
    }
}