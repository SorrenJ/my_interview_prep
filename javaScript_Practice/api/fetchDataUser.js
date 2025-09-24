
/* 
Implement a function fetchDataForUser, which fetches data from a remote JSON api and then returns a part of it.

Since this is a network call, it will need to be an asynchronous function and return the data via a callback.

The JSON-based data will be fetched from this URL, and others like it:
https://jsonplaceholder.typicode.com/users


Use the request library (https://www.npmjs.com/package/request) to fetch data.
The request library is already installed in this project, and you can require and use it.

*/



const request = require('request');

const fetchDataForUser = function(url, username, callback) {
    // IMPLEMENT ME

    request(url, (error, response, body) => {
        if (error) {
            callback(error, null);
            return;
        }

      try {
      const bodyObject = JSON.parse(body);

      // Find the user where email matches "Elwyn.Skiles@kory.org"
      const userObject = bodyObject.find(
        (user) => user.email === username || user.username === username
      );

      callback(null, userObject);
    } catch (err) {
      callback(err, null);
    }
  });
};


fetchDataForUser(
  "https://jsonplaceholder.typicode.com/users",
  "Elwyn.Skiles",
  (err, data) => {
    if (err) {
      console.error("Error:", err);
    } else {
      console.log("Here is your data:", data);
    }
  }
);
