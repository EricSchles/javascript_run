this.moveRight();

// You should recognize this from the last level.
var enemy1 = this.findNearestEnemy();
// Now attack enemy1.
this.attack(enemy1);
this.moveRight();
this.moveRight();
var enemy2 = this.findNearestEnemy();
// Now attack enemy1.
this.attack(enemy2);
loop{this.moveRight();}
