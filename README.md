# Help the cashier

This is a demontration of DOM manipulation for beginners.

## Table of Contents
* [Selecting DOM elements](#Selecting-DOM-elements)
* [Using Prompts for user input](#Using-prompts-for-user-input)
* [DOM manipulation](#DOM-manipulation)
* [Looping through arrays](#Looping-through-arrays)
* [AOS](#AOS)
* [Instructions](#instructions)

## Selecting DOM elements
There are a couple of ways for selecting DOM elements in JavaScript. For this project, `document.querySelector()` which is used for a single element and `document.querySelectorAll()` which is used for a group of elements, are used for selecting DOM elements. Although, `document.getElementsByClassName()` and `document.getElementById()` can also be used.
Let's assume we have this:
```
<span class="small-text"></span>
 <h1 id="title"></h1>
 <p>
```
For selecting DOM elements with no classname and id
```
document.querySelector('p')
```
For selecting the element with the classname `small-text`
```
document.querySelector('.small-text')
```
For selecting the element with the id `title`
```
document.querySelector('#title')
```
## Using Prompts for user input
In order to get input from the user, we can create prompts and save them in a varible.
e.g
```
let username = prompt("Enter username: ")
console.log(username);
// returns
Whatever was entered by the user when prompted
```
For this project:
```
let amountDue = prompt('Amount due:');
let amountPaid = prompt('Amount being paid:');
```
Note: parseInt() or parseFloat are used for inputs when you are specifically dealing with numbers because whatever entered when prompted is saved to the variable as a string.
```
amountDue = parseInt(amountDue)
amountPaid = parseInt(amountPaid)
```
And finally, to calculate the change/balance
```
let changeAmount = amountPaid - amountDue;
// If the amount paid by the customer is less than the amount that they are suppose to pay, then give an alert
changeAmount <= 0 ? alert("Please make sure Amount paid is not less than Amount due"): 0;
```
## DOM manipulation
With DOM manupulation, we can change the style of an element, add elements, remove elements, add classnames and IDs to and element/s or remove them or replace them and lots more, all with JavaScript.
```
document.querySelector('div').innerText = "Hello world"; // For adding text
document.querySelector('div').style.display = "block"; // For changing style
document.querySelector('div').createElement('li'); // For adding HTML elements
document.querySelector('div').setAttribute('class', 'my-class'); // For adding attributes(classname, id etc)
// And for selecting where to add an element
let x = document.createElement('p')
document.querySelector('div').appendChild(x); 
```
## Looping through arrays
Two arrays were created. One for storing notes and the other for storing coins. We want to loop through them so that we can assign a note or a coin (if any) to an element as it's value and create only elements with a value. For this, we'll select an unordered list `ul` and within it, using the loop, we'll create `li` tags.
```
<ul></ul>
```
```
const list = document.querySelector('ul')
const notesArray = [1000, 500, 200, 100, 50];
const coinsArray = [20, 10, 5, 1];
```
`forEach()`loops have been used for looping through the items in the `notesArray` and `coinsArray`. This is like saying, for every note in my notesArray or coin in the coinsArray, meaning for each item in that array, do this...
Things to consider:
1)Confirm if change/balance is more than 0
2)Calculating how many of this note are in 'changeAmount' and if any, save the remainder in to the changeAmount variable
3)Assign the number of a note to an `li` element, created with `document.createElement('li')`, as its value
4)To assing it a classname, use `setAttribute('class', 'any-classname')` function
5)Add AOS to it(Optional). e.g `setAttribute('data-aos', 'fade-left')`
6)Only create elements when the number of a note, saved in the notes variable, is greater than zero to avoid creating blank elements
7)Whenever our changeAmount has a value less than 50, we'll instead loop through the coinsArray and do the same for each of it's items.

```

notesArray.forEach(note => {
	if(changeAmount > 0){
		let notes = Math.floor(changeAmount/note);
		changeAmount = changeAmount%note;
		let noteItem = document.createElement('li');
  		noteItem.setAttribute('class',"list-group-item");
  // 
  		noteItem.setAttribute('data-aos', "flip-right");
		noteItem.setAttribute('data-aos-duration', "1000");
		noteItem.setAttribute('data-aos-once', "true");
  		noteItem.innerHTML = "Ksh " + note + " notes: " + notes;
  		if(notes > 0){
			notesWrapper.appendChild(noteItem)
  		}
  		if(changeAmount < 50){
	// 
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
})
```
## AOS
AOS, which stands for animate on scroll,is an awesome feature created by Michalsnik(https://github.com/michalsnik). You can find AOS and how it works at https://github.com/michalsnik/aos. Check out what it can do at https://michalsnik.github.io/aos/

## Instructions

App link => https://art-abdulwadud.github.io/help-the-cashier/

Enter the amount the customer is suppose to pay. (Amount Due)

Enter the amount the customer actually pays. (Amount Paid)

The Balance is calculated and then broken down into notes and coins. The cashier is told exactly how many coins and notes are needed depending on the change/balance the customer is suppose to be given.
