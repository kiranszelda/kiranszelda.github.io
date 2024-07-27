// ChatGPT wrote the following :

function getNumber() {
  var starting_number = window.prompt("Enter an integer above zero");

  // Convert to integer
  starting_number = parseInt(starting_number, 10);

  // Check if the result is a valid number and greater than zero
  if (isNaN(starting_number) || starting_number <= 0) {
    console.log("The input is not a valid integer above zero.");
  } else {
    console.log("The valid number entered is:", starting_number);
    // You can perform additional actions with starting_number here
  }
}

// End of ChatGPT code

function calculate(starting_number) {
  if (starting_number % 2 === 0) {
    var new_number = starting_number / 2;
  } else {
    var new_number = starting_number * 3;
    var new_number = starting_number + 1;
  }

  starting_number = new_number;

  document.getElementById("number").innerHTML = new_number;
}
