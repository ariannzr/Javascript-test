function test() {
  console.log("hello javascript");
}
test();

function multiplyInputs() {
  let num1 = prompt("Please enter the first number:");

  let num2 = prompt("Please enter the second number:");
  num1 = Number(num1);
  num2 = Number(num2);

  let result = num1 / num2;

  return result;
}

let multiplicationResult = multiplyInputs();

console.log("Result", multiplicationResult);

function changeText() {
  const changeContent = document.getElementById("test");

  changeContent.textContent = "This is new trynig to chang a text content";
}
