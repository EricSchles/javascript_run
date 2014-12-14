// Patrol the village entrances.
// Build a "fire-trap" when you see an ogre.
// Don't blow up any peasants!

loop {
    this.moveXY(43, 50);
    var topEnemy = this.findNearestEnemy();
    if (topEnemy) {
        this.buildXY('fire-trap', 43, 50);
    }

    this.moveXY(25, 34);
    var leftEnemy = this.findNearestEnemy();
    if (leftEnemy) {
        this.buildXY('fire-trap', 25, 34);
    }
    
    this.moveXY(43, 20);
    var bottomEnemy = this.findNearestEnemy();
    if (bottomEnemy) {
        this.buildXY('fire-trap', 43, 20);
    }
}
