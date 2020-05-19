const fs = require('fs')
const path =require('path')

fs.rename(path.join(__dirname,'2000','ivan.txt'),path.join(__dirname,'1800','ivan.txt'),err => {console.log(err)})
fs.rename(path.join(__dirname,'2000','olga.txt'),path.join(__dirname,'1800','olga.txt'),err => {console.log(err)})
fs.rename(path.join(__dirname,'1800','ira.txt'),path.join(__dirname,'2000','ira.txt'),err => {console.log(err)})
fs.rename(path.join(__dirname,'1800','dima.txt'),path.join(__dirname,'2000','dima.txt'),err => {console.log(err)})
