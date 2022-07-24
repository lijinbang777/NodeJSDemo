const http = require('http');
 //读文件模块
 const fs = require('fs');
 //导入配置模块
 const config = require('../js/config').config;
 //导入ejs模块
 const ejs = require('ejs');
//查询串
 const qs = require("querystring");
 
 var template = fs.readFileSync(__dirname+"/form.ejs",'utf-8');
var posts = [];
const server = http.createServer((req,res) =>{
    if(req.method == "POST"){
        req.data = "";
        //表单数据收集
        req.on("readable",function(){
            var chr = req.read();
            if(chr){
                req.data += chr;
            }
        });
        //表单处理
        req.on("end",function(){
            var query = qs.parse(req.data);
            posts.push(query.content);
            showForm(posts,res);
        });

    }else{
        showForm(posts,res);
    }
});

 server.listen(
    config.port,config.hostname,()=>{
        console.log(`Server running at http://${config.hostname}:${config.port}/`);
    }
);
 function showForm(p_posts,res){
    var data = ejs.render(template,{
        title:"form ejs",
        posts:p_posts
    });
    res.setHeader('Content-Type','text/html');
    res.statusCode = 200;
    res.end(data);
 }