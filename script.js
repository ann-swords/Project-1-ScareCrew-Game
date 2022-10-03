//Initilizing variables:
let alphabet = ''
let randomWords = ['Halloween', 'October', 'pumpkin', 'afraid', 'evil', 'eerie', 'gruesome', 'spooky', 'broomstick', 'witch', 'ghost', 'nightmare', 'cauldron', 'frightening', 'scary', 'darkness', 'horrify', 'disguise', 'petrify', 'terrify', 'tombstone', 'cobweb', 'cemetery', 'ghoulish', 'dead', 'haunt', 'howl', 'candy', 'superstition', 'supernatural', 'cackle', 'chilling', 'lantern', 'monster', 'moonlight', 'scream', 'grave', 'vampire', 'costume', 'flashlight', 'frightful', 'wicked', 'zombie', 'night', 'ghastly', 'creepy', 'mysterious', 'levitation']

//calling the elements:
let keybored = document.querySelectorAll('.btn')
let gussedLetterDiv = document.querySelector('.guessed-word')


//A fucntion that generates a radnom word from the array and returns the word splitted into a new array of it's letters.
function randomWordGenerator(){
    let generatedWord = randomWords[Math.floor(Math.random() * randomWords.length)]
    console.log(generatedWord) 

    let seperatedWord = generatedWord.split('')
    console.log(seperatedWord)
    return seperatedWord 
}




//Function that adds the random generated word on the screen
function addRandomWordOnSCreen () {
    randomWordGenerator().forEach((letter) =>{
        //first generate a new div for each letter
        let newDivForLetter = document.createElement('div')
        newDivForLetter.className = 'letter-div'
        gussedLetterDiv.appendChild(newDivForLetter)
        
        //then generate a new paragraph to add inside the div
        let newLetterInsideDiv = document.createElement('p')
        newLetterInsideDiv.innerText = letter
        newDivForLetter.appendChild(newLetterInsideDiv)
        
        newLetterInsideDiv.style.display = "none"
    })
}
addRandomWordOnSCreen ()



//Function that prints out the letters from the keybored on screen.
keybored.forEach((element) =>{

    let print = () =>{
        alphabet = element.innerHTML
        console.log(alphabet)
    }
  
    element.addEventListener('click', print)
}
)


