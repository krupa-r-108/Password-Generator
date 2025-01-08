
// dom elements
const myOutput = document.getElementById("myOutput");
const icon = document.getElementById("icon");
const lengthEl = document.getElementById("length");
const upperCase = document.getElementById("upperCase"); 
const lowerCase = document.getElementById("lowerCase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generate = document.getElementById("generate");

let length;


generate.addEventListener('click', ()=>{
length = Number(lengthEl.value);
// console.log(length);
// console.log(typeof length);
generatePassword(length,upperCase,lowerCase,numbers,symbols);
})

function generatePassword(length,upperCase,lowerCase,numbers,symbols){
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "!@#$%^&*()-~?";

    let allowedChars = "";
    let password = "";

    allowedChars += upperCase.checked ? upperCaseChars : "";
    allowedChars += lowerCase.checked ? lowerCaseChars : "";
    allowedChars += numbers.checked ? numbersChars : "";
    allowedChars += symbols.checked ? symbolsChars : "";
    // console.log(allowedChars);

    if(length <= 0){
        myOutput.textContent = ("Password length must be above zero");
    }
    else if(allowedChars.length === 0){
        myOutput.textContent = ("Select at least one checkbox");
    }
    else {
        for(let i= 0; i< length; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        myOutput.textContent = password;
    }

}

icon.addEventListener('click', async () => {
    const passwordString = myOutput.innerText;

    if (!passwordString) {
        alert("Nothing to copy!");
        return;
    }

    try {
        // Use the Clipboard API to copy text to the clipboard
        await navigator.clipboard.writeText(passwordString);
        alert("Copied to clipboard!");
    } catch (err) {
        console.error("Failed to copy text: ", err);
        alert("Failed to copy!");
    }
});

