let persons = [
  {
    name: "Ali",
    age: 18,
  },
  {
    name: "Bahar",
    age: 35,
  },
  {
    name: "Nazi",
    age: 26,
  },
  {
    name: "Hesam",
    age: 11,
  },
  {
    name: "Tabasoum",
    age: 5,
  },
  {
    name: "Hoseein",
    age: 65,
  },
];

let sortByAge = function (sortAge) {
  sortAge.sort((a, b) => {
    return a.age - b.age;
  });
  return sortAge;
};
console.log(sortByAge(persons));
///////////////////////////////////////////////
// function getPersonInformation() {
//   let name = prompt("Enter person's name:");
//   let age = +prompt("Enter person's age:");

//   if (isNaN(age)) {
//     alert("Age is invalid,try again");
//   }
//   return { name, age };
// }
// // console.log(getPersonInformation());
// getPersonInformation();
// //function get array from object
// function getArrayFromObject() {
//   let persons = [];
//   let continuePrompt = true;

//   while (continuePrompt) {
//     let person = getPersonInformation();

//     if (person) {
//       persons.push(person);
//       let continueInput = prompt("Do you want to continue? yes/no");
//       continuePrompt = continueInput === "yes";
//     } else {
//       continuePrompt = false;
//     }
//   }
//   return persons;
// }

// //sort age
// function sortAge(person) {
//   return person.sort((a, b) => a.age - b.age);
// }
// let makeArray = getArrayFromObject();
// let sortPersons = sortAge(makeArray);

// sortPersons.forEach((person) => {
//   console.log(`name: ${person.name}, age:${person.age}`);
// });
