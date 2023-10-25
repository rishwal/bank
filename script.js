const withdraw = parseFloat(document.getElementById("withdraw").value);

let balance = 0;

document.getElementById("deposit-btn").addEventListener( "click", function () {
  const deposit_amount = parseFloat(document.getElementById("deposit").value);
  if(deposit_amount>0)
  {
    balance += deposit_amount;
    document.getElementById("message").innerHTML=deposit_amount+" rs deposited sucessfully!";
    document.getElementById("message").style.visibility="visible";
    setTimeout(function(){
        document.getElementById("message").style.visibility="hidden";
    },2000);
    
  }
  else
  {
    alert("Deposit amount should be greater than 0 !");
  }
});



document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdraw_amount = parseFloat(document.getElementById("withdraw").value);
  if (withdraw_amount > balance) {
    alert("Insufficient balance !");
  }
  else if(withdraw_amount>0)
  {
    balance -= withdraw_amount;
    document.getElementById("message").innerHTML="Your Account debited with "+ withdraw_amount+" rs";
    document.getElementById("message").style.visibility="visible";
    setTimeout(function(){
        document.getElementById("message").style.visibility="hidden";
    },2000);

  }
  else
  {
    alert("Invalid amount!");
  }
});

document.getElementById("balance-btn").addEventListener("click", function () {
  document.getElementById("balance").innerHTML = balance;
});

document.getElementById("balance-btn").addEventListener("mousedown",function()
{
    document.getElementById("balance-message").style.visibility="visible";
});

document.getElementById("balance-btn").addEventListener("mouseup",function()
{
    document.getElementById("balance-message").style.visibility="hidden";
});