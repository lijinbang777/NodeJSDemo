/**
 * 
 * 1.终端输入Node
 * 就会进入交互解释器 REPL
 * node,python,swift在终端上都会开启一个交互解释器
 */

/*console.log("Hello world! Welcome to Nodejs");*/


/**
 * 2.线程模型  等待请求，开辟线程处理请求，处理完成，返回客户端结果，销毁资源及线程
 * 事件循环 event loop 开一个事件循环
 */


/**
 * 
 * 3.阻塞处理
 * 非阻塞处理
 */


//阻塞处理
/*
function update_db(){
    var start = new Date().getTime();
    console.log("currenttime === " + start);
    while(new Date().getTime() < start+5000);//5000ms
}
update_db();
console.log("update_db success");
console.log("I like javascript");
*/

//非阻塞处理
/*
function update_db(done){
    setTimeout(
        ()=>{
            done();
        },3000
    );
}
update_db(
    function(){
        console.log("update_db success");
    }
);
console.log("I like nodejs");
*/

/**
 * 5.搭建简单的web服务器
 * node内置了http模块
 */
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('hello world!\n');
});
server.listen(
    port,hostname,()=>{
        console.log(`Server running at http://${hostname}:${port}/`);
    }
);

