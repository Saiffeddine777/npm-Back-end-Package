const fs = require("node:fs")
const path = require("node:path")


module.exports={ 

initialiseBackEndfunction : function(){

    const middlewaresPath = path.join(__dirname,"middlewares")
    const routerspath = path.join(__dirname,"routers")
    const modelsPath = path.join(__dirname,"models")
    const databasePath = path.join(__dirname,"database")
    const controllersPath = path.join(__dirname,"controllers")
    const indexJspath = path.join(__dirname,"index.js")
    const pathIndexDatabase = path.join(databasePath,"index.js")


    if(!fs.existsSync(indexJspath)){
        fs.writeFileSync(indexJspath)
     }
     
     if (!fs.existsSync(middlewaresPath)){
         fs.mkdirSync(middlewaresPath)
     }
     
     if (!fs.existsSync(routerspath)){
         fs.mkdirSync(routerspath)
     }
     
     if (!fs.existsSync(modelsPath)){
         fs.mkdirSync(modelsPath)
     }
     
     
     if (!fs.existsSync(databasePath)){
         fs.mkdirSync(databasePath)
         fs.writeFileSync(pathIndexDatabase,`//define Your database connection here`)
     }
     
     
     if (!fs.existsSync(controllersPath)){
         fs.mkdirSync(controllersPath)
     }
     
} }



