// Collect all the coins in each meadow.
// Use flags to move between meadows.
// Press Submit when you are ready to place flags.

loop {
    var flag = this.findFlag();
    if (flag) {
        // Pick up the flag.
        this.pickUpFlag(flag);
    } else {
        // Automatically move to the nearest item you see.
        var item = this.findNearestItem();
        if (item) {
            var position = item.pos;
            var x = position.x;
            var y = position.y;
            this.moveXY(x, y);
        }
    }
}
