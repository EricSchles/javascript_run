// Only attack enemies of type "munchkin" and "thrower".
// Don't attack a "burl". Run away from an "ogre"!
loop {
    var enemy = this.findNearestEnemy();

    // Remember: don't attack type "burl"!
    if (enemy.type == "burl") {
        this.say("I'm not attacking that Burl!");
    }
    
    // The "type" property tells you what kind of creature it is.
    if (enemy.type == "munchkin") {
        this.attack(enemy);
    }
    
    // Use "if" to attack a "thrower".
    if (enemy.type == "thrower") {
        this.attack(enemy);
    }
    
    // If it's an "ogre", run away to the village gate!
    if (enemy.type == "ogre") {
        this.moveXY(40,47);
    }
    
}
