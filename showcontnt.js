let fs = require("fs");
function display(path){
    for(let i=0; i<path.length; i++){
        let option = path[i];
        fs.readFile(option, {encoding: 'utf-8'}, function(err,data){
            if (!err) {
                console.log('received data: ' + data);
                // response.writeHead(200, {'Content-Type': 'text/html'});
                // response.write(data);
                // response.end();
            } else {
                console.log(err);
            }
        });
    }
}

module.exports = {
    displayFn : display
}