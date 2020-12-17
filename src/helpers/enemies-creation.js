import SimpleEnemy from '../entities/simple-enemy';

const newEnemies = (scene) => {
  const newEnemy = new SimpleEnemy(scene);
  scene.enemies.add(newEnemy);
  scene.enemies.setVelocityY(100);
}

const enemiesCreation = (scene) => {
 scene.time.addEvent({
     delay: 500,
     callback: () => {newEnemies(scene)},
     callbackScope: scene,
     loop: true
 })
}

export { enemiesCreation };