const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const workbook = XLSX.readFile(path.join(__dirname,'./Doctor.xlsx'));
const sheetNameList = workbook.SheetNames;
const worksheet = workbook.Sheets[sheetNameList[0]];
const DoctorArray = XLSX.utils.sheet_to_json(worksheet);


const testJson = [
  { name: 'guanglin.lu', number: 2 },
  { name: '张益达', number: 3 },
  { name: '薛博林', number: 23 },
  { name: 'aaa', number: 28 },
];
console.log(DoctorArray);

//转成string才能写入文件
let result = JSON.stringify(testJson);
fs.writeFile(path.join(__dirname, './result.json'), result, err => {
  if (err) {
      console.log(err);
  }
  console.log('----- 写入完成 -----');
}); 
