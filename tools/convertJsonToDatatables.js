'use strict';

const jsonFile = require('./source.json');
let keysLength = 0;
const keys = [];
const separator = '|';
let dataTable = '|';

function setDataTableHeader() {
  const jsonKeys = Object.keys(jsonFile[0]);
  keysLength = jsonFile.length;

  Object.keys(jsonFile[0]).forEach((key) => {
    dataTable += `${key}\t${separator}`;
    keys.push(key);
  });
}

setDataTableHeader();

jsonFile.forEach((record) => {
  let line = '';
  for (let i = 0; i < keys.length; i++) {
    const value = record[keys[i]];
    line += `${separator}${value}${separator}`; 
    console.log(line);
  }
});
