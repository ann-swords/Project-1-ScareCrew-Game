//*Initilizing variables:
let alphabet = ''
let randomWords = ['Halloween', 'October', 'pumpkin', 'afraid', 'evil', 'eerie', 'gruesome', 'spooky', 'broomstick', 'witch', 'ghost', 'nightmare', 'cauldron', 'frightening', 'scary', 'darkness', 'horrify', 'disguise', 'petrify', 'terrify', 'tombstone', 'cobweb', 'cemetery', 'ghoulish', 'dead', 'haunt', 'howl', 'candy', 'superstition', 'supernatural', 'cackle', 'chilling', 'lantern', 'monster', 'moonlight', 'scream', 'grave', 'vampire', 'costume', 'flashlight', 'frightful', 'wicked', 'zombie', 'night', 'ghastly', 'creepy', 'mysterious', 'levitation']

//Generates one random word from the array and turn it to upperCase.
let generatedWord = randomWords[Math.floor(Math.random() * randomWords.length)].toUpperCase()
console.log(generatedWord) 

//Split the word into letters and store it in an array.
let seperatedWord = generatedWord.split('')
console.log(seperatedWord) 

//*Calling the elements:
//keybored --> calls the div where the buttons are placed
let keybored = document.querySelector('.keybored')
let gussedLetterDiv = document.querySelector('.guessed-word')


// ------------------------------------------------------------------------
//Functions:

//Function that adds the random generated word on the screen
// randomWordGenerator().forEach((letter) =>{

//         let newDivForLetter = document.createElement('div')
//         //first generate a new div for each letter
//         newDivForLetter.className = 'letter-div'
//         gussedLetterDiv.appendChild(newDivForLetter)
        
//         //then generate a new paragraph to add inside the div
//         let newLetterInsideDiv = document.createElement('p')
//         newLetterInsideDiv.className = 'actual-letter'
//         newLetterInsideDiv.innerText = letter
//         newDivForLetter.appendChild(newLetterInsideDiv)
        
//         newLetterInsideDiv.style.display = "none"

//         //if statement to compare user input to each letter
//         //if true: 1- newLetterInsideDiv.style.display = ""
//         //2- change the color of button to green
//         //if false:
//         //turn text color red
//         //remove one part from the scarecrow
//     })


    function compare(letter){
        alphabet = letter.target.innerText

        seperatedWord.forEach((letterInWord)=>{

            if(alphabet === letterInWord){
                console.log("comparing works!")
            }

        })

    }

   //Make the keybored clickable
   keybored.addEventListener('click', compare)
        

