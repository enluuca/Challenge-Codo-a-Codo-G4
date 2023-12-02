import express from "express"

const router= express.Router();

router.get("/", (_,res )=>{
    res.send("Estas en el main")
})


export default router;