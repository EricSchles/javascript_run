// If the ogres rush at you, cleave them!
// If they stay 10 meters away, attack the "Chest".
loop {
    var enemy = this.findNearestEnemy();
    var distance = this.distanceTo(enemy);
    if (distance < 10) {
        if(this.isReady("cleave")){
            this.cleave(enemy);
        }else{
            this.attack(enemy);
        }
    }else{
            this.attack("Chest");
        }
    }
