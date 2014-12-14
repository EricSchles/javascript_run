// Defeat the enemy hero in a duel!

loop {
    // Find and attack the enemy inside a loop.
    // Use flags and your special moves to win!
    var flag = this.findFlag();
    if (flag) {
        this.pickUpFlag(flag);
    }

   var enemy = this.findNearestEnemy();
   if(enemy){
       if(this.isReady("power-up")){
           this.powerUp();
       }else{
           this.attack(enemy);
       }
   }
    
}
