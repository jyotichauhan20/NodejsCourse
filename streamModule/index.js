const fs = require('fs')
const http = require('http')
const port = 8080;
const localhost = "localhost";

const server = http.createServer()

server.on('request',(req,res)=>{
    const fs = require('fs')
    fs.readFile('input.txt',(err,data)=>{
        if(err){
            res.end(err)
        }
        else{
            res.end(data)
        }
    })
})

server.listen(localhost,port,()=>{
    console.log(`Server is runing on http://${localhost}${port}`)
})
