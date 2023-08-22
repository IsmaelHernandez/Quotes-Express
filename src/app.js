//? Dependencies
//? Express sirve para crear un servidor crear las diferentes url de peticiones web
const express = require('express')

//? Initial Config
const port = 9000;

//contendra todas las acciones de la api
const app = express()

//? Json Request acepted
app.use(express.json());

//? Ruta prueba para ver si nos da respuesta el servidor ok
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Ok!'
    });
});


//? Ruta del puerto del servidor
app.listen(port, () => {
    console.log(`Server started on ${port}`)
})

