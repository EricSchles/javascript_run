// Defeat the enemy hero in a duel!

loop {
    // Find and attack the enemy inside a loop.
    // Use flags and your special moves to win!
   var enemy = this.findNearestEnemy();
   if(enemy){
    if(enemy.type == "thrower"){
       if(this.isReady("power-up")){
           this.powerUp();
       }
       this.attack(enemy);
    }else{
        this.attack(enemy);
    }
   }
}
