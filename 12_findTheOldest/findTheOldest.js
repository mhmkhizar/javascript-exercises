const findTheOldest = function (array) {
  return array
    .map((person) => ({
      ...person,
      yearOfDeath: person.yearOfDeath || new Date().getFullYear(),
    }))
    .sort((a, b) => {
      const aAge = a.yearOfDeath - a.yearOfBirth;
      const bAge = b.yearOfDeath - b.yearOfBirth;
      return bAge - aAge;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
