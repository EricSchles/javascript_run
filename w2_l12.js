// Press Submit when you are ready to place flags.
loop {
    var flag = this.findFlag();
    if (flag) {
        this.pickUpFlag(flag);
    }
    else {
        this.say("Place a flag for me to go to.");
    }
}
