class SpriteSheet {
    private image: HTMLImageElement;

    constructor(src: string) {
        this.image = new Image();
        this.image.src = src;
    }

    getImage(): HTMLImageElement {
        return this.image;
    }
}