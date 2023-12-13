import {resolve} from "path";
import fs from "fs"
const funkosJSON = JSON.parse(fs.readFileSync("./src/data/data.js", "utf-8"));

const shopControllers=(req, res)=>{

    res.render(resolve() + "/src/views/shop.ejs", {funkosJSON})
}

export default shopControllers;

//     shopItem:(req,res)=>res.send("ESTAS EN SHOP/ITEM");

