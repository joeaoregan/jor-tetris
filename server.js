const path = require("path");
const express = require("express");
const app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/angular-build"));
app.get("/{*any}", (req, res) => {
  res.sendFile(path.join(__dirname, "angular-build", "index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(port);

const red = "\x1b[31m";
const orange = "\x1b[33m";
const yellow = "\x1b[93m";
const green = "\x1b[32m";
const blue = "\x1b[34m";
const purple = "\x1b[35m";
const reset = "\x1b[0m";

// console.log(
//   `                                                   ${red}Joe
//  ${red}_|_|_|_|_|${orange}          ${yellow}   _|              ${blue}  _| ${red}  O'Regan
//  ${red}     _|   ${orange}   _|_|   ${yellow} _|_|_|_| ${green} _|  _|_|${blue}     ${purple}   _|_|_|
//  ${red}     _|   ${orange} _|_|_|_| ${yellow}   _|     ${green} _|_|    ${blue}  _| ${purple} _|_|
//  ${red}     _|   ${orange} _|       ${yellow}   _|     ${green} _|      ${blue}  _| ${purple}     _|_|
//  ${red}     _|   ${orange}   _|_|_| ${yellow}     _|_| ${green} _|      ${blue}  _| ${purple} _|_|_| ${reset}`
// );

console.log(
  `
${red} _|_|_|_|_|${orange} _|_|_|_| ${yellow}_|_|_|_|_| ${green}_|_|_|   ${blue}_|_|_| ${purple}  _|_|_|  
${red}     _|    ${orange} _|       ${yellow}    _|     ${green}_|    _| ${blue}  _|   ${purple}_|        
${red}     _|    ${orange} _|_|_|   ${yellow}    _|     ${green}_|_|_|   ${blue}  _|   ${purple}  _|_|    
${red}     _|    ${orange} _|       ${yellow}    _|     ${green}_|    _| ${blue}  _|   ${purple}      _|  
${red}     _|    ${orange} _|_|_|_| ${yellow}    _|     ${green}_|    _| ${blue}_|_|_| ${purple}_|_|_|    ${reset}`
);

console.log("Server running at " + purple + "http://localhost:" + port + reset);
console.log("Press " + blue + "Ctrl+C" + reset + " to stop the server");
