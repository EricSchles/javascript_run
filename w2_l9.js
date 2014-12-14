// Survive both waves by shielding and cleaving.
// When "cleave" is not ready, use your shield skill.

loop {
    var enemy = this.findNearestEnemy();
    if(this.isReady("cleave")){
        this.cleave(enemy);
    }else{
        this.shield();
    }
}
