import express from "express";
// Corregido: Sube un nivel (..) a la raíz y luego busca en /routes/
import rutas from "../routes/rutas.js"; 
// Corregido: Sube un nivel (..) a la raíz y luego busca en /bd/
import conectarBD from "../bd/bd.js"; 

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/", rutas);

const PORT = process.env.PORT || 3000; 

app.listen(PORT, function () {
  console.log("✅ Servidor Express escuchando en el puerto: " + PORT);
  
  // La conexión a la BD se intenta sin bloquear el inicio del servidor
  conectarBD(); 
});