var path = require('path');
var express = require('express');
var config = require('config-lite')(__dirname);
var routes = require('./routes');
var app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

app.locals.info = {
    tittle:config.name,
    description:config.description
}
routes(app);
app.listen(config.port,function(){
    console.log(`${config.name} listening on port ${config.port}`);

})