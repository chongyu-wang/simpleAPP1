
function getSignupInfo() {
//    let userName = document.querySelector("#username");
//    let passWord = document.querySelector("#password");
//    let email = document.querySelector("#email");

    //redirect();

    saveSignupInfo();

}


function saveSignupInfo() {
    let movies = [];

    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById()
    })
}


function getLogin() {
    let userName = document.querySelector("#login_username").value;
    let passWord = document.querySelector("#login_password").value;

    loginStatus(userName, passWord);

}

function loginStatus(userName, passWord) {
    if (userName == "admin" && passWord == "password") {
        loginSuccess();
    }
    else {
        alert("Failed Login");
    }

}


function loginSuccess() {
    alert("Successful Login");
}


function redirect() {
    alert("Complete");
}

