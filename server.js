 var express = require('express');
const { port } = require('./resources/config/aws-config');

 //Configure the route mechanism to call facial detect methods
 var routes = require('./routes/index');

 //Create a new Express application.
 var app = express();

 //Use application-level middleware for common functionality, including
 app.use(require('cookie-parser')());
 app.use(require('body-parser').urlencoded({ limit: '100mb', extended: true }));
 app.use(require("body-parser").json({ limit: '100mb' }));
 app.use('/apis', routes);
 
 const port_runing = port || 3000;
 app.listen(port_runing);
 console.log("Application of detection facial running at: " + port_runing)