const url = "https://google.com";

function exportMe() {
  console.log("I'm exported");
}

const codingIsFun = true;

module.exports = { url, codingIsFun, exportMe };
// module.exports.url = url;
// module.exports.codingIsFun = codingIsFun;
// module.exports.exportMe = exportMe;
