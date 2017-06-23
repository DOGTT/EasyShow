var fs = require('fs');
var GetProjectConfig = function(path,infoPath){
    console.log(path);
    var _project = function(){
        this.href="";
        this.img_href="";
        this.info=":";
    };
    var infoPathJson = JSON.parse(fs.readFileSync(infoPath, 'utf8'));
    var prList = [];
    if(infoPathJson.projectsOut!==undefined){
        infoPathJson.projectsOut.forEach(
            function(prOut){
                var pj = new _project();
                pj.href = prOut.href!==undefined?prOut.href:"error";
                pj.img_href = prOut.img_href!==undefined?prOut.img_href:"error";
                pj.info = prOut.info!==undefined?prOut.info:"error";
                prList.push(pj);
            }
        );
    }
    path.forEach(
        function(p){
            var files = fs.readdirSync(p);
            files.forEach(function(element) {
                if(element.match('.html')){
                    var pj = new _project();
                    pj.href = element;
                    pj.img_href = element.substr(0,element.length-4)+"jpg";
                    var infoE = infoPathJson.projectsIn[element];
                    if(infoE!==undefined){
                        pj.info = infoE.info;
                    }
                    else{
                        pj.info = element.substr(0,element.length-4);
                    }
                    prList.push(pj);
                }      
            }, this);
        }
    );
    console.log("get :"+JSON.stringify(prList) );
    return prList;
}
module.exports = GetProjectConfig;