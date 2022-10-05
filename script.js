//------------------Initilizing variables:---------------------------------------------------------
let randomWords = ['Halloween', 'October', 'pumpkin', 'afraid', 'evil', 'eerie', 'gruesome', 'spooky', 'broomstick', 'witch', 'ghost', 'nightmare', 'cauldron', 'frightening', 'scary', 'darkness', 'horrify', 'disguise', 'petrify', 'terrify', 'tombstone', 'cobweb', 'cemetery', 'ghoulish', 'dead', 'haunt', 'howl', 'candy', 'superstition', 'supernatural', 'cackle', 'chilling', 'lantern', 'monster', 'moonlight', 'scream', 'grave', 'vampire', 'costume', 'flashlight', 'frightful', 'wicked', 'zombie', 'night', 'ghastly', 'creepy', 'mysterious', 'levitation']

//It counts number of times user clicked on wrong button letter, and right button letter
let count = 0, countWin = 0

//Generates one random word from the array and turn it to upperCase.
let generatedWord = randomWords[Math.floor(Math.random() * randomWords.length)].toUpperCase()
console.log(generatedWord)

//Split the word into letters and store it in an array.
let seperatedWord = generatedWord.split('')
console.log(seperatedWord)

//---------------Calling the elements:-------------------------------------

//keybored --> calls the div where the buttons are placed
let keybored = document.querySelector('.keybored')
let gussedLetterDiv = document.querySelector('.guessed-word')
//The Scarecrow body parts Images:
let stickImg = document.getElementById('scarecrew-stick')
let bodyImg = document.getElementById('scarecrew-body')
let rightArmImg = document.getElementById('scarecrew-right-arm')
let leftArmImg = document.getElementById('scarecrew-left-arm')
let headImg = document.getElementById('scarecrew-head')
let hatImg = document.getElementById('scarecrew-hat')
let rightSkullImg = document.getElementById('scarecrew-skull-right')
let leftSkullImg = document.getElementById('scarecrew-skull-left')
// The model elements:
let modal = document.getElementById("myModal")
let span = document.getElementsByClassName("close")[0] //Get the <span> element that closes the modal
let restartBtn = document.getElementById("restart")
let modelMsg = document.getElementById("model-msg")


//------------------------------------------------------------------------------------------------------------------

// ------------------------------------------adding model -------------------------------------

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

//-----------------------------------------------------------------------------------------------------------------

let stopGame = false
//Functions:

    //Function that adds 'the random' generated word on the screen as lines(_ _ _ _)
    seperatedWord.forEach((letter, index) =>{
        
            //first generate a new div for each letter
            let newDivForLetter = document.createElement('div')
            newDivForLetter.id = `${index}`
            newDivForLetter.style.margin = '10px'
            newDivForLetter.style.height = '30px'
            newDivForLetter.style.width = '30px'
            newDivForLetter.style.borderBottom = '5px solid white'
            //Text styling:
            newDivForLetter.style.fontFamily = "'Press Start 2P', cursive"
            gussedLetterDiv.appendChild(newDivForLetter)
    })
    

    //returns the clicked letters!
    let includedLetters = []

    function compare(letter) {
        //The letter from the user input when they press a button:
        let alphabet = letter.target.innerHTML


        if(includedLetters.includes(alphabet)){
            return 
        }

        //Disables clicking on the keybored after game is ended!
        if(stopGame){
            return
        }

        //Comparing the user input letter and adding only the right letter on screen:
        seperatedWord.forEach((letterInWord, index) => {
            let wordDiv = document.getElementById(`${index}`)
           
            //checks if user guessed right letters
            if (letterInWord === alphabet){
                wordDiv.innerText = alphabet
                letter.target.style.color = 'green' //Change color to green when presssed on the right letter.
                countWin++
        
                includedLetters.push(alphabet)
                // console.log(includedLetters)
            }
            else if(!letterInWord.includes(alphabet)){
                includedLetters.push(alphabet)
                console.log(includedLetters)
            }
            
        })

        //The word to be  guessed:
        let guessedWord = seperatedWord.join('')

        //Checks if user entered a wrong letter
        if (!seperatedWord.includes(alphabet)){
            letter.target.style.color = 'red'
            count++
            console.log(count)

            //function to show sarecrow
            showScareCrew()
        }

        //player Loses!
        if(count === 8){
            //message game over!!!!!!!!!!!!
            // When the user loses, the model wil be opned
            stopGame = true
            modal.style.display = "block";
            modelMsg.innerText = `Game Over! The word is ${guessedWord}`
            console.log("You lost")
        }
        
        //Players Wins
        if(countWin === seperatedWord.length){
            stopGame = true
            modal.style.display = "block";
            modelMsg.innerText = `You Won! The word is ${guessedWord}`
            console.log("You won")
        }
        

    }

    //Function that shows Scarecrow body parts one by one:
    showScareCrew = () => {
        if (count === 1) {
            stickImg.style.display = 'block'
        }
        else if (count === 2){
            bodyImg.style.display = 'block'
        }
        else if (count === 3){
            rightArmImg.style.display = 'block'
        }
        else if (count === 4){
            leftArmImg.style.display = 'block'
        }
        else if (count === 5){
            headImg.style.display = 'block'
        }
        else if (count === 6){
            hatImg.style.display = 'block'
        }
        else if (count === 7){
            leftSkullImg.style.display = 'block'
        }
        else if (count === 8){
            rightSkullImg.style.display = 'block'
        }
    }


//add event listen to keybored to make the letters clickable.
keybored.addEventListener('click', compare)


//Things to do:
//compare user input with the exact letter position! --> DONE
//if true, change alphabet color to green , then disable the button --> DONE
//if false, change alphabet color to red, then show one scarecrow part, and disable button. -->  DONE :)

