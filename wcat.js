let fs = require("fs");

let p = require("path");
let input = process.argv.slice(2);
let option = input[0];

function isFileorNot(dirpath){
    // check extension
    return fs.lstatSync(dirpath).isFile();
}

let trav = 0;

// function displayfile(dirpath){
//     let isFile = isFileorNot(option);
//     if(isFile == true){
//         // display file content
//         fs.readFile(option, {encoding: 'utf-8'}, function(err,data){
//             if (!err) {
//                 console.log('received data: ' + data);
//                 // response.writeHead(200, {'Content-Type': 'text/html'});
//                 // response.write(data);
//                 // response.end();
//             } else {
//                 console.log(err);
//             }
//         });

//         // recursion
//         console.log(input);
//         console.log(input.length);

//         trav += 1
//         while(trav < input.length){
//             option = input[trav];
//             displayfile(option);

//         }
            

//     }else{
//         // display file content according to given commands
//         let cmd = option;
//         console.log(option);
//         while(cmd < input.length && !isFileorNot(input[cmd])){
//             switch (cmd){
//                 case "-s":
//                     console.log("empty space removed");
//                     break;
//                 case "-n":
//                     console.log("each line numbered");
//                     break;
//                 case "-b":
//                     console.log("only line without empty line numbered");
//                     break;
//                 default:
//                     console.log("please enter valid command");    
//             }
//         }
//     }
// }

// displayfile(option);






