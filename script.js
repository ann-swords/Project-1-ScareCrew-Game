//------------------Initilizing variables:---------------------------------------------------------
let randomWords = ['Halloween', 'October', 'pumpkin', 'afraid', 'evil', 'eerie', 'gruesome', 'spooky', 'broomstick', 'witch', 'ghost', 'nightmare', 'frightening', 'scary', 'darkness', 'horrify', 'disguise', 'petrify', 'terrify', 'tombstone', 'cobweb', 'cemetery', 'ghoulish', 'dead', 'haunt', 'howl', 'candy', 'supernatural', 'cackle', 'chilling', 'lantern', 'monster', 'moonlight', 'scream', 'grave', 'vampire', 'costume', 'flashlight', 'frightful', 'wicked', 'zombie', 'night', 'skull', 'creepy', 'mysterious', 'levitation']

//It counts number of times user clicked on wrong button letter, and right button letter
let count = 0, countWin = 0, lives = 0

//Generates one random word from the array and turn it to upperCase.
let generatedWord = randomWords[Math.floor(Math.random() * randomWords.length)].toUpperCase()
console.log(generatedWord)

//Split the word into letters and store it in an array.
let seperatedWord = generatedWord.split('')
console.log(seperatedWord)

//---------------Calling the elements:-------------------------------------

//keybored --> calls the div where the buttons are placed
let keybored = document.querySelector('.keybored')
//btnLetters --> calls each button
let btnLetters = document.querySelectorAll('.btn')
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
let modalInst = document.getElementById("myModalInst")
let span = document.getElementsByClassName("close")[0] //Get the <span> element that closes the modal
let restartBtn = document.getElementById("restart")
let modelMsg = document.getElementById("model-msg")
//Music elements:
let soundEffects = new Audio('../music/sound-effect.mp3')
let backgroundMusic = new Audio('../music/haunted-house.mp3')
let loseMusic = new Audio('../music/boo-and-laugh.mp3')
soundEffects.volume = 0.12
backgroundMusic.volume = 0.1


//------------------------------------------------------------------------------------------------------------------

// ------------------------------------------adding model -------------------------------------
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modalInst.style.display = "none";
}

// // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalInst) {
    modalInst.style.display = "none";
  }
}
//-----------------------------------------------------------------------------------------------------------------
// //try:

// for (let i = 0; i < btnLetters.length; i++) {
//     btnLetters[i].addEventListener('click', compare)
    
// }


//-----------------------------------------------------
//Functions:


    function generateRandomWords(){
        // backgroundMusic.play()
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
        // console.log("hellooo")
        })
    }
   
    
    
    //Initilize more variables:
    //array for the clicked letters!
    let includedLetters = []
    //used for stoping the game after lose/win
    let stopGame = false

    function compare(letter) {

        //The letter from the user input when they press a button:
        let alphabet = letter.target.innerHTML


        //If one of the letters in the array is included, it disable it from clicking again.
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
        
                //array for the clicked letters!
                includedLetters.push(alphabet)
                // console.log(includedLetters)
            }
            else if(!letterInWord.includes(alphabet)){
                includedLetters.push(alphabet)
                // console.log(includedLetters)
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
            loseMusic.play()
            modal.style.display = "block";
            backgroundMusic.pause()
            modelMsg.innerText = `Game Over! You Lost! The word is \n ${guessedWord}`
            //styling
            modelMsg.style.color = 'rgba(133, 21, 21, 0.895)'
            modal.style.backgroundImage = "url('../Images/jumpScare.jpg')"
            console.log("You lost")
        }
        
        //Players Wins
        if(countWin === seperatedWord.length){
            stopGame = true
            backgroundMusic.pause()
            modal.style.display = "block";
            modelMsg.innerHTML = `Congrats! You Won! You guessed \n ${guessedWord}`
            // styling
            modelMsg.style.color = ' #6b5b95'
            modal.style.backgroundImage = "url('../Images/win-background.png')"
            modal.style.backgroundSize = 'cover'
            modal.style.backgroundRepeat = 'no-repeat'
            modal.style.backgroundAttachment =' fixed'
            modal.style.backgroundPosition = 'center'
            modal.style.backgroundColor = 'rgba(0,0,0,0.4)'
            console.log("You won")
        }
        

    }


    //Function that shows Scarecrow body parts one by one:
    //Note to self: If there's time turn it to switch!
    showScareCrew = () => {
        if (count === 1) {
            stickImg.style.display = 'block'
            soundEffects.play()
        }
        else if (count === 2){
            bodyImg.style.display = 'block'
            soundEffects.play()
        }
        else if (count === 3){
            rightArmImg.style.display = 'block'
            soundEffects.play()
        }
        else if (count === 4){
            leftArmImg.style.display = 'block'
            soundEffects.play()
        }
        else if (count === 5){
            headImg.style.display = 'block'
            soundEffects.play()
        }
        else if (count === 6){
            hatImg.style.display = 'block'
            soundEffects.play()
        }
        else if (count === 7){
            leftSkullImg.style.display = 'block'
            soundEffects.play()
        }
        else if (count === 8){
            rightSkullImg.style.display = 'block'
            soundEffects.play()
        }
    }

    
//-------------------------Restarting the game functions:-----------------------------------------------

    // restart all the variables, images, colors in the game, and adding new words!
    function restartVariables(){
        count = 0, countWin = 0, lives = 0
        includedLetters = []
        stopGame = false
    }

    function disableImages(){
        stickImg.style.display = 'none'
        bodyImg.style.display = 'none'
        rightArmImg.style.display = 'none'
        leftArmImg.style.display = 'none'
        headImg.style.display = 'none'
        hatImg.style.display = 'none'
        leftSkullImg.style.display = 'none'
        rightSkullImg.style.display = 'none'
    }


    function clearLetterDivs(){
        gussedLetterDiv.innerHTML = " "
    }

    function generateRandomWordAgain(){
        generatedWord = randomWords[Math.floor(Math.random() * randomWords.length)].toUpperCase()
        seperatedWord = generatedWord.split('')
        console.log(generatedWord)
    }
    

    function changeKeyboredColor(){
        btnLetters.forEach((letter)=>{
            letter.style.color = 'white'
        })
    }

    playAgain = () => {
        modal.style.display = "none";
        backgroundMusic.play()
        loseMusic.pause()
        restartVariables()
        disableImages()
        clearLetterDivs()
        generateRandomWordAgain()
        generateRandomWords()
        changeKeyboredColor() 
        // console.log("is it working?")
    }


    //add event listen to keybored to make the letters clickable.
    keybored.addEventListener('click', compare)

// -----------------------------------------------------------------------------------------------
    //Everytime the page loads:
    document.addEventListener('DOMContentLoaded', () =>{
        backgroundMusic.play()
        generateRandomWords()
        modalInst.style.display = 'block'
        restartBtn.addEventListener('click', playAgain)

    })