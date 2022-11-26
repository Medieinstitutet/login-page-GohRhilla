let header = document.getElementById("header");
let footer = document.getElementById("footer");
let mainBox = document.getElementById("mainBox");

let userID = document.getElementById("usernameBox");
let userPassword = document.getElementById("passwordBox");
let placeholderBtn = document.getElementById("placeholderBtn");

let userData = [
    {userName: "janne", password: "test"},
    {userName: "siv", password: "saliv"},
    {userName: "konrad", password: "kola"},
    {userName: "maj", password: "morot"}
    ];

if (localStorage.getItem("userName")) { 
    alreadyLogIn();
    toggleBtn();
} else {    
    createLoginBtn();
    loggedout();
} 

function checkPassword() {  
    let person = userData.find(person => person.userName === userID.value);
    if (person && person.password === userPassword.value) {
        console.log("Stämmer");
        let loginUser = userID.value
        localStorage.setItem("userName", JSON.stringify(loginUser));
        toggleBtn();
        loggedIn();

    } else {
        alert("Wrong username or password");

    }
    userID.value="";
    userPassword.value="";
}

function toggleBtn () {
    placeholderBtn.innerHTML = "";      

    let logoutBtn = document.createElement("button");
    placeholderBtn.appendChild(logoutBtn);
    logoutBtn.innerText = "logout";
    userID.style.display = "none";
    userPassword.style.display ="none";

    logoutBtn.addEventListener("click", () => { 
        mainBox.innerHTML= "";
        localStorage.removeItem("userName");
        createLoginBtn();
        
    })     
    
}

function createLoginBtn () {    
    placeholderBtn.innerHTML ="";

    userID.style.display = "";
    userPassword.style.display = "";

    let loginBtn = document.createElement("button");
    placeholderBtn.appendChild(loginBtn);
    loginBtn.innerText = "Login";

    loginBtn.addEventListener("click", () => {
        checkPassword();        
    })
}

function loggedIn() {    
    let welcomeBox = document.createElement("span");
    mainBox.append(welcomeBox);
    welcomeBox.className = "box";
    welcomeBox.insertAdjacentHTML("afterbegin", "Välkommen " +userID.value);
}

function loggedout() {
    mainBox.innerHTML= "";
}
function alreadyLogIn() {
    let loggedInUser = JSON.parse(localStorage.getItem("userName"));
    let welcomeBox = document.createElement("span");
    mainBox.append(welcomeBox);
    welcomeBox.className = "box";
    welcomeBox.insertAdjacentHTML("afterbegin", "Välkommen " +loggedInUser);
}
