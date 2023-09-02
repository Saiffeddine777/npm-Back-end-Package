const fs = require("node:fs")
const path = require("node:path")



module.exports ={

generateModel: function(name){
    const newName = name[0].toUpperCase() +  name.slice(1,name.length)
    const pathOfModel = path.resolve(__dirname,"models",newName+"s"+"-Model")
    const pathOfController = path.resolve(__dirname,"controllers",newName+"Controller.js")
    const pathOfRouter = path.resolve(__dirname,"routers",newName+"Router.js")
    if (!fs.existsSync(pathOfModel)){
        fs.mkdirSync(pathOfModel)
        const pathOfSchema = path.join(pathOfModel,"schema.js")
        const pathOfInteractions= path.join(pathOfModel,"interaction.js")
        fs.writeFileSync(pathOfSchema,"//define the schema you model here") 
        fs.writeFileSync(pathOfInteractions,"//define your model interact with your database from here")
        fs.writeFileSync(pathOfController,"//define Your controllers here")
        fs.writeFileSync(pathOfRouter,"//define you router here")
    }
}}

generateModel("user")