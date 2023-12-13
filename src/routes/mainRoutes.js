import express from "express"
import {resolve} from "path"
import mainControllers from "../controllers/mainControllers.js"

const router= express.Router();

console.log(resolve());

router.get("/", mainControllers);

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