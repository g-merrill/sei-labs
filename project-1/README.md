# Minesweeper

Minesweeper is a classic puzzle game where the objective is to click and reveal safe tiles while avoiding and simultaneously flagging the dangerous buried mine tiles.
Playing minesweeper on my family's old, slow computer during the 2000's was one of my favorite pastimes growing up!


## Getting Started

There are only a handful of things to keep in mind while playing minesweeper:

  * If you click a **mine, _you lose!_**
  ![loss-img](https://i.imgur.com/bTzUVPo.png)

  * Each time you click a safe tile, it may reveal a **number** beneath it of a certain color.  This number will tell you how many mines are touching that tile (*including diagonally*).  

  * If you click a safe tile that is **blank**, you're in luck!  The game will automatically reveal all nearby blank tiles until it hits a number tile.
  ![numbers-and-blanks-img](https://i.imgur.com/2Buqy3Y.png)

  * Reset the game with its current settings by clicking the smiley face, or change the game settings to your desire using the settings bar along the top of the board!


That's about it!  [Head on out there and clear some minefields!](https://g-merrill.github.io/minesweeper/)


## Technologies Used

  * JavaScript, HTML, and CSS
  * VS Code
  * Icons created in Microsoft Word

## Next Steps

  * Implement some game sounds
  * Add a fastest time display
  * Add custom color/background themes
  * Add a helper bot that reveals one random number tile
  * Add a risky bot that reveals one blank and one completely random available tile
  * Add some additional win and loss animations
