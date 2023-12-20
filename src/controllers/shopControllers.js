import {resolve} from "path";
import fs from "fs";
// import {search2} from "../../public/shop.js";
const funkosJSON = JSON.parse(fs.readFileSync("./src/data/data.js", "utf-8"));

const shopControllers={

    shopView:(req, res)=>{
           
    res.render(resolve() + "/src/views/shop.ejs", {funkosJSON})
},

itemView:(req,res)=>{
    
    
    let id=req.params.id;
    console.log(id)

    const item=funkosJSON.find(element => element.product_id==id);
    res.render(resolve() + "/src/views/item.ejs", {item:item, funkosJSON})
        },


carView:(req,res)=>{
    let id=req.params.id;
    const item=funkosJSON.find(element => element.product_id==id);
    res.render(resolve() + "/src/views/car.ejs", {funkosJSON})
}

}


export default shopControllers;