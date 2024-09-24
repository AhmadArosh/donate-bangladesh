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
    navbar.style.bottom = 'blur(5px)'; 
    } else {
    navbar.style.position = "";       
}
};
// Noakhali Donations//
document.getElementById("add-money-btn")
.addEventListener('click' , function(event){
event.preventDefault();
const addMoney = document.getElementById('donation-input').value ;
const addMoneyNumber = parseFloat(addMoney)
const balance = document.getElementById('noakhali-donation').innerText ;
const balanceNumber = parseFloat(balance)
const NewBalance = addMoneyNumber + balanceNumber ;
document.getElementById('noakhali-donation').innerText = NewBalance
console.log(NewBalance)
//  Overall Balance //

const overallBalance = document.getElementById('overall-balance').innerText ;
const overallBalanceNumber = parseFloat(overallBalance)
const NewoverallBalanceNumber = overallBalanceNumber - addMoneyNumber ;
document.getElementById('overall-balance').innerText = NewoverallBalanceNumber ;

// Debugs //
if (NewoverallBalanceNumber < 0 || isNaN(addMoneyNumber) || addMoneyNumber < 0){
alert('Insufficient Balance or Invalid Input')
event.preventDefault()
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
const NewBalance = addMoneyNumber + balanceNumber ;
document.getElementById('feni-donation').innerText = NewBalance
console.log(NewBalance)
//  Overall Balance //

const overallBalance = document.getElementById('overall-balance').innerText ;
const overallBalanceNumber = parseFloat(overallBalance)
const NewoverallBalanceNumber = overallBalanceNumber - addMoneyNumber ;
document.getElementById('overall-balance').innerText = NewoverallBalanceNumber ;

// Debugs //
if (NewoverallBalanceNumber < 0 || isNaN(addMoneyNumber) || addMoneyNumber < 0){
alert('Insufficient Balance or Invalid Input')
event.preventDefault()
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
const NewBalance = addMoneyNumber + balanceNumber ;
document.getElementById('quota-donation').innerText = NewBalance
console.log(NewBalance)
//  Overall Balance //

const overallBalance = document.getElementById('overall-balance').innerText ;
const overallBalanceNumber = parseFloat(overallBalance)
const NewoverallBalanceNumber = overallBalanceNumber - addMoneyNumber ;
document.getElementById('overall-balance').innerText = NewoverallBalanceNumber ;

// Debugs //
if (NewoverallBalanceNumber < 0 || isNaN(addMoneyNumber) || addMoneyNumber < 0){
alert('Insufficient Balance or Invalid Input')
event.preventDefault()
}
});
// Notification //
const donateButton = document.getElementById('add-money-btn');
const popup = document.getElementById('pop-up');

donateButton.addEventListener('click', () => {
  popup.style.display = 'block';
});
const closeButton = document.getElementById('close-btn');

closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});