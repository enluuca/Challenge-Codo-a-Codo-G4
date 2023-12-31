import express from "express"
import authControllers from "../controllers/authControllers.js"

const router= express.Router();


router.get("/auth/login", authControllers.loginView)

router.post("/auth/login", (_,res )=>{
    res.send("ESTAS EN AUTH LOGIN CON METODO POST")
})

router.get("/auth/register", (req,res)=>{
    res.send("ESTAS EN AUTH/REGISTER")
})

router.post("/auth/register", (req,res)=>{
    res.send("ESTAS EN AUTH/REGISTER CON METODO POST")
})


router.get("/auth/logout", (req,res)=>{
    res.send("ESTAS EN AUTH/LOGOUT")
})


export default router;