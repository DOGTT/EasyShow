var path = require('path');
var express = require('express');
var config = require('config-lite')(__dirname);

var pathPublic = path.join(__dirname,'public');
var pathPuLib = path.join(__dirname,'lib');
var pathPuConfig= path.join(__dirname,'config');

var routes = require(path.join(__dirname,'routes'));
var projectGet = require(path.join(pathPuLib,'projectGet.js'));
var index_info = require(path.join(pathPublic,'config','index_info.js'));
var pathProjectGet = [];

var app = express();

//set view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//add public
app.use(express.static(path.join(__dirname,'public')));

//set index_info
app.locals.index_info = index_info;


config.pathProjectsFind.forEach(function(element) {
    var pathPro = path.join(pathPublic,config.pathProjectsBasic,element);
    app.use(express.static(pathPro));
    pathProjectGet.push(pathPro);
}, this);
app.locals.prList = projectGet(pathProjectGet,path.join(pathPublic,config.pathProjectsInfo));


routes(app);


app.listen(config.port,function(){
    console.log(`${config.name} listening on port ${config.port}`);

})