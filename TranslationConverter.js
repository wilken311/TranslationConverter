var fs = require('fs');

try {
    // read contents of the file
    const data = fs.readFileSync('file.txt', 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    var enObj = {};
    var arObj = {};

    Object.prototype.push = function( key, value ){
        this[ key ] = value;
        return this;
     }

    for(var i = 0, iMax = lines.length; i < iMax; i++){
        if(i % 2 == 0) {
            let enKey=lines[i].replace(/\s+/g, '-').toLowerCase();
            enObj.push( enKey, lines[i]);
        } else {
            let arKey=lines[i-1].replace(/\s+/g, '-').toLowerCase();
            arObj.push( arKey, lines[i]);
        }
    }

    //English
    let enResult = JSON.stringify(enObj);
    fs.writeFileSync('en.json', enResult);

    //Arabic
    let arResult = JSON.stringify(arObj);
    fs.writeFileSync('ar.json', arResult);

    console.log("Converted Successfully!")
    
} catch (err) {
    console.error(err);
}


// Referene:
// https://codebeautify.org/jsonminifier

