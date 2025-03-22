const fibonacci = function (index) {
  if (index < 0) return "OOPS";

  const sequence = [0, 1];
  for (let i = 2; i <= parseFloat(index); i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence[index];
};

// Do not edit below this line
module.exports = fibonacci;
