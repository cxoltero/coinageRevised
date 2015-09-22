// revised functions
var totalAmount =0;

function checkNaN(n){
	return isNaN(n);
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

// this will check for an empty space, if there is one, it willl return undefined
// if there is no empty space it will return the actuall object we pass in
function checkUndefined(n){
		// check for an empty input 
	if(n === undefined){
		n ="";
		window.alert('Please enter a valid number');
		return;
	}else{
		return n;
	}
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
			alert('Please enter a valid number');
			return;
		}
	}
	return n;
};





// Functions to check








function checkforLorP(n){
	n= n.toString();
		// check if the input contains £ 
	if(n[0]=== '£' || n[n.length-1] === 'p'){
		// this will get rid of the £
		if(n[0]=== '£'){
			n = n.substr(1);
			n =Math.round(n*100);
		}
		if(n[n.length-1] === 'p'){
			// remove the p 
			n =n.slice(0, -1);
			// now we have to check for a period
			if(n.indexOf('.')!== -1){
				n = Math.round(n*100);
			}
			totalAmount = n;
			return n;
		}
		totalAmount = n;		
		
	}
	return totalAmount;
}

function checkValues(n){
	checkUndefined(n);
	checkforLandP(n);
	checkforLorP(n);
	checkforDot(n);
	checkNaN(n);
	return n *= 1;
};