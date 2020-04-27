import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

console.log("Listening on port 8000");
console.log(process.versions);
console.log("Exiting with success!");
process.exitCode = 0;
console.log("Exit Code: " + process.exitCode);
process.exit()