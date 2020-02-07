// DOM Elements
let amountDueDom = document.querySelector('.amount-due');
let amountPaidDom = document.querySelector('.amount-paid');
let changeAmountDom = document.querySelector('.change-amount');
let listWrapper = document.querySelector('.list-wrapper');
let changeBreakdown = document.querySelector('.change-breakdown');
let notesWrapper = document.querySelector('.notes-wrapper');
let coinsWrapper = document.querySelector('.coins-wrapper');
// Prompts
let amountDue = prompt('Amount due:');
let amountPaid = prompt('Amount being paid:');
// Calculating Change
amountDue = parseInt(amountDue)
amountPaid = parseInt(amountPaid)
let changeAmount;
amountPaid >= amountDue ? changeAmount = amountPaid - amountDue: changeAmount = amountPaid - amountDue;
changeAmount <= 0 ? alert("Please make sure Amount paid is not less than Amount due"): 0;
// DOM Elements manipulation
amountDueDom.innerText = "Amount Due: KSh. " + amountDue;
amountPaidDom.innerText = "Amount Paid: KSh. " + amountPaid;
changeAmountDom.innerText = "Change: KSh. " + changeAmount;
listWrapper.style.display = 'block';

let notesArray = [1000, 500, 200, 100, 50];
let coinsArray = [20, 10, 5, 1];
notesArray.forEach(note => {
	if(changeAmount > 0){
		let notes = Math.floor(changeAmount/note);
		changeAmount = changeAmount%note;
		let noteItem = document.createElement('li');
		noteItem.setAttribute('class',"list-group-item");
		notes > 0 ? noteItem.innerHTML = "Ksh " + note + " notes: " + notes: 0;	
		if(notes > 0){
			notesWrapper.appendChild(noteItem)
		}
		if(changeAmount < 50){
			coinsArray.forEach(coin => {
				let coins = Math.floor(changeAmount/coin);
				changeAmount = changeAmount%coin;
				let coinItem = document.createElement('li');
				coinItem.setAttribute('class',"list-group-item");
				coins > 0 ? coinItem.innerHTML = "Ksh " + coin + " coins: " + coins: 0;
				if(coins > 0){
					coinsWrapper.appendChild(coinItem)
				}
			});
		}
	}
})