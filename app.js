const express = require('express');
const path = require('path');
const server = express();


// set our view directory so express knows where to serve up our HTML: (note: views is kinda specific to an express app)
server.set("views", path.join(__dirname, 'views'));

// serve up any static assets from our base url and look in the public folder: (for css, images, scripts. etc)
server.use(express.static(path.join(__dirname, 'public')));

server.get("/", (req, res) => {
    console.log('route route route for the home page, if u dont land its a shame');
    res.sendFile('index');
})

server.get("/contact", (req ,res) => {
    console.log('you have hit the contact route');
    res.require('contact.html');
})


const port = process.env.PORT || 3000; // localhost:3000


server.listen(port, () => {
  console.log(`Server is now running at ${port}/`);
}); 
