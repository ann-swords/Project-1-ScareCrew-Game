console.log('hi there')
// let guessedword = 

let keybored = document.querySelectorAll('.btn')



//Function that prints out the letters from the keybored on screen
keybored.forEach((element) =>{

    let print = () =>{
        console.log(element.innerHTML)
    }
  
    element.addEventListener('click', print)
}
)


