let userID = document.getElementById("usernameBox");
let userPassword = document.getElementById("passwordBox");
let loggedOut = document.getElementById("loggedOut");

let welcomeMsg = document.getElementById("welcome");
let notification = document.getElementById("status");
let header = document.getElementById("header");
let footer = document.getElementById("footer");

let loginBtn = document.getElementById("loginButton");
let logOutBtn = document.getElementById("logOutButton");

let userData = [
    {userName: "janne", password: "test"}
];

if (localStorage.getItem("userName")) {            
    loggedIn();
    // loggedInStyle();
} else {
    printNotLoggedIn();
} 

loginBtn.addEventListener("click", () => {
    let loginUser = userID.value;
    localStorage.setItem("userName", loginUser);
    let loginPassword = userPassword.value;
    localStorage.setItem("userPassword", loginPassword);
    
    checkPassword();
})

function checkPassword() {     
    console.log('klick på knapp ');      
    for (i = 0; i < userData.length; i++) {
        if (userID.value == userData[i].userName && userPassword.value == userData[i].password) {
        hej.innerHTML = "Du är inloggad som: " + userID.value;
        return true;
        }
    }
    hej.innerHTML = "Användaren finns inte";    
}

function loggedIn() {
    let userName = localStorage.getItem("userName");
    loggedOut.innerText = "\nDu är inloggad som: " +userName+"\n"+"\n";

    let logOutBtn = document.createElement('button');
    logOutBtn.innerText = "Log out";        
    logOutBtn.addEventListener("click", () => {
        localStorage.removeItem("userName", "userPassword");
        printNotLoggedIn
    })
    loggedOut.appendChild(logOutBtn);
    loggedInStyle();
}

function loggedInStyle() {
    userID.style.display="none";
    userPassword.style.display="none";
    loginBtn.style.display="none";
}

function printNotLoggedIn() {
    console.log("inte inloggad");
}

/*To do
* skapa en ett dolt meddalande som endast syns vid felaktigt lösenord
- Alert?
* Skapa funktioner: klick på login
* Skapa localStorage
* Om användaren redan är inloggad... if/function? användare inloggad... bla bla
* Från localStorage, om användaren är inloggad visa välkommen "namn" 
- annars login-ruta.
* Ändra så att lösenord inte syns
*/

// welcomeMsg.innerHTML=""; - tömmer innehållet
// annars kanske det bara går att skriva över...

//if logged in ändra färg på rutan?

