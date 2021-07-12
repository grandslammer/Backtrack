//Get the value from the string
function getValue() {
  document.getElementById("alert").classList.add("invisible")

  let userString = document.getElementById("userString").value

  let reversedString = reverseString(userString)

  displayString(reversedString)
}

//Reverse the string
function reverseString(userString) {
  let revString = []

  for (let i = userString.length - 1; i >= 0; i--) {
    revString += userString[i]
  }

  return revString
}

//Display the message with the reversed string
function displayString(revString) {
  document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`

  document.getElementById("alert").classList.remove("invisible")
}