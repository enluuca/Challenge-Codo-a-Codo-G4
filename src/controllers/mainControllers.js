import {resolve} from "path";
import fs from "fs"
const funkosJSON = JSON.parse(fs.readFileSync("./src/data/data.js", "utf-8"));


let mainFulkon=[]
let ultLanzArray=[]

funkosJSON.forEach(element => {

    if(element.product_id===1 || element.product_id===9 || element.product_id===13){

        let mainFulkonArray=mainFulkon.push(element)
    }

        if(element.product_id===4 || element.product_id===7 || element.product_id===12){

            let ultimosLanzamientos=ultLanzArray.push(element)
        }
    });

// console.log(mainFulkon)
console.log(ultLanzArray)

const mainControllers=(req, res)=>{

    res.render(resolve() + "/src/views/main.ejs", {mainFulkon, ultLanzArray})
}

export default mainControllers;