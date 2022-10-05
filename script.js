//------------------Initilizing variables:---------------------------------------------------------
let randomWords = ['Halloween', 'October', 'pumpkin', 'afraid', 'evil', 'eerie', 'gruesome', 'spooky', 'broomstick', 'witch', 'ghost', 'nightmare', 'cauldron', 'frightening', 'scary', 'darkness', 'horrify', 'disguise', 'petrify', 'terrify', 'tombstone', 'cobweb', 'cemetery', 'ghoulish', 'dead', 'haunt', 'howl', 'candy', 'superstition', 'supernatural', 'cackle', 'chilling', 'lantern', 'monster', 'moonlight', 'scream', 'grave', 'vampire', 'costume', 'flashlight', 'frightful', 'wicked', 'zombie', 'night', 'ghastly', 'creepy', 'mysterious', 'levitation']

//It counts number of times user clicked on wrong button
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


//------------------------------------------------------------------------------------------------------------------

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

    //Initilize more variables:
    

    function compare(letter) {
    
        //The letter from the user input when they press a button:
        let alphabet = letter.target.innerHTML

        //Comparing the user input letter and adding only the right letter on screen:
        seperatedWord.forEach((letterInWord, index) => {
            let wordDiv = document.getElementById(`${index}`)
               
            //checks if user guessed right letters
            if (letterInWord === alphabet){
                wordDiv.innerText = alphabet
                letter.target.style.color = 'green' //Change color to green when presssed on the right letter.
                countWin++
            }
            
        })



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
           alert("YOU LOST LMAO!")
            //message game over!!!!!!!!!!!!
            console.log("game over")
        }
        
        //Players Wins
         if(countWin === seperatedWord.length){
            let guessedWord = seperatedWord.join('')
            alert(`YOU Won Congrats :) You guessed the word: ${guessedWord}`)
        }
        

    }

    //Show Scarecrow body parts one by one:
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
//if true, change alphabet color to green , then disable the button --> KINDA DONE 
//if false, change alphabet color to red, then show one scarecrow part, and disable button. --> NOT DONE :(