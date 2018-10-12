function add(numbers){
  // is the string empty
  if(numbers == ""){  
    return 0;
  }

  //is there a delimiter replacement
  let regex = /[\n,]/;
  if(numbers.substr(0,2) == "//"){
    regex = numbers.substr(2, numbers.indexOf("\n")-2);
    numbers = numbers.split('\n')[1];
  }

  //splits numbers by delimiter
  let numberArray = numbers.split(regex);
  let negArray = [];

  //gather negative numbers if any
  //is a number bigger than 1000
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

  //is there a negative number
  if(negArray.length > 0){	
    throw new Error(`Negatives not allowed: ${negArray.join(',')}`);  			
  }

  //add numbers together
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
