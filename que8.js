// Use 'require' to import the 'node-fetch' library
const fetch = require('node-fetch');

// Assign 'fetch' to the global object so it behaves like in the browser
globalThis.fetch = fetch;

// Define an asynchronous function to make the HTTP request
async function callfunc() {
  // Use 'fetch' to make the request to 'https://google.com'
  fetch('https://google.com')
    .then(res => res.text()) // Read the response data as text
    .then(text => printData(text)); // Call 'printData' with the response data
}

// Call the 'callfunc' function to start the HTTP request
callfunc();

// Define a function to print the response data to the console
function printData(res) {
  console.log(res);
}
