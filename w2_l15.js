// Use "if" and "else if" to handle any situation.
// Put it all together to defeat enemies and pick up coins!
// Make sure you bought great armor from the item shop! 400 health recommended.

loop {
    var flag = this.findFlag();
    var enemy = this.findNearestEnemy();
    var item = this.findNearestItem();

    if (flag) {
        // What happens when I find a flag?
        this.pickUpFlag(flag);
    }
    else if (enemy) {
        // What happens when I find an enemy?
        if(this.isReady("cleave")){
            this.cleave(enemy);
        }else{
            this.attack(enemy);
        }
    }
    else if (item) {
        // What happens when I find an item?
        this.moveXY(item.pos.x,item.pos.y);
    }
}
