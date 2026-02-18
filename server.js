const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const buildPath = path.join(__dirname, 'dist', 'jor-tetris', 'browser');

console.log(`Server will serve files from: ${buildPath}`);

app.use(express.static(buildPath));

app.get('/*path', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

// Listen on default port
app.listen(port, () => {
  const red = "\x1b[31m";
  const orange = "\x1b[33m";
  const yellow = "\x1b[93m";
  const green = "\x1b[32m";
  const blue = "\x1b[34m";
  const purple = "\x1b[35m";
  const reset = "\x1b[0m";

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
});
