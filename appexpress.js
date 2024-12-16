const express = require('express');
const connection = require('./db'); // Importa la conexión desde db.js
const path = require('path'); // Requiere el módulo path para servir archivos estáticos

const app = express();
const port = 3000;

// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para mostrar todos los id y títulos de las canciones
app.get('/', (req, res) => {
    connection.query('SELECT * FROM E_poi_siamo_finiti_nel_vortice', (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.send('Error al obtener los datos');
            return;
        }

        // Si se encuentran registros, mostramos todos los id y títulos
        if (results.length > 0) {
            let listaCanciones = '';
            results.forEach((cancion) => {
                listaCanciones += `
                    <li>
                        <div class="song-container">
                            <a href="${cancion.url}" class="button">${cancion.id_cancion} - ${cancion.titulo}</a>
                                <button class="show-lyrics-btn">Mostrar letra</button>

                                <!-- Contenedor donde se mostrará la letra -->
                                <div id="letra-${cancion.id_cancion}" class="lyrics-container" style="display:none;">${cancion.letra}</div>

                            </div>
                        </div>
                    </li>`;
            });

            res.send(`
                <html>
                    <head>
                        <title>Lista de Canciones</title>
                        <link rel="stylesheet" type="text/css" href="css/styles.css">

                    </head>
                    <body>
                        <h1>E poi siamo finiti nel vortice</h1>
                        <ul>
                            ${listaCanciones}
                        </ul>
                    </body>
                    <script src= "javascript/app.js"></script>
                </html>
            `);
        } else {
            res.send('<h1>No se encontraron canciones</h1>');
        }
    });
});

// Iniciar el servidor
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://0.0.0.0:${port}`);
});
