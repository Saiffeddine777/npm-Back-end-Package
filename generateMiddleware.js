const fs = require("node:fs")
const path = require("node:path")



module.exports = {
    generateMiddleware : function(name){
    const pathOfMiddleWare = path.resolve(__dirname,"middlewares",name+"Middleware.js")
    if (!fs.existsSync(pathOfMiddleWare)){
        fs.writeFileSync(pathOfMiddleWare,"//define your middleware here")
        console.log(`the Middleware ${name} file has been generated`)
    }
    else{
        console.log(`the middleware ${name} file already exit`)
    }
    
}
}