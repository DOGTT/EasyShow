module.exports = function(app){
    app.get('/',function(req,res){
        res.redirect('/demos');
    });
    app.get('/content',function(req,res){
        console.log(req);
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