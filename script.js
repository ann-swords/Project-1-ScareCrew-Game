//Initilizing variables:
let letter = ''
let randomWords = ['Halloween', 'October', 'pumpkin', 'afraid', 'evil', 'eerie', 'gruesome', 'spooky', 'broomstick', 'witch', 'ghost', 'nightmare', 'cauldron', 'frightening', 'scary', 'darkness', 'horrify', 'disguise', 'petrify', 'terrify', 'tombstone', 'cobweb', 'cemetery', 'ghoulish', 'dead', 'haunt', 'howl', 'candy', 'superstition', 'supernatural', 'cackle', 'chilling', 'lantern', 'monster', 'moonlight', 'scream', 'grave', 'vampire', 'costume', 'flashlight', 'frightful', 'wicked', 'zombie', 'night', 'ghastly', 'creepy', 'mysterious', 'levitation']

//calling the elements:
let keybored = document.querySelectorAll('.btn')
let gussedLetterDiv = document.querySelector('.guessed-word')


//A fucntion that generates a radnom word from the array and returns the word splitted into array of it's letters.
function randomWordGenerator(){
    let generatedWord = randomWords[Math.floor(Math.random() * randomWords.length)]
    console.log(generatedWord) 

    let seperatedWord = generatedWord.split('')
    console.log(seperatedWord)
    
}
randomWordGenerator()






//Function that prints out the letters from the keybored on screen.
keybored.forEach((element) =>{

    let print = () =>{
        letter = element.innerHTML
        let newDivLetter = document.createElement('div')
        newDivLetter.className = 'letter-div'
        newDivLetter.innerHTML = letter
        gussedLetterDiv.appendChild(newDivLetter)
        console.log(letter)
    }
  
    element.addEventListener('click', print)
}
)


