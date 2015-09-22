function sum(a,b){
	return a + b;
};
function checkforLandP(n){
	if(n[0]=== '£' && n[n.length-1] === 'p'){
		// remove the p 
		n =n.slice(0, -1);
		// remove the £
		n = n.substr(1);
		// take the value  and multiply by 100
		n =Math.round(n*100);
		
	}
	return n;
};
function checkforDot(num){
	num = num.toString();
	if(num.indexOf('.')!== -1){
		num = Math.round(num*100);
	}
	return num;
}

function checkforNaN(n){
	if(isNaN(n)){
		window.alert('Please enter a valid number');
		return;
	}
	return (typeof n);
}