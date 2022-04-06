/*
create a simple Node.js web server and handle HTTP requests.

To access web pages of any web application, you need a web server. 
The web server will handle all the http requests for the web application 
e.g IIS is a web server for ASP.NET web applications and Apache is a web server for PHP or Java web applications.

Node.js provides capabilities to create your own web server which will handle HTTP requests asynchronously. 
You can use IIS or Apache to run Node.js web application but it is recommended to use Node.js web server.
*/

var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is home page.</p></body></html>');
        res.end();
    }
    else if (req.url == '/student') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is student page.</p></body></html>');
        res.end();
    }
    else if (req.url == '/admin') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is admin page.</p></body></html>');
        res.end();
    }
    else if (req.url == '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: "Hello World!"}))
        res.end();
    }
    else{
        res.end('Invalid Request!');
    }

});

server.listen(8888);

console.log('Sever running at http://127.0.0.1:8888')