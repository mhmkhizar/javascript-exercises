const palindromes = function (string) {
  const cleaned = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const cleanedAndReversed = cleaned.split("").reverse().join("");
  return cleaned === cleanedAndReversed;
};

// Do not edit below this line
module.exports = palindromes;
