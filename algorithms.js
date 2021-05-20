

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