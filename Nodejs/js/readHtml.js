/**
 * 搭建简单的web服务器
 * node内置了http模块
 */
 const http = require('http');
 //读文件模块
 const fs = require('fs');
 //导入配置模块
 const config = require('./config').config;
 
 const server = http.createServer((req,res)=>{
    fs.readFile(__dirname + '/../html/index.html','utf-8',function(error,data){

        if(error){
            console.log(error);
            res.statusCode = 404;
            res.setHeader('Content-Type','text/plain');
            res.end('404 error');
        }else{
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html');
            res.end(data);
        }
    });
     
     
    
 });
 server.listen(
     config.port,config.hostname,()=>{
         console.log(`Server running at http://${config.hostname}:${config.port}/`);
     }
 );