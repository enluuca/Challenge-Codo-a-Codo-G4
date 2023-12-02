import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app= express();

app.use(express.static("public"));


const PORT= process.env.PORT || 8080;


// //DEFINIMOS RUTAS UNA VEZ TRAIDAS
// app.use("/", (req,res)=>{
//     res.send("HOLA ESTAS EN EL INCIO")
// })

app.listen(PORT, ()=>{
    console.log(`El puerto está funcionando en http://localhost:${PORT}`)
})

