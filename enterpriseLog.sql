CREATE DATABASE enterprise;

CREATE TABLE empresas (
    idempresa uniqueidentifier,
    nombre varchar(255),
    sector varchar(255),
    logotipo image,
    time_modification datetime,
    CONSTRAINT PK_empresas PRIMARY KEY (idempresa)
);

CREATE TABLE contacto (
    idempresa uniqueidentifier,
    pagina_web varchar(255),
    numero_telefono int,
    social_media varchar(255),
    time_modification datetime,
    CONSTRAINT PK_contacto PRIMARY KEY (idempresa),
    FOREIGN KEY (idempresa) REFERENCES empresas(idempresa)
);

CREATE TABLE informacion (
    idempresa uniqueidentifier,
    descripcion varchar(255),
    valoracion money,
    num_empleados int,
    imagen1 image,
    imagen2 image, 
    imagen3 image,
    imagen4 image,
    time_modification datetime, 
    CONSTRAINT PK_informacion PRIMARY KEY (idempresa),
    FOREIGN KEY (idempresa) REFERENCES empresas(idempresa)
);

CREATE TABLE evento (
    idempresa uniqueidentifier,
    idevento serial,
    descripcion varchar(255),
    fecha date,
    localidad varchar(255),
    nombre varchar(255),
    imagen1 image,
    imagen2 image,
    time_modification datetime,
    CONSTRAINT PK_evento PRIMARY KEY (idempresa, idevento),
    FOREIGN KEY (idempresa) REFERENCES empresas(idempresa)
);

CREATE TABLE empleados (
    idempresa uniqueidentifier,
    idempleado serial,
    idposicion serial,
    nombre varchar(255),
    time_modification datetime
    CONSTRAINT PK_empleados PRIMARY KEY (idempresa, idempleado),
    FOREIGN KEY (idempresa) REFERENCES empresas(idempresa),
    FOREIGN KEY (idposicion) REFERENCES puesto(idposicion)
);

CREATE TABLE puesto (
    idempresa uniqueidentifier,
    idposicion serial,
    titulo varchar(255),
    descripcion varchar(255),
    salario money,
    time_modification datetime,
    CONSTRAINT PK_puesto PRIMARY KEY (idempresa, idposicion),
    FOREIGN KEY (idempresa) REFERENCES empresas(idempresa),
);

CREATE TABLE usuarios (
    idempresa uniqueidentifier,
    idusuario uniqueidentifier,
    nombre varchar(255),
    email varchar(255),
    /* userpass varchar(255), */
    fotoid image,
    username varchar(255),
    time_modification datetime,
    CONSTRAINT PK_puesto PRIMARY KEY (idempresa, idusuario, email),
    FOREIGN KEY (idempresa) REFERENCES empresas(idempresa),
);