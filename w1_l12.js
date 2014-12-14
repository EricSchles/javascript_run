// Create a second variable and attack it!

var enemy1 = this.findNearestEnemy();
this.attack(enemy1);
this.attack(enemy1);

var enemy2 = this.findNearestEnemy();
this.attack(enemy2);
this.attack(enemy2);

this.moveDown();
loop {this.moveRight();}
