function add(number){
  if(number == "")  
    return 0;
	
	if(number.includes(","))
	{
		var numberArray = number.split(",");
		return parseInt(numberArray[0]) + parseInt(numberArray[1]);
	}
	else
		return parseInt(number);
}

/*
var total = 0;
    for(var i = 0; i < numberArray.length ; i++){
		      total += parseInt(numberArray[i]);
					    }
							    return total;
*/
module.exports = add;
