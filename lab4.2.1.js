

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


function calculateTotalCost(price, quantity, taxRate) {
  // Check if all inputs are valid numbers
  if (typeof price !== 'number' || typeof quantity !== 'number' || typeof taxRate !== 'number') {
    return "Invalid input.";
  }

  // Calculate total cost
  var totalCost = (price * quantity) * (1 + taxRate);
  return totalCost;
}

// Example usage
console.log(calculateTotalCost(10, 2, 0.1));  // Output: 22
console.log(calculateTotalCost("10", 2, 0.1)); // Output: "Invalid input."
