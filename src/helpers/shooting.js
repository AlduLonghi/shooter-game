const shootLaser = (scene) => {
    scene.laserGroup.fireLaser(scene.gamePlayer.x, scene.gamePlayer.y - 20);
}

const addEvents = (scene) => {
    scene.input.on('pointermove', pointer => {
      scene.gamePlayer.x = pointer.x;
      scene.gamePlayer.y = pointer.y;
    })
    scene.input.on('pointerdown', () => {
      shootLaser(scene);
    })
}



export { addEvents };

