// If there is an enemy, attack it.
// Otherwise, attack the chest!

loop {
    var enemy = this.findNearestEnemy();
    if(enemy){
        this.attack(enemy);
    }else{
    // Use if/else.
      this.attack("Chest");
    }
      
}
