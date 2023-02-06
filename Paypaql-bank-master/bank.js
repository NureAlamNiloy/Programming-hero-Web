
// login button
const loginBtn= document.getElementById("login");

loginBtn.addEventListener('click' ,function(){
const loginArea = document.getElementById("login-area");
loginArea.style.display="none";

const transactionArea = document.getElementById("transaction-area");
transactionArea.style.display="block";
})

 // Deposit button

    const depositBtn=document.getElementById("addDeposit");
    depositBtn.addEventListener("click", function(){
    const depositNumber = getInputNumber("depositAmount")
document.getElementById("depositAmount").value="";
    updateSpanText("currentDeposit",depositNumber)

     updateSpanText("currentBalance", depositNumber)

     

 })

 //withdrow button

 const withdrawBtn = document.getElementById("addWithdraw");
 withdrawBtn.addEventListener("click", function(){
     const withdrawNumber = getInputNumber("withdrawAmount");

     updateSpanText("currentWithdraw",withdrawNumber);

     updateSpanText("currentBalance", -1* withdrawNumber);

     document.getElementById("withdrawAmount").value="";


 })

 function getInputNumber(id) {
     const amount = document.getElementById(id).value;
     const amountNumber = parseFloat(amount);
     return withdrawNumber;
 }



 function updateSpanText(id, depositNumber){
    const current= document.getElementById(id).innerText;
     const currentNumber = parseFloat(current);
    const totalBalance = depositNumber + currentNumber;
    document.getElementById(id).innerText =totalBalance;

 }