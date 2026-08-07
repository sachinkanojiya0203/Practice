
const fs=require("fs")
const path=require("path")
const os=require("os")

const fsresult= fs.readFileSync('dummy.txt','utf8');

console.log("---fs module**",fsresult);  //using fs(file system) module
console.log(path.join("---path module use--:",fsresult,"data","dummy.txt")); //using path module
console.log(path.extname('report.pdf'));

console.log(os.cpus(fsresult).length, 'CPU cores');// os(oprating system) module
