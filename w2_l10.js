loop {
    var enemy = this.findNearestEnemy();
    var distance = this.distanceTo(enemy);
    if (distance < 10) {
        // Attack if they get too close to the peasant.
        this.attack(enemy);       
    } else {
    // Else, stay close to the peasant! Use else.
    this.moveXY(40,37);
    
}
}
