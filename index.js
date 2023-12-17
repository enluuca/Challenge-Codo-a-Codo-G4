import express from "express";
import dotenv from "dotenv";
import path from "path";
import mainRoutes from  "./src/routes/mainRoutes.js"
import shopRoutes from "./src/routes/shopRoutes.js"
import adminRoutes from "./src/routes/adminRoutes.js"
import authRoutes from "./src/routes/authRoutes.js"


dotenv.config();

const app= express();


// VIEW ENGINE SETUP

app.set("views", path.join(path.resolve(), "views") )
app.set("view engine", "ejs")

app.use(express.static("public"));


const PORT= process.env.PORT || 8080;

//TRADUCTORES DE CONTENIDO QUE INGRESA

// app.use(express.json())
// app.use(express.urlencoded())


// //DEFINIMOS RUTAS UNA VEZ TRAIDAS
app.use("/", mainRoutes)
app.use("/", shopRoutes)
app.use("/", adminRoutes)
app.use("/", authRoutes)

// Middleware para manejar el error 404
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado');
   });

   
app.listen(PORT, ()=>{
    console.log(`El puerto está funcionando en http://localhost:${PORT}`)
})
