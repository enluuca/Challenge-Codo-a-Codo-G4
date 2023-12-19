import {resolve} from "path";
import fs from "fs";
const funkosJSON = JSON.parse(fs.readFileSync("./src/data/data.js", "utf-8"));

const authControllers={

    loginView:(req, res)=>{

    res.render(resolve() + "/src/views/login.ejs", {funkosJSON})
},

itemView:(req, res)=>{

    res.send("HOLA")

}
}

export default authControllers;