/*
Express is a fast, unopinionated, minimalist web framework for Node.js, which is also the most popular Node web framework.
Other common web-development tasks are not directly supported by Node itself. 
If you want to add specific handling for different HTTP verbs (e.g. GET, POST, DELETE, etc.), 
separately handle requests at different URL paths ("routes"), serve static files, 
or use templates to dynamically create the response, Node won't be of much use on its own. 
You will either need to write the code yourself, or you can avoid reinventing the wheel and use a web framework!

While Express itself is fairly minimalist, developers have created compatible middleware packages to address almost any web development problem. 
There are libraries to work with cookies, sessions, user logins, URL parameters, POST data, security headers, and many more
*/

var express = require('express');
var app = express();
const port = 3000

// app.use(require('morgan')('dev'));
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});