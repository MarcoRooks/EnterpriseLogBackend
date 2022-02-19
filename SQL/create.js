const { Client } = require('pg')
const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'enterprise',
    password: '1234',
    port: 5432,
}

const myClient = new Client(connectionData)

const createEmpresa = "CREATE TABLE empresas (idempresa uuid, idusuario uuid, nombre varchar(255), sector varchar(255), fecha_creacion datetime, logotipo varchar(255), pagina_web varchar(255), numero_telefono int, social_media varchar(255), descripcion varchar(255), valoracion money check(valoracion > 0), num_empleados int, imagen varchar(255), time_modification datetime, CONSTRAINT PK_empresas PRIMARY KEY (idempresa), FOREIGN KEY (idusuario) REFERENCES usuarios(idusuario));"

myClient.connect()
myClient.query(createEmpresa)
    .then(response =>{
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })
myClient.end()