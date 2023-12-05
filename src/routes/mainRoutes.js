import express from "express"
import {resolve} from "path"
// import mainControllers from "../controllers/mainControllers.js"

const router= express.Router();

console.log(resolve());

router.get("/home", (_,res )=>{
    res.render(resolve() + "/src/views/main.ejs")
})

router.get("/contact", (req,res)=>{
    res.send("ESTAS EN CONTACTO")
})

router.get("/about", (req,res)=>{
    res.send("ESTAS EN ABOUT")
})

router.get("/faqs", (req,res)=>{
    res.send("ESTAS EN FAQS")
})


export default router;