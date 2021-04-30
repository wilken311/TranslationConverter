Instruction:

Translation1 Folder- Export data from notepad to JSON Format 
  1. ...

Translation2 Folder - Export data from excel to JSON Format
  1.  Run "npm install"
  2.  Navigate to /Translation2
  3.  Insert your excel file (e.g sample.xlsx)
  4.  Replace the following in TranslationConverter2.js

  5.  Replace the "sample.xlsx" with the name of your excel file.
  6.  Line 6:  source: fs.readFileSync('sample.xlsx'), 

  7.  Replace the "Sheet1" with the name of the sheet you want to convert.  
  8.  Line 7:  sheets: ['Sheet1']
  9.  Line 10: let sheet= result.Sheet1;
  
  10. Run "node TranslationConverted2.js"
  11. Result will be seen on ar.json and en.json file.

Note: Please follow the format on "sample.xlsx"
Thank You!



