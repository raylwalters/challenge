

function multiply(){
	for(var num = 1; num<=12; num++){
		
		for(var i = 1; i<=12; i++){
			var multiple = num * i;
			console.log(num + " * " + i + " = " + multiple);
		}
	}
}
multiply();


function prime(num){
	var primeNum = num;
	var factors = [];
	for(var i = 2; i<= num; i++){
		while(num%i === 0){
			factors.push(i);
			num /= i;
		}
	}
	console.log(primeNum + " -> " + factors);
	
}



