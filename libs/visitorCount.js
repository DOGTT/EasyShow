var fs = require('fs');
var path = require('path');
var logpath = path.join('./logs','visitorCount.json');
var visitor_init={
    "today": 0,
    "today_date": "first",
    "all": 0,
    "all_date": {
    }
}
var visitorCountAdd = function(){
    var now = new Date();
    var now_str = now.getUTCFullYear()+'-'+(parseInt(now.getUTCMonth())+1) +'-' + now.getUTCDate();
    fs.readFile(logpath, function (err, buffer)  {
        var vct;
        if(err) {
            console.log(logpath+' read false!');
            
            vct = visitor_init;
        }else
            vct = JSON.parse(buffer);
        vct.all ++;
        if((vct.today_date).match(now_str)){
            vct.today ++;
        }else{
            vct.all_date[vct.today_date] = vct.today ;
            vct.today = 0 ;
            vct.today_date = now_str;
            vct.today++;
        }
        fs.writeFile(logpath, JSON.stringify(vct,null,'\t'), function(err) {
            if (err)  {
                console.log(logpath+' write false!');
                throw err;
            }
        console.log('new visitor get!');
        });
    });
}
module.exports = visitorCountAdd;