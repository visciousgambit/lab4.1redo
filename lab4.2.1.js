

function formatFullName(firstName, lastName) {
  if (!firstName | !lastName | typeof firstName !== 'string' | typeof lastName !== 'string') {
    return "Invalid name ";
  }

  const capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  const formattedFirstName = capitalize(firstName);
  const formattedLastName = capitalize(lastName);

  return `${formattedLastName}, ${formattedFirstName}`;
}

console.log(formatFullName("john", "doe")); 
console.log(formatFullName("", "smith"));  


function calculateTotalCost(price, quantity, taxRate, discount) {

  if (typeof price !== 'number' || typeof quantity !== 'number' || typeof taxRate !== 'number' || typeof discount !== 'number') {
    return "Invalid input.";
  }


  var totalCost = (price * quantity) * (1 + taxRate);
  return totalCost;
}


console.log(calculateTotalCost(10, 2, 0.1,.1));  



function checkEligibility(age, isEmployed) {
    if (age < 18 && isEmployed) {
        return "You are elgible for the program.";
    }   else if (age < 18 && !isEmployed) {
        return "You are conditionally eligible for the program.";
    }   else {
        return "You are not eligible for the program."
    }
}

age = 14

console.log(checkEligibility(true));











function checkEligibility(age, isEmployed) {
    if (age < 18 && isEmployed) {
        return "You are elgible for the program.";
    }   else if (age < 18 && !isEmployed) {
        return "You are conditionally eligible for the program.";
    }   else {
        return "You are not eligible for the program."
    }
}

age = 29

console.log(checkEligibility(true));



