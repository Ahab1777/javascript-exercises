const findTheOldest = function(array) {
    return array.reduce((oldest, person) => {
        return ((oldest.yearOfDeath ?? new Date().getFullYear()) - oldest.yearOfBirth) > ((person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth) ? oldest : person
    })
};


/* findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]) */

// Do not edit below this line
module.exports = findTheOldest;
