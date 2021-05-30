const express = require("express")
const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

const nunjucks = require("nunjucks")
const { start } = require("repl")
const { Script } = require("vm")
nunjucks.configure("./", {
    express:server,
    noCache:true,
})

server.listen(3000, function(){
    console.log("starting server")
})
