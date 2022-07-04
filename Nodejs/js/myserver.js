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
     res.statusCode = 200;
     res.setHeader('Content-Type','text/plain');
     switch (req.url) {
        case '/':
            res.end('hello world!\n');
            break;
     
        case '/home':
            res.end('home page!\n');
            break;
            break;
        default:
            res.end('not found!\n');
            break;
     }
    
 });
 server.listen(
     config.port,config.hostname,()=>{
         console.log(`Server running at http://${config.hostname}:${config.port}/`);
     }
 );