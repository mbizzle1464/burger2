-- Create the database burgers_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    person_name VARCHAR(255) NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    DATE TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);

