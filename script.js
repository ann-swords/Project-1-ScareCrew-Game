//*Initilizing variables:
let randomWords = ['Halloween', 'October', 'pumpkin', 'afraid', 'evil', 'eerie', 'gruesome', 'spooky', 'broomstick', 'witch', 'ghost', 'nightmare', 'cauldron', 'frightening', 'scary', 'darkness', 'horrify', 'disguise', 'petrify', 'terrify', 'tombstone', 'cobweb', 'cemetery', 'ghoulish', 'dead', 'haunt', 'howl', 'candy', 'superstition', 'supernatural', 'cackle', 'chilling', 'lantern', 'monster', 'moonlight', 'scream', 'grave', 'vampire', 'costume', 'flashlight', 'frightful', 'wicked', 'zombie', 'night', 'ghastly', 'creepy', 'mysterious', 'levitation']

// let alphabet = ''

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
let wordDivs = []


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

    //It counts number of times user clicked on wrong button
    let count = 0

    function compare(letter) {
    
        //The letter from the user input when they press a button:
        let alphabet = letter.target.innerHTML

        seperatedWord.forEach((letterInWord, index) => {
            let wordDiv = document.getElementById(`${index}`)
               
            if (letterInWord === alphabet){
                wordDiv.innerText = alphabet
                letter.target.style.color = 'green'
                
            }
            
            else{
                // letter.target.style.color = 'red'
                
            }
           
             

        })
    }
    

//add event listen to keybored to make the letters clickable.
keybored.addEventListener('click', compare)


//Things to do:
//compare user input with the exact letter position! --> stuck on that
//if true, change alphabet color to green , then disable the button
//if false, change alphabet color to red, then show one scarecrow part, and disable button.