const fs = require("fs");
DB_FILE_PATH = "./core/db";

console.log("[CRUD]")

function create(content){
    fs.writeFileSync(DB_FILE_PATH, content)
    return content;
}

//[SIMULATION]

console.log(create("Tarefa 1"));