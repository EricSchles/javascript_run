// Put flags where you want to build traps.
// When you're not building traps, pick up coins!

loop {
    var flag = this.findFlag();
    if (flag) {
        
        if(flag.color == "green"){
        // How do we get fx and fy from the flag's pos?
            var fx = flag.pos.x;
            var fy = flag.pos.y; 
            this.buildXY("fire-trap", fx, fy);
            this.pickUpFlag(flag);
        }
        if(flag.color == "black"){
            this.pickUpFlag(flag);
        }
    }
    else {
        var item = this.findNearestItem();
        if (item) {
            var pos = item.pos;
            var itemX = pos.x;
            var itemY = pos.y;
            this.moveXY(itemX, itemY);
        }
    }
}
