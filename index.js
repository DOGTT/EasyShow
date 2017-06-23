var path = require('path');
var express = require('express');
var config = require('config-lite')(__dirname);
var routes = require('./routes');
var index_info = require('./public/index_info.js');
var app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

app.locals.index_info = index_info;

routes(app);

app.listen(config.port,function(){
    console.log(`${config.name} listening on port ${config.port}`);

})