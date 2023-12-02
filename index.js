import express from "express";
import dotenv from "dotenv";
import mainRoute from  "./src/routes/mainRoute.js"

dotenv.config();

const app= express();

app.use(express.static("public"));


const PORT= process.env.PORT || 8080;


// //DEFINIMOS RUTAS UNA VEZ TRAIDAS
app.use("/", mainRoute)

app.listen(PORT, ()=>{
    console.log(`El puerto está funcionando en http://localhost:${PORT}`)
})

