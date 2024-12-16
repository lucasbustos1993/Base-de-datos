const mysql = require('mysql2');

// Configura los datos de tu base de datos
const connection = mysql.createConnection({
    host: 'bn1gtckuaqenjz60lswt-mysql.services.clever-cloud.com',      // Dirección del servidor MySQL (cambia si es remoto)
    user: 'udrnnrynxsx8mzlr',           // Tu usuario de MySQL
    password: 'osL9qgZVOF3hyZlEKDTH',   // Tu contraseña de MySQL
    database: 'bn1gtckuaqenjz60lswt' // Nombre de tu base de datos
});

// Probar la conexión
connection.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
});

// Exportar la conexión para usarla en otros archivos
module.exports = connection;
