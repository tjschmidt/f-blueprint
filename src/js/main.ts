/// <reference path="Library.ts"/>
/// <reference path="Factory.ts"/>
/// <reference path="EntityType.ts"/>
/// <reference path="Entity.ts"/>
/// <reference path="SpriteSheet.ts"/>
/// <reference path="Sprite.ts"/>
/// <reference path="SpriteType.ts"/>
/// <reference path="SpriteGroup.ts"/>

let spriteSheet = new SpriteSheet('spritesheet.png');

let spriteLibrary = new Library<Sprite>(100, (sprite: Sprite) => {
    return sprite.type;
});
spriteLibrary.add(new Sprite(spriteSheet, 0, 0, 16, 16, SpriteType.Black));
spriteLibrary.add(new Sprite(spriteSheet, 16, 0, 16, 16, SpriteType.Blue));
spriteLibrary.add(new Sprite(spriteSheet, 0, 16, 16, 16, SpriteType.Green));
spriteLibrary.add(new Sprite(spriteSheet, 16, 16, 16, 16, SpriteType.Red));

let entityFactory = new Factory<EntityType, Entity>();
entityFactory.add(EntityType.Black, function () {
    return new Entity(EntityType.Black, spriteLibrary.get(SpriteType.Black))
});
entityFactory.add(EntityType.Blue, function () {
    return new Entity(EntityType.Blue, spriteLibrary.get(SpriteType.Blue))
});
entityFactory.add(EntityType.Green, function () {
    return new Entity(EntityType.Green, spriteLibrary.get(SpriteType.Green))
});
entityFactory.add(EntityType.Red, function () {
    return new Entity(EntityType.Red, spriteLibrary.get(SpriteType.Red))
});
entityFactory.add(EntityType.Multi, function () {
    return new Entity(EntityType.Multi, null, new SpriteGroup([
        spriteLibrary.get(SpriteType.Blue),
        spriteLibrary.get(SpriteType.Red),
        spriteLibrary.get(SpriteType.Green)
    ]))
});