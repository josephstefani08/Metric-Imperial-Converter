/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let re = /[a-z]/i
    let index = re.exec(input).index;
    
    // I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
    if(index === 0) {return 1;}
    
    // Hint: Split the input by looking for the index of the first character.
    let number = input.slice(0, index);
    
    // If the number is not a number try to evaluate it first. It might be a fraction. If error, just return.
    if(isNaN(number)) {
      try {
        number = eval(number).toFixed(5);
      }
      catch(err) {
        return 'invalid number';
      }
    }
    
    // If my number is invalid, returned with will 'invalid number'.
    isNaN(number) ? result = 'invalid number' : result = number;
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    let unit;
    let units = ['gal', 'l', 'lbs', 'kg', 'mi', 'km']
    let re = /[a-z]/i
    let unitIndex = re.exec(input).index;
    
    (unitIndex === 0) ? unit = input.toLowerCase() : unit = input.slice(unitIndex).toLowerCase();
    
    // If my unit of measurement is invalid, returned will be 'invalid unit'.
    let findUnit = units.find(u => u == unit);
    
    findUnit == undefined ? result = 'invalid unit' : result = unit;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    if(initUnit == 'gal') {
      result = 'l';
    } else if (initUnit == 'l') {
      result = 'gal';
    } else if (initUnit == 'lbs') {
      result = 'kg';
    } else if (initUnit == 'kg') {
      result = 'lbs';
    } else if (initUnit == 'mi') {
      result = 'km';
    } else if (initUnit == 'km') {
      result = 'mi';
    } else {
      return 'invalid unit';
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    let unitObjects = [
      {key: 'gal', value: 'gallons'}, 
      {key: 'l', value: 'liters'}, 
      {key: 'lbs', value: 'pounds'}, 
      {key: 'kg', value: 'kilograms'}, 
      {key: 'mi', value: 'miles'}, 
      {key: 'km', value: 'kilometers'}
    ];
    
    // Find the unit in the unitObjects array
    let spelledOutUnit = unitObjects.find(u => u.key == unit);
    spelledOutUnit == undefined ? result = 'invalid unit' : result = spelledOutUnit.value;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    let units = ['gal', 'l', 'lbs', 'kg', 'mi', 'km'];
    let findUnit = units.find(u => u == initUnit);
    
    if(findUnit == undefined) {
      return;
    }
    
    initUnit.toLowerCase();
    
    if(initUnit == 'gal') {
      result = initNum * galToL
    } else if (initUnit == 'l') {
      result = initNum / galToL;
    } else if (initUnit == 'lbs') {
      result = initNum * lbsToKg;
    } else if (initUnit == 'kg') {
      result = initNum / lbsToKg;
    } else if (initUnit == 'mi') {
      result = initNum * miToKm;
    } else if (initUnit == 'km') {
      result = initNum / miToKm;
    }
    
    return Math.round(result*100000)/100000;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    let spelledOutInitUnit = this.spellOutUnit(initUnit);
    let spelledOutReturnUnit = this.spellOutUnit(returnUnit);
        
    result = `${initNum} ${spelledOutInitUnit} converts to ${returnNum} ${spelledOutReturnUnit}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;