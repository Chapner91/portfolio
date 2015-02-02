 for (var counter = 1;counter < 101;counter = counter + 1) {
 	if (counter % 15 === 0) {
		console.log("fizzbuzz");	
	}
	else if (counter % 3 === 0) {
		console.log("fizz");	
	}
	else if (counter%5 === 0){
		console.log("buzz");
	}

	else {
		console.log(counter);
	}
}