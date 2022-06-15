//? Arrow Function
// let codeToTest = () => {
//   const arrowFunction = (parameters, go, here) => {
//     console.log(`${here} ${go} the ${parameters}`);
//     console.log(this);
//   };
//   arrowFunction("parameters", "go", "here");
//   //* Uncomment these lines to see the difference when using ```this``` in a regular syntax function
//   // function k() {
//   //   console.log(this); //* refers to the global object (window in the browser or global in Node)
//   // }
//   // k();
// };

//? let & const
// codeToTest = () => {
//   const constantName = "value"; //* const is short for constant
//   let letName = "value"; //* let is short for let...

//   let number = 1;
//   function doDaMaths() {
//     const constInDaFunction = 2;
//     console.log(constInDaFunction);
//     let number = 100;
//     number++;
//     console.log(number);
//     //   constantName = number;
//   }
//   doDaMaths();
//   // console.log(number);
//   // console.log(constantName);
//   // console.log(constInDaFunction);
// };

//? Functional Loops
// codeToTest = () => {
//   const array2Loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //! LEAVE THIS UNCOMMENTED!
//   const mappedArray = array2Loop.map((currentItem, index, array) => {
//     //   console.log(
//     //     `This is the currentItem: ${currentItem} This is the index: ${index} This is the array: [${array}]`
//     //   );
//     return currentItem * index;
//   });
//   // console.log(mappedArray);
//   // console.log(array2Loop); //* Original array is unchanged

//   const filteredArray = array2Loop.filter(
//     (currentItem, index, array) => currentItem % 2 === 0
//   );
//   // console.log(filteredArray);
//   // console.log(array2Loop); //* Original array is unchanged

//   const defaultValue = 0;
//   const reducedValue = array2Loop.reduce(
//     (accumulator, currentItem, index, array) => {
//       return accumulator + currentItem;
//     },
//     defaultValue
//   );
//   // console.log(reducedValue);
//   // console.log(array2Loop); //* Original array is unchanged

//   const forEachedArray = array2Loop.forEach(
//     (currentItem, index, array) => (array[index] = currentItem + index)
//   );
//   // console.log(forEachedArray); //* This is undefined because forEach doesn't return anything
//   // console.log(array2Loop); //* The original array has been modified
// };

//? Template Literals
// codeToTest = () => {
//   const userName = "eh4git";
//   const githubUrl = `https://github.com/${userName}/`;
//   console.log(githubUrl);

//   const printThis = `It is ${1 > 0} that coding is fun! It would be ${
//     1 === "1"
//   } if you said otherwise.`;
//   console.log(printThis);
// };

//? Ternary Operator
// codeToTest = () => {
//   const isItTrue = true;
//   const otherThing = "Hello";
//   isItTrue ? console.log("It is true!") : console.log("It is false!");
//   otherThing.length === 5
//     ? console.log(`${otherThing} is 5 characters long`)
//     : otherThing.length === 4
//     ? console.log(`${otherThing} is 4 characters long`)
//     : console.log(`${otherThing} is not 5 or 4 characters long`);
// };

//? Rest and Spread Operators
// codeToTest = () => {
//   const spreadUs = ["Chad", "Nick", "Erik", "Jeff"];
//   const spreadHere = [
//     "Matt",
//     "Vy",
//     "Liberato",
//     "Armando",
//     "Alec",
//     "Ghazaleh",
//     "Elsa",
//     "Everyone Else",
//     ...spreadUs,
//   ];
//   console.log(spreadHere);

//   function add(num1, num2, ...moreNums) {
//     let totalOfMoreNums = moreNums.reduce((a, b) => a + b, 0);
//     return num1 + num2 + totalOfMoreNums;
//   }
//   console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// };

//? Object Destructuring
// codeToTest = () => {
//   const pizza = {
//     company: "Round Table",
//     size: "XL",
//     toppings: ["pepperoni", "mushrooms", "black olives"],
//     droppedOnFloor: false,
//     numberOfSlices: 8,
//   };

//   const { company, size, toppings, droppedOnFloor, numberOfSlices } = pizza;
//   console.log(
//     `${size} ${company} pizza with ${toppings.join(
//       ", "
//     )}. It is ${droppedOnFloor} that it was dropped on the floor. It has ${numberOfSlices} slices.`
//   );
// };

//? Class Constructors
codeToTest = () => {
  class juniorDeveloper {
    constructor(name, age, experience, os, income) {
      this.name = name;
      this.age = age;
      this.experience = experience;
      this.os = os;
      this.income = income;
    }

    checkOS() {
      this.os === "Mac" ? console.log(`😭`) : console.log(`😎`);
    }
    code() {
      this.experience += 10;
      this.age++;
    }
  }
  const newbie = new juniorDeveloper("Wilson", 13, 0, "Mac", 50000);
  console.log("Original newbie: ", newbie);
  newbie.checkOS();
  newbie.code();
  console.log("Altered newbie: ", newbie);

  //   class seniorDeveloper extends juniorDeveloper {
  //     constructor(name, age, experience, os, income, achievements) {
  //       super(name, age, experience, os, income);
  //       this.achievements = achievements;
  //     }
  //     code() {
  //       this.experience += 20;
  //       this.age += 0.25;
  //     }

  //     brag() {
  //       console.log(
  //         `${this.name} has ${
  //           this.experience
  //         } years of experience. Some of my achievements are ${this.achievements.join(
  //           ", "
  //         )}`
  //       );
  //     }
  //   }
  //   const senior = new seniorDeveloper("Chad", 33, 300, "Windows", 150000, [
  //     "ten ecommerce sites",
  //     "50+ satisfied customers",
  //     "saved my company $10,000+ in annual AWS costs",
  //     "and more",
  //   ]);
  //   console.log("Original senior: ", senior);
  //   senior.checkOS();
  //   senior.code();
  //   senior.brag();
  //   console.log("Altered senior: ", senior);
};

codeToTest(); //! ---LEAVE THIS UNCOMMENTED!---
