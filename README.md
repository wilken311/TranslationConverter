# Instruction:

Translation2 Folder - Export data from excel to JSON Format
  1. Run "npm install"
  2. Navigate to /Translation2
  3. Insert your excel file (e.g sample.xlsx)
  4. Replace the following in TranslationConverter2.js

```bash
//Replace the "sample.xlsx" with the name of your excel file
Line 6:  source: fs.readFileSync('sample.xlsx'), 

//Replace the "Sheet1" with the name of the sheet you want to convert.  
Line 7:  sheets: ['Sheet1']
Line 10: let sheet= result.Sheet1;
  
  
```


5. Run "node TranslationConverted2.js"
6. Result will be seen on ar.json and en.json file.


## Note
Please follow the format on "sample.xlsx"
Thank You!

## License
[MIT](https://choosealicense.com/licenses/mit/)
