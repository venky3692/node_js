const fs = require('fs')

const app = require("./app")
console.log(app.c("Venkatesh")) 

const arr = [1,2,3,4,5]

let result = arr.filter((item)=>{
    return item>4
})
console.log(result)

fs.writeFileSync("Hello.txt", "I am venkatesh and I am learning Node JS")

console.log("This id dirname ==>", __dirname)
console.log("This is file name ==>", __filename)