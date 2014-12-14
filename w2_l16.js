// You'll need great equipment and strategy to win.

loop{
    
    var enemy = this.findNearestEnemy();
    var flag = this.findFlag("green");
    if(flag){
        this.pickUpFlag(flag);
    } else if(enemy){
        if(this.isReady("cleave")){
            this.cleave(enemy);
        }else{
            this.attack(enemy);
        }
    }
}

    
    
    
    
    
}
