const credentials = {
    pin: 1234,
}
let form = document.getElementById("atm-form");
let errorCount = 0;

function isPinFourDigit(pin){
    let digitCount = 0;
    while(pin > 0){
        pin = Math.floor(pin/10);
        digitCount++;
    }
    return digitCount === 4;
}
 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let pin = Number(document.getElementById("pin").value);

    if(pin === 0){
        alert("pin is required");
        return;
    }
    else if(!isPinFourDigit(pin)){
        alert("Pin must be four digit")
        return;
    }
    else if(errorCount >= 3){
        alert("Please try again later");
        return
    }
    else if(pin !== credentials.pin){
        errorCount++;
        alert("pin is invalid");
        return
    }
    document.location = 'menu.html';
});