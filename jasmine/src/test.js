// revised functions
var totalAmount =0;

function checkforNaN(n){
	return isNaN(n);
}


// this will check for an empty space, if there is one, it willl return undefined
// if there is no empty space it will return the actuall object we pass in
function checkUndefined(n){
		// check for an empty input 
	if(n === undefined){
		n ="";
		window.alert('Please enter a valid number');
		throw ('Please enter a valid number');
		// return;
	}
	return n;
}

// takes a number, turns it into a string, if there is a dot it will multiply by 100 and round the result, 
// will return a number
function checkforDot(num){
	num = num.toString();
	if(num.indexOf('.')!== -1){
		num = Math.round(num*100);
	}
	num *=1;
	return num;
}
// this function will take the input and check if there is a £ at the begginning and a p at the end
// if that condition is not met, will return the input
// if the condition is met, it will remove the letters, then will check for the remaining string
// if it doesn't contain numbers it will give an error. 
// if it contains numbers it will multiply it by 100 and return the result
function checkforLandP(n){
	if(n[0]=== '£' && n[n.length-1] === 'p'){
		// remove the p 
		n =n.slice(0, -1);
		// remove the £
		n = n.substr(1);

		// take the value  and multiply by 100
		n =Math.round(n*100);
		if(isNaN(n)){
			window.alert('Please enter a valid number');
			throw ('Please enter a valid number');
		}
	}
	return n;
};

// this function will check if either £ or p are present in an input
// it will take a string, and check the begginning and the end of it
// if it has either one, it will return a number, 
// if it doesnt, it will return the same input
function checkforLorP(n){
	if(n[0]=== '£' || n[n.length-1] === 'p'){
		// this will get rid of the £
		if(n[0]=== '£'){
			n = n.substr(1);
			n =Math.round(n*100);
			if(isNaN(n)){
				window.alert('Please enter a valid number');
				throw ('Please enter a valid number');
			}
			return n;
		}
		if(n[n.length-1] === 'p'){
			// remove the p 
			n =n.slice(0, -1);
			// now we have to check for a period
			if(n.indexOf('.')!== -1){
				n = Math.round(n*100);
			}
			if(isNaN(n)){
				window.alert('Please enter a valid number');
				throw ('Please enter a valid number');
			}
			return n;
		}
	}else{
		return n;
	}
}


// function to make change
function makeChange(){
var newChange = {};
var coins = [];

	while(n > 0){
		var TwoPound = Math.floor(n/200);
		n %= 200;
		var pound = Math.floor(n/100);
		n %= 100;
		var fiftyPence = Math.floor(n/50);
		n %= 50;
		var twenty =  Math.floor(n/20);
		n %= 20;
		var twoPence =  Math.floor(n/2);
		n %= 2;
		var penny =  Math.floor(n/1);
		n %= 1;
		
		if(TwoPound){newChange.TwoPound= TwoPound;}
   	 	if(pound){newChange.pound= pound;}
   	 	if(fiftyPence){newChange.fiftyPence= fiftyPence;}
   	 	if(twenty){newChange.twenty= twenty;}
   	 	if(twoPence){newChange.twoPence= twoPence;}
   	 	if(penny){newChange.penny= penny;}
   	}

   	// at the end the value of amount will always be 0, so no need to print it
   	delete n;
   	console.log(newChange);
   	coins.push(newChange);
	newChange ={};
};

