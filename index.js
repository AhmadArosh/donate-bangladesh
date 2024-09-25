
//  navigating through pages //
const blogBtn = document.getElementById("blogBtn");
blogBtn.addEventListener("click", function() {
    window.location.href = "blog.html";
});
// sticky navbar //
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
window.onscroll = function() {
if (window.pageYOffset > sticky) {
    navbar.style.position = "fixed"; 
    navbar.style.top = "0";          
    navbar.style.width = "100%";     
    navbar.style.zIndex = "1000";
    } else {
      navbar.style.position = "";       
  }
};

// History Button //
const page1 = document.getElementById('main')
const button1 = document.getElementById('donate-btn');
const button2 = document.getElementById('history-btn');
button1.addEventListener('click', function(){
    button1.style.backgroundColor = 'green';
    button2.style.backgroundColor = 'white';
    page1.style.display = 'block';
    })
    button2.addEventListener('click', function(){
    button2.style.backgroundColor = 'green';
    button1.style.backgroundColor = 'white';
    page1.style.display = 'none';
    })
// Noakhali Donations//

document.getElementById("add-money-btn")
.addEventListener('click' , function(event){
event.preventDefault();
const addMoney = document.getElementById('donation-input').value ;
const addMoneyNumber = parseFloat(addMoney)
const balance = document.getElementById('noakhali-donation').innerText ;
const balanceNumber = parseFloat(balance)
const overallBalance = document.getElementById('overall-balance').innerText ;
const overallBalanceNumber = parseFloat(overallBalance)
if (addMoneyNumber > 0 && !isNaN(addMoneyNumber) && addMoneyNumber < overallBalanceNumber){ 
const NewBalance = addMoneyNumber + balanceNumber ;
document.getElementById('noakhali-donation').innerText = NewBalance
console.log(NewBalance)
const NewOverallBalanceNumber = overallBalanceNumber - addMoneyNumber ;
document.getElementById('overall-balance').innerText = NewOverallBalanceNumber ;
}
else{
  alert('Please enter a valid donation amount.');
}

// Transcation Amount //
if(addMoneyNumber > 0 && !isNaN(addMoneyNumber) && addMoneyNumber < overallBalanceNumber){
 const p = document.createElement('p');
 p.innerText = ` ${addMoneyNumber} Taka donated for Flood at Noakhali` ;
 console.log(p)
 document.getElementById('transaction-container').appendChild(p) ;
}
//  Transaction Time //
if(addMoneyNumber > 0 && !isNaN(addMoneyNumber) && addMoneyNumber < overallBalanceNumber){
 const t = document.createElement('t');
 const now = new Date();
  const formattedTime = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
  t.innerText = formattedTime;
  console.log(t)
  document.getElementById('transaction-container').appendChild(t) ;
}
});

// Feni Donations//
document.getElementById("add-money-btn-2")
.addEventListener('click' , function(event){
event.preventDefault();
const addMoney = document.getElementById('donation-input-2').value ;
const addMoneyNumber = parseFloat(addMoney)
const balance = document.getElementById('feni-donation').innerText ;
const balanceNumber = parseFloat(balance)
const overallBalance = document.getElementById('overall-balance').innerText ;
const overallBalanceNumber = parseFloat(overallBalance)
if (addMoneyNumber > 0 && !isNaN(addMoneyNumber) && addMoneyNumber < overallBalanceNumber){ 
const NewBalance = addMoneyNumber + balanceNumber ;
document.getElementById('feni-donation').innerText = NewBalance
console.log(NewBalance)
const NewOverallBalanceNumber = overallBalanceNumber - addMoneyNumber ;
document.getElementById('overall-balance').innerText = NewOverallBalanceNumber ;
}
else{
  alert('Please enter a valid donation amount.');
}

// Transcation Amount //
if(addMoneyNumber > 0 && !isNaN(addMoneyNumber) && addMoneyNumber < overallBalanceNumber){
 const p = document.createElement('p');
 p.innerText = ` ${addMoneyNumber} Taka donated for Flood at Feni` ;
 console.log(p)
 document.getElementById('transaction-container').appendChild(p) ;
}

 //  Transaction Time //
 if(addMoneyNumber > 0 && !isNaN(addMoneyNumber) && addMoneyNumber < overallBalanceNumber){
 const t = document.createElement('t');
 const now = new Date();
  const formattedTime = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
  t.innerText = formattedTime;
  console.log(t)
  document.getElementById('transaction-container').appendChild(t) ;
 }
});
// Quota Donations//
document.getElementById("add-money-btn-3")
.addEventListener('click' , function(event){
event.preventDefault();
const addMoney = document.getElementById('donation-input-3').value ;
const addMoneyNumber = parseFloat(addMoney)
const balance = document.getElementById('quota-donation').innerText ;
const balanceNumber = parseFloat(balance)
const overallBalance = document.getElementById('overall-balance').innerText ;
const overallBalanceNumber = parseFloat(overallBalance)
if (addMoneyNumber > 0 && !isNaN(addMoneyNumber) && addMoneyNumber < overallBalanceNumber){ 
const NewBalance = addMoneyNumber + balanceNumber ;
document.getElementById('quota-donation').innerText = NewBalance
console.log(NewBalance)
const NewOverallBalanceNumber = overallBalanceNumber - addMoneyNumber ;
document.getElementById('overall-balance').innerText = NewOverallBalanceNumber ;
}
else{
  alert('Please enter a valid donation amount.');
}



//  Overall Balance //

// Transcation Amount //
 if(addMoneyNumber > 0 && !isNaN(addMoneyNumber) && addMoneyNumber < overallBalanceNumber){
 const p = document.createElement('p');
 p.innerText = ` ${addMoneyNumber} Taka donated for Quota Aid` ;
 console.log(p)
 document.getElementById('transaction-container').appendChild(p)
 }

 //  Transaction Time //
 if(addMoneyNumber > 0 && !isNaN(addMoneyNumber) && addMoneyNumber < overallBalanceNumber){
 const t = document.createElement('t');
 const now = new Date();
  const formattedTime = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
  t.innerText = formattedTime;
  console.log(t)
  document.getElementById('transaction-container').appendChild(t) ;
 }
});

// Notification //
if(addMoneyNumber > 0 && !isNaN(addMoneyNumber) && addMoneyNumber < overallBalanceNumber){
const donateButton = document.getElementById('add-money-btn')
const popup = document.getElementById('pop-up');

donateButton.addEventListener('click', function() {
  popup.style.display = 'block';
});
const closeButton = document.getElementById('close-btn');

closeButton.addEventListener('click', function()  {
  popup.style.display = 'none';
});
}

// Notification 2 //
if(addMoneyNumber > 0 && !isNaN(addMoneyNumber) && addMoneyNumber < overallBalanceNumber){
const donateButton2 = document.getElementById('add-money-btn-2')
const popup2 = document.getElementById('pop-up-2');

donateButton2.addEventListener('click', function() {
  popup2.style.display = 'block';
});
const closeButton2 = document.getElementById('close-btn-2');

closeButton2.addEventListener('click', function() {
  popup2.style.display = 'none';
});
}

// Notification 3 //
if(addMoneyNumber > 0 && !isNaN(addMoneyNumber) && addMoneyNumber < overallBalanceNumber){
const donateButton3 = document.getElementById('add-money-btn-3')
const popup3 = document.getElementById('pop-up-3');

donateButton3.addEventListener('click', function()  {
  popup3.style.display = 'block';
});
const closeButton3 = document.getElementById('close-btn-3');

closeButton3.addEventListener('click', function()  {
  popup3.style.display = 'none';
});
}


