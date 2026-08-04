function calc(){
	let op1 = document.getElementById("op1").value;
	let op2 = document.getElementById("op2").value  
	let op = document.getElementById("operator").value  
	op1 = Number(op1)
	op2 = Number(op2)
	let result = 0

	if(op == 'plus'){
		result = op1+op2 
	}
	else if (op == "minus"){
		result = op1-op2 
	}
	else if (op == "multiply"){
		result = op1*op2 
	}
	else{
		result = op1/op2 
	}

	document.getElementById("result").innerText = result
}
