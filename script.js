const inputElement = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = () => {
  if(inputElement.value === ""){
    alert("Please input a value");
  }
  else{
    const strippedString = inputElement.value.replace(/[^0-9a-z]/gi, '');
    const reversedString = strippedString.split("").reverse().join("");
    if(reversedString.toUpperCase() === strippedString.toUpperCase()){
      result.innerText = inputElement.value + " is a palindrome";
    }
    else{
      result.innerText = inputElement.value + " is not a palindrome";
    }
  }
}
checkButton.addEventListener("click", checkPalindrome);
