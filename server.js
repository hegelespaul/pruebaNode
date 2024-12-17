////Requisitos
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

//Configuración
const PORT = 3000;
const app = express();

//Middlewares para poder tener peticiones al server y para describir que esas peticiones son en formato json
app.use(cors());
app.use(express.json());

//Utilizar el folder public para cargar elementos estáticos
app.use(express.static(path.join(__dirname, 'public')));

///////////////////////////////////// PÁGINAS WEB ///////////////////
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'routes', 'index.html'))
});

///////////////////////////////////// PROCESOS ///////////////////

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en http://localhost:${PORT}`);
})