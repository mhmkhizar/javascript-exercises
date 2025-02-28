const reverseString = function (string) {
  const splitedString = string.split("");
  const reversedString = splitedString.reverse();
  const rejoinedString = reversedString.join("");
  return rejoinedString;
};

console.log(reverseString("Oye"));

// Do not edit below this line
module.exports = reverseString;
