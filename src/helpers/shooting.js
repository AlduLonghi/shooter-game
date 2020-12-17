import Laser from '../objects/laser'; 

const shootLaser = (scene) => {
     scene.gun = 1;
     scene.time.addEvent({
       delay: 200,
       callback: () => {scene.gun = 0},
       callbackScope: scene,
       loop: false,
     })
     const laser = new Laser(
      scene, 
      scene.gamePlayer.x, 
      scene.gamePlayer.y - 15,
      'laser1');
     scene.playerLasers.add(laser);
     scene.playerLasers.setVelocityY(-350);
}


export { shootLaser };

