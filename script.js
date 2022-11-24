let header = document.getElementById("header");
let footer = document.getElementById("footer");
let mainBox = document.getElementById("mainBox");

let userID = document.getElementById("usernameBox");
let userPassword = document.getElementById("passwordBox");
let placeholderBtn = document.getElementById("placeholderBtn");

let userData = [
    {userName: "janne", password: "test"},
    {userName: "tusse", password: "tass"},
    {userName: "konrad", password: "kola"},
    ];

if (localStorage.getItem("userName")) {
    loggedIn();
    toggleBtn();
} else {    
    createLoginBtn();
} 

function checkPassword() {  
//     let tempName = userID.value;
//     let tempPass = userPassword.value;

//     let findName = userData.map((temp, index) => {
//         if (tempName === userData.userName) {
//             console.log(index);            

//         } else {
//             console.log("neeeej");
//         }

//     })

    // console.log(tempName);
    // let theName = userData.find(person => person.userName === "tempName");
    // console.log(tempName);
    //     //  if (userData.userName === userID.value && userData.password === userPassword.value) {
    // console.log(theName);


    for (i = 0; i < userData.length; i++) {
        if (userID.value === userData[i].userName && userPassword.value === userData[i].password) {
            let loginUser = userID.value
            localStorage.setItem("userName", loginUser);
            toggleBtn();
            loggedIn();
            break;                   
             
        } else {
            alert("Wrong username or password");
            
        }
        
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
        alert("Du har loggats ut");
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
    alert("inloggad");
    
}

function loggedout() {

}
