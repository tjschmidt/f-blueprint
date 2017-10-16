class Grid {
    private static gridLineStyle = '#777777';

    private entities: Entity[];
    private gridLines: boolean;
    private gridSize: number;

    constructor(readonly width: number, readonly height: number) {
        this.entities = [];
        this.gridLines = true;
        this.gridSize = 32;
    }

    addEntity(entity: Entity): void {
        this.entities.push(entity);
        this.entities.sort((a: Entity, b: Entity) => {
            return a.id - b.id;
        });
    }

    findEntity(id: number): number {
        return binarySearch(this.entities, id, (entity) => {
            return entity.id;
        });
    }

    getEntity(id: number): Entity {
        let index = this.findEntity(id);
        if (index < 0)
            return null;
        return this.entities[index];
    }

    removeEntity(id: number): boolean {
        let index = this.findEntity(id);
        if (index < 0)
            return false;
        this.entities.splice(index, 1);
        return true;
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
            context.strokeStyle = Grid.gridLineStyle;

            // Get canvas dimensions
            let canvasWidth = context.canvas.clientWidth;
            let canvasHeight = context.canvas.clientHeight;

            // Draw vertical grid lines
            for (let i = 0; i < this.width; ++i) {
                let xOffset = i * this.gridSize;
                strokeLine(context, xOffset, 0, xOffset, canvasHeight);
            }

            // Draw horizontal grid lines
            for (let i = 0; i < this.height; ++i) {
                let yOffset = i * this.gridSize;
                strokeLine(context, 0, yOffset, canvasWidth, yOffset);
            }

            // Restore stroke style
            context.strokeStyle = oldStyle;
        }

        // Draw entities
        for (let entity of this.entities) {
            entity.draw(context, entity.x * this.gridSize, entity.y * this.gridSize, this.gridSize, this.gridSize);
        }

        return this;
    }
}