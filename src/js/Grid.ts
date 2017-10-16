import {strokeLine} from "./util";

export class Grid {
    private static gridLineStyle = '#777777';
    private static gridLineWidth = 1;

    private gridLines: boolean;

    constructor(readonly width: number, readonly height: number, readonly gridSize: number = 32) {
        this.gridLines = true;
    }

    getX(x: number): number {
        return x * this.gridSize;
    }

    getY(y: number): number {
        return y * this.gridSize;
    }

    setGridLines(enable: boolean): Grid {
        this.gridLines = enable;
        return this;
    }

    toggleGridLines(): Grid {
        this.gridLines = !this.gridLines;
        return this;
    }

    draw(context: CanvasRenderingContext2D): Grid {
        if (this.gridLines) {
            // Save and replace the stroke style
            let oldStyle = context.strokeStyle;
            let oldWidth = context.lineWidth;
            context.strokeStyle = Grid.gridLineStyle;
            context.lineWidth = Grid.gridLineWidth;

            // Get canvas dimensions
            let canvasWidth = context.canvas.clientWidth;
            let canvasHeight = context.canvas.clientHeight;

            // Draw vertical grid lines
            for (let i = 1; i < this.width; ++i) {
                let xOffset = i * this.gridSize;
                strokeLine(context, xOffset, 0, xOffset, canvasHeight);
            }

            // Draw horizontal grid lines
            for (let i = 1; i < this.height; ++i) {
                let yOffset = i * this.gridSize;
                strokeLine(context, 0, yOffset, canvasWidth, yOffset);
            }

            // Restore stroke style
            context.strokeStyle = oldStyle;
            context.lineWidth = oldWidth;
        }

        return this;
    }
}