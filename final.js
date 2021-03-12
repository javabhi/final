let input = process.argv.slice(2);
let fs = require('fs');
const bigLineBreaks = require("./biglinebrk");
const defaultShowData = require('./showcontnt');
const allLineNumbers = require('./alllineNo');
const onlyTextNumbers = require('./onlyCntntNo');



let trav = 0;
let option = input[0];

if(option == '-s' || option == '-n' || option == '-b'){
    let dirpath = input[1];
    if(input.length <= 2){
        switch (option){
            case '-s': 
                bigLineBreaks(dirpath);
                break;
            case '-n':
                allLineNumbers(dirpath);
                break;
            case '-b':
                onlyTextNumbers(dirpath);
                break;
            default:
                console.log('enter a valid option');
                
        }
    }else{
        if(input.length == 3 && input[0] == ('-n' || '-b' || '-s') && input[1] == ('-n' || '-b' || '-s')){
            let path = input[2];
            bigLineBreaks(path);
            allLineNumbers(path);

        }else if(input.length == 3 && input[0] == '-n' && input[1] == '-b'){
            let path = input[2];
            allLineNumbers(path);
        }else if(input.length == 3 && input[0] == '-b' && input[1] == '-n'){
            let path = input[2];
            onlyTextNumbers(path);
        }else{
            console.log('enter a valid option');
        }
        
    }
}else{
    
    defaultShowData.displayFn(input);
}