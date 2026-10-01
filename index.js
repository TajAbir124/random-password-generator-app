const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passSpaceOne = document.getElementById("pass-space-1")
let passSpaceTwo = document.getElementById("pass-space-2")    
function generatePass(){

         
         let str =""
         for( let i = 0; i < 15;i++){
            let randomIdx = Math.floor(Math.random()*characters.length)
            str+=characters[randomIdx]
         }

         passSpaceOne.textContent = str
         str=""
         for( let i = 0; i < 15;i++){
            let randomIdx = Math.floor(Math.random()*characters.length)
            str+=characters[randomIdx]
         }
         passSpaceTwo.textContent =str          

}
let modeBtn = document.getElementById("mode-btn")
function changeTheme(){
    

    if( document.body.classList.toggle("light")){
        modeBtn.textContent = "🌙 Dark"
        localStorage.setItem('theme','light')
    }
    else {
        modeBtn.textContent = "☀️ Light"
        localStorage.setItem('theme','dark')
    }
}

if(localStorage.getItem('theme')==='light'){
    document.body.classList.add("light")
    modeBtn.textContent = "🌙 Dark"
}
else{
    modeBtn.textContent = "☀️ Light"
}
