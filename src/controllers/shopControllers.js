import {resolve} from "path";
import fs from "fs";
const funkosJSON = JSON.parse(fs.readFileSync("./src/data/data.js", "utf-8"));



let ultLanzArray=[]

funkosJSON.forEach(element => {
    if(element.product_id===4 || element.product_id===7 || element.product_id===12){

        let ultimosLanzamientos=ultLanzArray.push(element)
    }
});

const shopControllers={

    shopView:(req, res)=>{

    res.render(resolve() + "/src/views/shop.ejs", {funkosJSON})
},

itemView:(req,res)=>{
    
    let id=req.params.id;
    console.log(id)

    const item=funkosJSON.find(element => element.product_id==id);
    res.render(resolve() + "/src/views/item.ejs", {item:item, ultLanzArray})
        },


carView:(req,res)=>{
    let id=req.params.id;
    const item=funkosJSON.find(element => element.product_id==id);
    res.send("ESTAS EN CAR")
    // res.render(resolve() + "/src/views/car.ejs", {})
}

}


export default shopControllers;