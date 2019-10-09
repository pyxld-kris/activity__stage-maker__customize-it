/**** WELCOME! *********************************************/
/**
 * Modify the stage to create your own level, and place 
 * the goal wherever you like!
 * 
 * Change the 'stageArray' variable to alter the level!
 *    Possible array entry values:
 *      * 1: Solid Block
 *      * 0: Empty Space
 *      * 9: Goal
 * 
 * ----------------------------------------------------------
 * After making a change: save this file, then press the refresh
 * button above the game window!
 * ----------------------------------------------------------
 */
/**************** Start Modifying Here! *********************/

var stageArray = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0],
  [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0],
];


/**** GOODBYE! ************************************************/
/**** Stop Modifying Here! (Unless you want to experiment!) ***/

/*/
/*/
/*/
/*/
/*/
/*/
/*/
/*/
/*/
/*/
/*/

/* eslint-disable */ // Stops codesandbox from giving us annoying errors

let scene = this;
let gameWidth = scene.game.config.width; // easy access and readability
let gameHeight = scene.game.config.height; // easy access and readability
let Goal = window.Goal; // Grab from lifted scope

scene.solidBlocks = [];

let blockWidth = 40;
let blockHeight = 40;
for (let i=0; i<stageArray.length; i++) {
  for (let j=0; j<stageArray[i].length; j++) {
    let thisX = blockWidth/2+blockWidth*j+2;
    let thisY = blockHeight/2+blockHeight*i+2;
    if (stageArray[i][j] === 1) {
      // Create a block
      let newBlock = scene.physics.add.staticSprite(
          thisX,
          thisY,
          this.generateRectangleSprite(blockWidth-4, blockHeight-4)
        )
      scene.solidBlocks.push(newBlock);
    }
    else if (stageArray[i][j] == 9) {
      scene.goal = new Goal(scene, thisX, thisY, blockWidth, blockHeight, 0x00dd00);
    }
  }

}
scene.stageArray = stageArray; // We need access to this in 'activity-setup.js'
scene.blockWidth = blockWidth; // Accessed in 'activity-setup.js'
scene.blockHeight = blockHeight; // Accessed in 'activity-setup.js'
