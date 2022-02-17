CREATE DATABASE enterprise;

CREATE TABLE empresas (
    idempresa uniqueidentifier,
    idusuario uniqueidentifier,
    nombre varchar(255),
    sector varchar(255),
    logotipo varchar(255),
    pagina_web varchar(255),
    numero_telefono int,
    social_media varchar(255),
    descripcion varchar(255),
    valoracion money,
    num_empleados int,
    imagen varchar(255),
    time_modification datetime,
    CONSTRAINT PK_empresas PRIMARY KEY (idempresa),
    FOREIGN KEY (idusuario) REFERENCES usuarios(idusuario)
);

CREATE TABLE empleados (
    idempresa uniqueidentifier,
    idempleado serial,
    nombre varchar(255),
    foto varchar(255),
    historial varchar(255),
    time_modification datetime
    CONSTRAINT PK_empleados PRIMARY KEY (idempresa, idempleado),
    FOREIGN KEY (idempresa) REFERENCES empresas(idempresa)
);

CREATE TABLE usuarios (
    idusuario uniqueidentifier,
    nombre varchar(255),
    email varchar(255),
    avatar varchar(255),
    username varchar(255),
    time_modification datetime,
    CONSTRAINT PK_puesto PRIMARY KEY (idusuario, email)
);