function add(numbers){
  // is the string empty
	if(numbers == "")  
    return 0;
	let regex = /[\n,]/;
	if(numbers.substr(0,2) == "//"){
		regex = numbers.substr(2, numbers.indexOf("\n")-2);
		numbers = numbers.split('\n')[1];
	}
	let	numberArray = numbers.split(regex);
	let negArray = [];
	for(let i = 0; i < numberArray.length; i++){
		let number = parseInt(numberArray[i]);
		if(number < 0){
			negArray.push(number);
		}
		if(number > 1000){
			number = 0;
		}
		numberArray[i] = number;
	}
	if(negArray.length > 0){	
			throw new Error(`Negatives not allowed: ${negArray.join(',')}`);  			
	}
  console.log(numberArray,regex);
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
