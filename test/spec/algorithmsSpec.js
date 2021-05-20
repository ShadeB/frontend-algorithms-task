
describe( 'Celcius converter', () => {
  let parameter;
  let expectedResult;
  
  it('should print a message if the parameter is a type of array', () => {
    parameter = [1,2,3,4];
    parameterType = 'array';
    expectedResult = `${parameter} is not a valid number but a/an ${parameterType}.`;
    
    expect(convertFahrToCelsius(parameter)).toBe(expectedResult);
  });

  it('should print a message indicating that the parameter is of type object and is not a valid number', () => {
    parameter = {"temp": 0};
    parameterType = 'object';
    expectedResult = `${parameter} is not a valid number but a/an ${parameterType}.`;

    expect(convertFahrToCelsius(parameter)).toBe(expectedResult);
  });

  it('should print a message indicating that the parameter is of type string and is not a valid number', () => {
    parameter = 'js264';
    parameterType = 'string';
    expectedResult = `${parameter} is not a valid number but a/an ${parameterType}.`;

    expect(convertFahrToCelsius(parameter)).toBe(expectedResult);
  });

  it('should return -17.7778 if string "0" is passed as the parameter', () => {
    parameter =  "0";
    expectedResult = -17.7778

    expect(convertFahrToCelsius(parameter)).toEqual(expectedResult.toFixed(4))
  });

  it('should return -17.7778 if number 0 is passed as the parameter', () => {
    parameter =  0;
    expectedResult = -17.7778

    expect(convertFahrToCelsius(parameter)).toEqual(expectedResult.toFixed(4))
  });

  it('should return 0.0000 if the number 32 is passed as the parameter', () => {
    parameter = 32;
    expectedResult = 0;

    expect(convertFahrToCelsius(parameter)).toEqual(expectedResult.toFixed(4));    
  });

  it('should return -28.8889 if the number -20 is passed as the parameter', () => {
    parameter = -20;
    expectedResult = -28.8889;

    expect(convertFahrToCelsius(parameter)).toEqual(expectedResult.toFixed(4));    
  });
});