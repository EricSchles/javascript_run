// Remember that enemies may not yet exist.
loop {
    enemy = this.findNearestEnemy();
    // If there is an enemy, attack it!
    if(enemy){ this.attack(enemy); }   
}
