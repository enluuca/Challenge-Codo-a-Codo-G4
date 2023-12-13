import express from "express"
import {resolve} from "path"
import shopControllers from "../controllers/shopControllers.js"

const router= express.Router();

console.log(resolve());

router.get("/shop", shopControllers)

// router.get("/shop", (req,res)=>{
//     res.send("ESTAMOS EN EL SHOP")
// })

// router.get("/shop/item/:id", shopControllers.shopItem)

router.get("/shop/item/:id", (req,res)=>{
    res.send("ESTAMOS EN EL SHOP ITEM")
})


router.post("/shop/item/:id/", (req,res)=>{
    res.send("ESTAS EN SHOP ADD ITEM")
})

router.get("/shop/car", (req,res)=>{
    res.send("ESTAS EN SHOP-CAR")
})


router.post("/shop/car", (req,res)=>{
    res.send("ESTAS EN SHOP-CAR ADD ITEM")
})



export default router;