create table user(
    id int primary key AUTO_INCREMENT,
    name varchar(250),
    contactNumber varchar(20),
    email varchar(50),
    password varchar(250),
    UNIQUE(email)
);

insert into user(name,contactNumber,email,password) values('Admin','9874563210','admin@gmail.com','admin');

create table category(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    primary key(id)
);

create table product(
id int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
categoryId integer NOT NULL,
description varchar(255),
price integer,
img varchar(255),
primary key(id)
);

create table bill(
    id int NOT NULL AUTO_INCREMENT,
    uuid varchar(200) NOT NULL,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    contactNumber varchar(20) NOT NULL,
    paymentMethod varchar(50) NOT NULL,
    total int NOT NULL,
    productDetails JSON DEFAULT NULL,
    createdBy varchar(255) NOT NULL,
    primary key(id)
);

create table review(
    id int NOT NULL AUTO_INCREMENT,
    review varchar(500) NOT NULL,
    primary key(id)
);

