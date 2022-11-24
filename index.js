var express = require('express');
var app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/html'));
const usuario = [];

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.get('/crearEntrada', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/crearEntrada.html'));
});

app.post('/envioDeDatos', function(req, res) {
    usuario.push({
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido

    });
    res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.get('/crearEntrada', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/crearEntrada.html'));
});

app.get('/consultarDatos', function(req, res) {
    if (usuario.id !== '' && usuario.nombre !== '' && usuario.apellido !== '') {
        res.json(usuario);
    } else {
        res.send("Datos no ingresado");
    }
});

app.get('/formularioEDatos', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/datosEliminados.html'));
});



app.post('/eliminar-usuario', function(req, res) {
    const id = req.body.id
    for (let i = 0; i < usuario.length; i++) {
        const element = usuario[i];

        if (element.id === id) {
            usuario.splice(i, 1)
        }
    }
    console.log("Registro eliminado con exito");
    res.sendFile(path.join(__dirname + '/html/index.html'));
    console.log(usuario);
})


app.listen(8000, function() {
    console.log('Servidor corriendo en el puerto 8000');
});