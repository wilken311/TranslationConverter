'use strict';
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
 
const result = excelToJson({
    source: fs.readFileSync('sample.xlsx'), 
    sheets: ['Sheet1'],
});

let sheet= result.Sheet1;


Object.prototype.push = function( key, value ){
    this[key] = value;
    return this;
}

var enObj = {};
var arObj = {};

for(var i = 0, iMax = sheet.length; i < iMax; i++){
    
    //Remove special characters
    let keyFilter1=sheet[i].A.replace(/[^a-zA-Z ]/g, "");

    //Replace all white space into underscore and make it all lowercase
    let keyFilter2=keyFilter1.replace(/\s+/g, '_').toLowerCase();
    
    let key=keyFilter2;
   
    let english=sheet[i].A;
    let arabic=sheet[i].B;

    enObj.push(key, english);   
    arObj.push(key, arabic); 

}

fs.writeFileSync('en.json', JSON.stringify(enObj));
fs.writeFileSync('ar.json', JSON.stringify(arObj));

console.log("Converted Successfully")
