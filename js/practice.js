
console.log("Begin Script");


// this section establishes the users first name as the variable firstName

/*
var firstName = prompt("what is your name?");

alert("Hello " + firstName);
alert(firstName + " is a great programmer!");
*/






// if then statement practice

/*
console.log("Before");

var age = prompt("how old are you?")

if (age >= 18) {
	console.log("You are old enough to access this website");
}

else if (age < 18) {
	console.log("you are not old enough to access this website");
}

console.log("After");
*/




//while loop practice
/*
var counter = 10;

while (counter) {
	console.log("counter is active");
	counter = counter - 1;
}
*/





//for loop practice
/*
for(var counter = 10;counter;counter = counter - 1) {
	console.log(counter)
}
*/

//arrays
/*console.log(friends);
console.log(friends.length);

var friendNumber = friends.length

for (var i=0; i<friendNumber; i+=1) {
	console.log(friends[i] + " is my friend");
};
*/



//object practice
/*var me = {
	first_name: "Jason",
	last_name: "Hapner",
	age: 23
}

console.log(me)
*/



//function practice
/*

var sayHello = function () {
	console.log("Hello!");
	x+=1
}

var debug = function (message) {
	console.log("Debug "+message);
}
var x = 0	
sayHello();
debug("my name is jason");
sayHello();
debug(x)
sayHello()
debug("this program tracks the number of times you say hello")
debug("it has said hello: " + x + " times")
*/

var evenOdd = function (num, first, last) {
	if (num%2 === 0) {
		console.log(first + " " + last + " " + num + " is even")
	}
	else {
		console.log(first + " " + last + " " + num + " is odd")
	}
}

evenOdd(7, "Jason", "Hapner")

console.log("End Script");