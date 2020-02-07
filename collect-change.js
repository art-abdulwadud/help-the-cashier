// DOM Elements
let amountDueDom = document.querySelector('.amount-due');
let amountPaidDom = document.querySelector('.amount-paid');
let changeAmountDom = document.querySelector('.change-amount');
let listWrapper = document.querySelector('.list-wrapper');
// Prompts
let amountDue = prompt('Amount due:');
let amountPaid = prompt('Amount being paid:');
// Calculating Change
amountDue = parseInt(amountDue)
amountPaid = parseInt(amountPaid)
let changeAmount;
amountPaid >= amountDue ? changeAmount = amountPaid - amountDue: changeAmount = amountDue - amountPaid;
// DOM Elements manipulation
amountDueDom.innerText = "Amount Due: KSh. " + amountDue;
amountPaidDom.innerText = "Amount Paid: KSh. " + amountPaid;
changeAmountDom.innerText = "Change: KSh. " + changeAmount;
listWrapper.style.display = 'block';
