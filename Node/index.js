//? Process.argv
// console.log(process.argv);
// const [nodeProcessPath, pathToFile, ...args] = process.argv;
// console.log(args);

//? Modules
// const myModule = require("./module");
// console.log(myModule("math"));

// const threeModulesOneImport = require("./multiModule");
// console.log(threeModulesOneImport);
// const { url, codingIsFun, exportMe } = threeModulesOneImport;
// console.log(url);

//? Create a Package.json
//* npm init || npm init -y

//? Import third-party modules/libraries
//* npm install {nameOfModule} || npm i {nameOfModule}
//* npm install -g {nameOfModule} || npm i -g {nameOfModule} // globally
//* npm install --save-dev {nameOfModule} || npm i --save-dev {nameOfModule} // devDependencies

//* npm i everyday-fun
// const fun = require("everyday-fun");
// console.log(fun);
// console.log(fun.getRandomJoke());
// console.log(fun.getRandomQuote());
// console.log(fun.getRandomRiddle());

//? Read and Write Files
const fs = require("fs");
//* fs.readFile(path, [options], callback)
//* fs.readFileSync(path, [options])
//* fs.writeFile(path, data, [options], callback)
//* fs.writeFileSync(path, data, [options])

// const toCover = fs.readFile("../toCover.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// console.log(toCover);

// const toCover = fs.readFileSync("../toCover.txt", "utf8");
// console.log(toCover);

// fs.writeFile("./toCoverCopy.txt", toCover, err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File written successfully");
//   }
// });

// fs.writeFileSync("./toCoverCopy.txt", toCover);
