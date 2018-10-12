function add(number){
  // is the string empty
	if(number == "")  
    return 0;

	let	numberArray = number.split(/[\n,]/);
	let negArray = [];
	for(let i = 0; i < numberArray.length; i++){
		let n = parseInt(numberArray[i]);
		if(n < 0){
			negArray.push(n);
		}
		numberArray[i] = n;
	}
	if(negArray.length > 0){	
			throw new Error(`Negatives not allowed: ${negArray.join(',')}`);  			
	}
  return sum(numberArray);
}

function sum(numberArray){
	var total = 0;
  for(var i = 0; i < numberArray.length ; i++){
		      total += parseInt(numberArray[i]);
	}
	return total;
}

module.exports = add;
