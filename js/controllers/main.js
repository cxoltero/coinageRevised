'use strict'
angular.module('kenzanExc')
	.controller('MainCtrl', function($scope){
		// first initialize with a new object to store the broken values 
		$scope.newChange = {};
		$scope.coins = [];
		$scope.totalAmount =0;


		$scope.checkforLandP = function(){
			// check if the input contains £ and p at the same time
			if($scope.newChange.amount[0]=== '£' && $scope.newChange.amount[$scope.newChange.amount.length-1] === 'p'){
				// remove the p 
				$scope.newChange.amount =$scope.newChange.amount.slice(0, -1);
				// remove the £
				$scope.newChange.amount = $scope.newChange.amount.substr(1);

				// take the value  and multiply by 100
				$scope.newChange.amount =Math.round($scope.newChange.amount*100);
				$scope.totalAmount = $scope.newChange.amount;
				return;
			}
		}

		$scope.checkUndefined = function(){
			// check for an empty input 
			if($scope.newChange.amount === undefined){
				$scope.newChange.amount ="";
				window.alert('Please enter a valid number');
	    		return;
			}
		}

		$scope.checkforLorP = function(){
			// check if the input contains £ 
			if($scope.newChange.amount[0]=== '£' || $scope.newChange.amount[$scope.newChange.amount.length-1] === 'p'){
				// this will get rid of the £
				if($scope.newChange.amount[0]=== '£'){
					$scope.newChange.amount = $scope.newChange.amount.substr(1);
					$scope.newChange.amount =Math.round($scope.newChange.amount*100);
				}
				if($scope.newChange.amount[$scope.newChange.amount.length-1] === 'p'){
					// remove the p 
					$scope.newChange.amount =$scope.newChange.amount.slice(0, -1);
					// now we have to check for a period
					if($scope.newChange.amount.indexOf('.')!== -1){
						$scope.newChange.amount = Math.round($scope.newChange.amount*100);
					}
					$scope.totalAmount = $scope.newChange.amount;
					return $scope.newChange.amount;
				}
				$scope.totalAmount = $scope.newChange.amount;		
				
	    	}
	    	return $scope.totalAmount;
		}		

		$scope.checkforDot = function(){
			$scope.newChange.amount = $scope.newChange.amount.toString();
			if($scope.newChange.amount.indexOf('.')!== -1){
				$scope.newChange.amount = Math.round($scope.newChange.amount*100);
				$scope.totalAmount = $scope.newChange.amount;
			}
		}

		$scope.checkforNaN = function(){
			if(isNaN($scope.newChange.amount)){
	    		window.alert('Please enter a valid number');
	    		return;
			}
		}
		// make a function to check for input validation
		$scope.checkValues = function(){
			$scope.checkUndefined();
			$scope.checkforLandP();
			$scope.checkforLorP();
			$scope.checkforDot();
	    	$scope.checkforNaN();

			$scope.newChange.amount *= 1;
			$scope.totalAmount = $scope.newChange.amount;
		};

		// function with all the logic to give change
		$scope.makeChange = function(){

	    	while($scope.newChange.amount > 0){
	    		var TwoPound = Math.floor($scope.newChange.amount/200);
				$scope.newChange.amount %= 200;
				var pound = Math.floor($scope.newChange.amount/100);
				$scope.newChange.amount %= 100;
				var fiftyPence = Math.floor($scope.newChange.amount/50);
				$scope.newChange.amount %= 50;
				var twenty =  Math.floor($scope.newChange.amount/20);
				$scope.newChange.amount %= 20;
				var twoPence =  Math.floor($scope.newChange.amount/2);
				$scope.newChange.amount %= 2;
				var penny =  Math.floor($scope.newChange.amount/1);
				$scope.newChange.amount %= 1;
				
				if(TwoPound){$scope.newChange.TwoPound= TwoPound;}
		   	 	if(pound){$scope.newChange.pound= pound;}
		   	 	if(fiftyPence){$scope.newChange.fiftyPence= fiftyPence;}
		   	 	if(twenty){$scope.newChange.twenty= twenty;}
		   	 	if(twoPence){$scope.newChange.twoPence= twoPence;}
		   	 	if(penny){$scope.newChange.penny= penny;}
		   	}

		   	// at the end the value of amount will always be 0, so no need to print it
		   	delete $scope.newChange.amount;
		   	console.log($scope.newChange);
		   	$scope.coins.push($scope.newChange);
	    	$scope.newChange ={};
	    };

	   	$scope.clearValue = function(){
	    	$scope.coins = [];
	    }
	})
