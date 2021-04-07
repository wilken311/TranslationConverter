'use strict';
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
 
const result = excelToJson({
    source: fs.readFileSync('english-arabic.xlsx'), // fs.readFileSync return a Buffer
    sheets: ['partner_mobile_app'],
    // sheets: ['Sheet1'],
    columnToKey: {
        A: 'english',
        B: 'arabic'
    },
    header:{
        // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
        rows: 1 // 2, 3, 4, etc.
    }
});

let sheet= result.partner_mobile_app;
// let sheet= result.Sheet1;

Object.prototype.push = function( key, value ){
    this[key] = value;
    return this;
}

var enObj = {};
var arObj = {};

for(var i = 0, iMax = sheet.length; i < iMax; i++){
    
    //Remove special characters
    let keyFilter1=sheet[i].english.replace(/[^a-zA-Z ]/g, "");

    //Replace all white space into underscore and make it all lowercase
    let keyFilter2=keyFilter1.replace(/\s+/g, '_').toLowerCase();
    
    let key=keyFilter2;
   
    let english=sheet[i].english;
    let arabic=sheet[i].arabic;

    enObj.push(key, english);   
    arObj.push(key, arabic); 

}

// console.log(enObj)
fs.writeFileSync('en.json', JSON.stringify(enObj));

// console.log(arObj)
fs.writeFileSync('ar.json', JSON.stringify(arObj));

console.log("Converted Successfully")
