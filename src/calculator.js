function add(number){
  if(number == "")  
    return 0;
	
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
