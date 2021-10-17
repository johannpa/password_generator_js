const numberOfCharacter = document.getElementById("number");
const holder = document.getElementById("password");
const button = document.getElementById("button");

function generatePassword(){
    const characters = "1234567890!@#$%^&*()_+abcdefghijklmnopqrstuvwxyz";
    const passwordLength = numberOfCharacter.value;
    let password = "";

    for(let i = 0; i < passwordLength; i++){
        let randomPassword = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomPassword, randomPassword + 1);
    }

    holder.value = password;
}

button.addEventListener("click", generatePassword);