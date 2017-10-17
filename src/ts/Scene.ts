/// <reference path="Grid.ts"/>
/// <reference path="Entity.ts"/>
/// <reference path="util.ts"/>

class Scene {
    private grid: Grid;
    private entities: Entity[];

    constructor(width: number, height: number, readonly context: CanvasRenderingContext2D) {
        this.grid = new Grid(width, height);
        this.entities = [];
    }

    clear(): void {
        this.context.clearRect(0, 0, getCanvasWidth(this.context), getCanvasHeight(this.context));
    }

    draw(): void {
        this.clear();
        this.grid.draw(this.context);
        for (let entity of this.entities)
            entity.draw(this.context, this.grid.getX(entity.x), this.grid.getY(entity.y), this.grid.gridSize, this.grid.gridSize);
    }

    resize(width: number, height: number): void {
        this.grid = new Grid(width, height);
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

    setGridLines(enable: boolean): void {
        this.grid.setGridLines(enable);
        this.draw();
    }
}