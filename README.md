# Project-1-Scarecrow Game
## Game Description:
The Scarecrow game is an alternative to the hangman game. The game is simple, the player have to try and guess the right word, they have 8 chances to guess, every time the player guess a wrong letter, a spooky scarecrow will start to build up, if the whole scarecrow is built that indicates that the player has lost the game, if the player was able to guess all the letters before the scarecrow is fully built then the player wins.

## link to the deployed live site:
you can play a demo here: https://ann-swords.github.io/Project-1-ScareCrew-Game/

## Approach taken and technologies used: 
The Game was deployed using HTML, CSS, and JavaScript. 

1. ### script.js
The game was deployed as the following:


An array of random Halloween related words was created, **Math.random()** was used to randomize the words, **toUpperCase()** to capitalise the words, then **split('')** to generate a new array that contains letter from the splited word.

* **generateRandomWords()** it take the splited array of letters and create for each one of them a new div to display it on screen.
* **compare()** takes the letter that the user clicked and compare it to the array of splitted letters.
* **showScareCrew()** displays the scarecrow body parts each time the player guesses a wrong letter.










## Wireframe

![alt text](/wireframe/instructionImg.png "Game Instructions")
![alt text](/wireframe/1.png "Start Game ")
![alt text](/wireframe/2.png "Guess letters")
![alt text](/wireframe/3.png "Game when lose")
![alt text](/wireframe/4.png "Game when win")

![alt text](/wireframe/letterBox.png "letters background")

## sources:
* The scarecrow was drawn using: https://www.pixilart.com/draw

* The buttons background designed using figma: https://www.figma.com/

* fonts used from: https://fonts.google.com/about