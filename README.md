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
```
Note: parseInt() or parseFloat are used for inputs when you are specifically dealing with numbers because whatever entered when prompted is saved to the variable as a string.
```
## AOS
AOS, which stands for animate on scroll,is an awesome feature created by Michalsnik(https://github.com/michalsnik). You can find AOS and how it works at https://github.com/michalsnik/aos. Check out what it can do at https://michalsnik.github.io/aos/

## Instructions

App link => https://art-abdulwadud.github.io/help-the-cashier/

Enter the amount the customer is suppose to pay. (Amount Due)

Enter the amount the customer actually pays. (Amount Paid)

The Balance is calculated and then broken down into notes and coins. The cashier is told exactly how many coins and notes are needed depending on the change/balance the customer is suppose to be given.
