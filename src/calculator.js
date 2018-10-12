function add(number){
  if(number == "")  
    return 0;

	if(parseInt(number) < 0)
	{
		throw new Error(`Negatives not allowed: ${number}`);
		return parseInt(number);  			
	}

	
	if(number.split(/[\n,]/))
	{
		var numberArray = number.split(/[\n,]/);
		return sum(numberArray);
	}
	else
		return parseInt(number);
}

function sum(numberArray){
	var total = 0;
  for(var i = 0; i < numberArray.length ; i++){
		      total += parseInt(numberArray[i]);
	}
	return total;
}

module.exports = add;
