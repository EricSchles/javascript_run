// Stay in the middle and defend!

loop {
    enemy = this.findNearestEnemy();
    if (enemy) {
        // Either attack the enemy...
        this.attack(enemy);
    }
    else {
        // ... or move back to your defensive position.
        this.moveXY(40,35);
    }
}
