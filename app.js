const http = require('http');
const stream = require('fs');
//require is more or less the same as a js import

// const hostname = '127.0.0.1'; // this is localhost
const port = process.env.PORT || 3000; // localhost:3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  let url = req.url; // localhost:3000/contact or portfolio for example


  switch (url) {
    case "/contact":
      stream.readFile('contact.html', null, ((err, data) => {
        // always handle breakage and errors first
        if (err) {
          res.writeHead(404);
          res.write('Uh oh! 404 not found!');
        } else {
            res.write(data);
        }
        }))
    break;

    case "/portfolio":
      stream.readFile('portfolio.html', null, ((err, data) => {
        // always handle breakage and errors first
        if (err) {
          res.writeHead(404);
          res.write('404 not found');
        } else {
            res.write(data);
        }
        }))
    break;

    case "/contact":
      stream.readFile('contact.html', null, ((err, data) => {
        // always handle breakage and errors first
        if (err) {
          res.writeHead(404);
          res.write('Uh oh! 404 not found!');
        } else {
            res.write(data);
        }
        }))
    break;

    default:
        res.end('Hola amigos! Dos cerveza por favor! Mucho gracias, buen dia.'); // this is just a piece of txt we sent to browser
  }

  
});

server.listen(port, () => {
  console.log(`Server is now running at ${port}/`);
}); 
