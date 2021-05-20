

const convertFahrToCelsius = (parameter) => {

  if (isNaN(parameter) && Array.isArray(parameter)) {

    return `${parameter} is not a valid number but a/an array.`;
  } else if (isNaN(parameter)) {
    
    return `${parameter} is not a valid number but a/an ${typeof(parameter)}.`;
  } else {
    
    let celcius;
    let fahrenheit = parseInt(parameter, 10);

    celcius = (fahrenheit - 32) * 5/9;
    return celcius.toFixed(4);
  }
} 

const checkYuGiOh = (parameter) => {
  if (isNaN(parameter)) {
    return `invalid parameter: "${parameter}"`
  } else {
    let numToCheck = parseInt(parameter, 10);
    let arrayToReturn = [];

    for (let i = 1; i <= numToCheck; i++) {

      if (i % 2 >= 1 && i % 3 >= 1 && i % 5 >= 1) {
        arrayToReturn.push(i);
        continue;
      } else if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
        arrayToReturn.push('yu-gi-oh')
        continue;
      } else if (i % 2 === 0 && i % 3 === 0) {
        arrayToReturn.push('yu-gi') 
        continue;
      } else if (i % 2 === 0 && i % 5 === 0) {
        arrayToReturn.push('yu-oh') 
        continue;
      }
       else if (i % 3 === 0 && i % 5 === 0) {
        arrayToReturn.push('gi-oh')
        continue; 
      } else if (i % 2 === 0) {
        arrayToReturn.push('yu');
        continue;
      } else if (i % 3 === 0) {
        arrayToReturn.push('gi');
        continue;
      } else if (i % 5 === 0) {
        arrayToReturn.push('oh');
        continue;
      }
    }

    return arrayToReturn;
  } 
} 