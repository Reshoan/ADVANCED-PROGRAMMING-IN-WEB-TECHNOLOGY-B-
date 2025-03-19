//fs stands for file system
let fs = require('fs');

//writing a file
fs.writeFileSync('C:/Users/resho/Desktop/AWTLab4/fs/trialFs.doc', 'Hello, this is a trial file created using fs module of Node.js');

//reading a file
let data = fs.readFileSync('C:/Users/resho/Desktop/AWTLab4/fs/trialFs.doc', 'utf8');
console.log(data);