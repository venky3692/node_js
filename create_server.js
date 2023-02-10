// Http module is used to handle request and response from a server
const http = require('http')

// http.createServer((req,resp)=>{
//     resp.write("Hello. This is Venkatesh Iyer")
//     resp.end()
// }).listen(4500)

function dataControl(req,resp){
    resp.write("Hello, Venkatesh here")
    resp.end()
}

http.createServer(dataControl).listen(4500)
