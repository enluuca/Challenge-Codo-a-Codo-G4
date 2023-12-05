import express from "express"
import {resolve} from "path"
// import adminControllers from "../controllers/adminControllers.js"

const router= express.Router();

console.log(resolve());

router.get("/admin", (_,res )=>{
    res.send("ESTAS EN ADMIN")
})

router.get("/admin/create", (req,res)=>{
    res.send("ESTAS EN ADMIN- CREATE")
})

router.post("/admin/create", (req,res)=>{
    res.send("ESTAS EN ADMIN- CREATE")
})

router.get("/admin/edit/:id", (req,res)=>{
    res.send("ESTAS EN ADMIN-EDIT-ITEMS")
})

router.put("/admin/edit/:id", (req,res)=>{
    res.send("ESTAS EN ADMIN-ACTUALIZAR-ITEMS")
})

router.delete("/admin/delete/:id", (req,res)=>{
    res.send("ESTAS EN ADMIN-BORRAR-ITEMS")
})


export default router;