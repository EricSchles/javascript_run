loop{
  this.moveRight();
  this.moveUp();
  var enemy = this.findNearestEnemy();
  this.attack(enemy);
  this.moveRight();
  this.moveDown();
  this.moveDown();
  this.moveUp();
}
