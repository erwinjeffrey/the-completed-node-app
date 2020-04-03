const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const data = JSON.parse(dataBuffer.toString());
data.name = 'Erwin';
data.age = 26;

const personJson = JSON.stringify(data);
fs.writeFileSync('1-json.json', personJson);
