/* global Phaser */

// Copyright (c) 2024 David.E All rights reserved
//
// Created by: David.E
// Created on: May 2024
// This is the Game Scene

/**
 * This class is the Game Scene.
 */
class GameScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: "gameScene" })

    this.background = null
    this.ship = null
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manger when the scene starts,
   *   before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload() {
    console.log("Game Scene")

    this.load.image("starBackground", "./assets/starBackground.png")
    this.load.image("ship", "./assets/spaceShip.png")
  }

  /**
   * can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
    this.background.setOrigin(0, 0)
    
    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game setup while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time is ms since the last frame.
   */
  update(time, delta) {
    //pass
  }
}

export default GameScene
