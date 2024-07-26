function getNumber() {
  var starting_number = window.prompt("Enter an int above zero");
  starting_number = parseInt(starting_number);
}

function calculate(starting_number) {
  if (starting_number % 2 === 0) {
    starting_number /= 2;
  } else {
    starting_number *= 3;
    starting_number += 1;
  }
  document.getElementById("number").innerHTML = starting_number;
}
