const credentials = {
    username: "seejn",
    password: "Seejn@1122"
}
let form = document.getElementById("login-form");
let errorCount = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    if(username === ""){
        alert("username is required");
        return;
    }else if(password===""){
        alert("password is required");
        return;
    }
    else if(errorCount >= 3){
        alert("Please try again later");
    }else if(username !== credentials.username || password !== credentials.password){
        errorCount++;
        alert("username or password is invalid");
    }else{
        alert("login successful");
    }

})