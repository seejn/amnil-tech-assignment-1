const balanceState = {
    amount: 5000,
};

const emptyRenderWindowUI = () => {
    const renderWindow = document.getElementById("renderWindow");

    while (renderWindow.firstChild) {
        renderWindow.removeChild(renderWindow.firstChild);
    }
};

const renderInquiryUI = () => {
    const h3 = document.createElement("h3");
    h3.innerText = `Your current balance: Rs. ${balanceState.amount}`;

    emptyRenderWindowUI();
    document.getElementById("renderWindow").appendChild(h3);
};

const renderWithdrawUI = () => {
    const h3 = document.createElement("h3");
    h3.innerText = "Withdrawal";

    const withdrawInput = document.createElement("input");
    withdrawInput.id = "withdraw";
    withdrawInput.type = "number";
    withdrawInput.step = "0.01";
    withdrawInput.placeholder = "Enter amount to withdraw";
    
    const withdrawBtn = document.createElement("button");
    withdrawBtn.innerText = "withdraw"

    withdrawBtn.addEventListener("click", () => {
        handleWithdrawal(withdrawInput.value);
        withdrawInput.value = "";
    });

    emptyRenderWindowUI();
    document.getElementById("renderWindow").appendChild(h3);
    document.getElementById("renderWindow").appendChild(withdrawInput);
    document.getElementById("renderWindow").appendChild(withdrawBtn);
};

const handleWithdrawal = (withdrawnAmount) => {
    withdrawnAmount = Number(withdrawnAmount);
    if(withdrawnAmount === 0){
        alert("Amount is required");
        return;
    }
    else if(withdrawnAmount > balanceState.amount){
        alert("Not sufficient amount");
        return;
    }
    balanceState.amount -= withdrawnAmount;
    alert("Withdrawal successful")
}

const renderDepositUI = () => {
    const h3 = document.createElement("h3");
    h3.innerText = "Deposit";

    const depositInput = document.createElement("input");
    depositInput.id = "deposit";
    depositInput.type = "number";
    depositInput.step = "0.01";
    depositInput.placeholder = "Enter amount to deposit";
    
    const depositBtn = document.createElement("button");
    depositBtn.innerText = "deposit"

    depositBtn.addEventListener("click", () => {
        handleDeposit(depositInput.value);
        depositInput.value = "";
    });

    emptyRenderWindowUI();
    document.getElementById("renderWindow").appendChild(h3);
    document.getElementById("renderWindow").appendChild(depositInput);
    document.getElementById("renderWindow").appendChild(depositBtn);
};

const handleDeposit = (depositAmount) => {
    depositAmount = Number(depositAmount);
    if(depositAmount === 0){
        alert("Amount is required");
        return;
    }
    balanceState.amount += depositAmount;
    alert("Deposit successful")
}

const handleUserInput = (e) => {
    const actionId = e.target.getAttribute("--action-id");

    switch (actionId) {
        case "1":
            renderInquiryUI();
            break;
        case "2":
            renderWithdrawUI();
            break;
        case "3":
            renderDepositUI();
            break;
        default:
            alert("Invalid option");
    }
};

document.getElementById("inquiry").addEventListener("click", handleUserInput);
document.getElementById("withdraw").addEventListener("click", handleUserInput);
document.getElementById("deposit").addEventListener("click", handleUserInput);
