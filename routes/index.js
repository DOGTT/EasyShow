
module.exports = function(app,pathPuLib){
    app.get('/',function(req,res){
        res.redirect('/demos');
    });
    app.get('/content',function(req,res){
        res.send(app.locals.prList);
    });
    app.use('/demos',require('./demos'));
    app.use(
        function(req,res){
            if(!res.headersSent)
             res.status(404).render('404');
        }
    );
    
};