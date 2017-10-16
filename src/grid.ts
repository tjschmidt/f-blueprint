class Grid {
    readonly width: number;
    readonly height: number;
    private entities: Entity[];

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.entities = [];
    }

    addEntity(entity: Entity): void {
        this.entities.push(entity);
    }

    findEntity(id: number): number {
        for (let i = 0; i < this.entities.length; ++i) {
            if (this.entities[i].id === id)
                return i;
        }
        return -1;
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
}