let header = document.getElementById("header");
let footer = document.getElementById("footer");
let mainBox = document.getElementById("mainBox")

let userID = document.getElementById("usernameBox");
let userPassword = document.getElementById("passwordBox");
let placeholderBtn = document.getElementById("placeholderBtn");

let userData = [
    {userName: "janne", password: "test"}
];

if (localStorage.getItem("userName")) {
    loggedIn();
    toggleBtn();
} else {    
    createLoginBtn();
} 

function checkPassword() {     
    console.log('klick på knapp');      
    for (i = 0; i < userData.length; i++) {
        if (userID.value == userData[i].userName && userPassword.value == userData[i].password) {
            loggedIn();            

            let loginUser = userID.value
            localStorage.setItem("userName", loginUser);
            toggleBtn();        

            userID.value="";
            userPassword.value="";
             
        } else {
            alert("Wrong username or password");
            userID.value="";
            userPassword.value="";
        }
    }
}

function toggleBtn () {
    placeholderBtn.innerHTML = "";

    let logoutBtn = document.createElement("button");
    placeholderBtn.appendChild(logoutBtn);
    logoutBtn.innerText = "logout";

    logoutBtn.addEventListener("click", () => {
        alert("Du har loggats ut");
        localStorage.removeItem("userName");
        createLoginBtn();
    })      
}

function createLoginBtn () {
    placeholderBtn.innerHTML ="";

    let loginBtn = document.createElement("button");
    placeholderBtn.appendChild(loginBtn);
    loginBtn.innerText = "Login";

    loginBtn.addEventListener("click", () => {
        checkPassword();        
    })
}

function loggedIn() {    
    alert("inloggad");
    mainBox.style.visibility ="initial";
}

function loggedout() {
    mainBox.style.visibility = "hidden";
}
