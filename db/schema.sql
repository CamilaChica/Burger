CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id int not null auto_increment,
burger_name VARCHAR(200) NOT NULL,
devoured boolean NOT NULL default 0,
created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (ID)
);