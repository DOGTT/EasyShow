var fs = require('fs');
var GetProjectConfig = function(path,infoPath){
    console.log(path);
    var prList = {
        "projects":[]
    };
    path.forEach(
        function(p){
            var files = fs.readdirSync(p);
            files.forEach(function(element) {
                if(element.match('.html'))
                    prList.projects.push(element.substr(0,element.length-5));
            }, this);
        }
    );
    console.log("get :"+prList.projects);
    return prList;
}
module.exports = GetProjectConfig;