CREATE TABLE users (
    iduser uuid, 
    name_description varchar(255), 
    email varchar(255), 
    avatar varchar(255), 
    username varchar(255), 
    userpass varchar(255), 
    time_modification date, 
    CONSTRAINT PK_puesto 
    PRIMARY KEY (iduser, email)
);

CREATE TABLE companies (
    idcompany uuid, 
    iduser uuid, 
    name_description varchar(255), 
    sector varchar(255), 
    creation_date varchar(255), 
    logo varchar(255), 
    webpage varchar(255), 
    phone_number int, 
    social_media varchar(255), 
    company_description varchar(255), 
    company_value money, 
    num_employees int, 
    images varchar(255), 
    time_modification varchar(255), 
    CONSTRAINT PK_companies PRIMARY KEY (idcompany), 
    FOREIGN KEY (iduser) REFERENCES users(iduser)
);

CREATE TABLE workers (
    idcompany uuid, 
    idworker serial, 
    name_description varchar(255), 
    foto varchar(255), 
    historial varchar(255), 
    time_modification date
    CONSTRAINT PK_workers PRIMARY KEY (idcompany, idworker),
    FOREIGN KEY (idcompany) REFERENCES companys(idcompany)
);

