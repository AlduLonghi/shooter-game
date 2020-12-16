const shootLaser = (scene) => {
    scene.laserGroup.fireLaser(scene.gamePlayer.x, scene.gamePlayer.y - 20);
}


export { shootLaser };

