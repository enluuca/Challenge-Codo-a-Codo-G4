import express from "express"
import {resolve} from "path"
import shopControllers from "../controllers/shopControllers.js"

const router= express.Router();


router.get("/shop", shopControllers.shopView)
router.get("/shop/:id", shopControllers.itemView)

router.get("/shop/car", (req,res)=>{
    res.send("ESTAS EN SHOP-CAR")
})

router.post("/shop/car", (req,res)=>{
    res.send("ESTAS EN SHOP-CAR ADD ITEM")
})

export default router;