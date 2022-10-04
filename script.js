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


//------------------------------------------------------------------------


//Functions:
let wordDivs = []
    //Function that adds 'the random' generated word on the screen
    seperatedWord.forEach((letter) =>{
        let newDivForLetter = document.createElement('div')
        //first generate a new div for each letter
        newDivForLetter.className = `${letter}`
        newDivForLetter.style.margin = '10px'
        newDivForLetter.style.height = '30px'
        newDivForLetter.style.width = '30px'
        newDivForLetter.style.borderBottom = '5px solid white'
        gussedLetterDiv.appendChild(newDivForLetter)
        wordDivs.push(newDivForLetter.className)

        console.log(wordDivs)
        //  //then generate a new paragraph to add inside the div
        //  let newLetterInsideDiv = document.createElement('p')
        //  newLetterInsideDiv.className = 'actual-letter'
        //  newLetterInsideDiv.innerText = letter
        //  newDivForLetter.appendChild(newLetterInsideDiv)
         
        //  newLetterInsideDiv.style.display = "none"
    })


    function compare(letter) {
    
        //The letter from the user input:
        alphabet = letter.target.innerText

        seperatedWord.forEach((letterInWord) => {
            
            //Compare the letter from user input to the guessd word.
            if (alphabet === letterInWord) {
                console.log("comparing works! letter " + alphabet + " included")
                
            }
        })
    }


//add event listen to keybored to make the letters clickable.
keybored.addEventListener('click', compare)


//Things to do:
//compare user input with the exact letter position! --> stuck on that
//if true, change alphabet color to green , then disable the button
//if false, change alphabet color to red, then show one scarecrow part, and disable button.