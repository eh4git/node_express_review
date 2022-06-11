function doMath() {
  return "I'm doing math!";
}

function doSomething() {
  return "I'm doing something!";
}

function doWork(whatToDo) {
  switch (whatToDo) {
    case "math":
      return doMath();
    case "something":
      return doSomething();
    default:
      return "I don't know what to do!";
  }
}

// console.log(module.exports); //* exports is a object
module.exports = doWork;
