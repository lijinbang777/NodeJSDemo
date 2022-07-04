/**
 * 搭建简单的web服务器
 * node内置了http模块
 */
 const http = require('http');
 //读文件模块
 const fs = require('fs');
 //导入配置模块
 const config = require('../js/config').config;
 //导入ejs模块
 const ejs = require('ejs');
 
 var template = fs.readFileSync(__dirname+"/hello.ejs",'utf-8');
 const server = http.createServer((req,res)=>{
    var data = ejs.render(template,{
        title:'hello ejs',
        content:'<strong> big hello ejs.<strong>',
    });
    res.setHeader('Content-Type','text/html');
    res.statusCode = 200;
    res.end(data);
    
 });
 server.listen(
     config.port,config.hostname,()=>{
         console.log(`Server running at http://${config.hostname}:${config.port}/`);
     }
 );