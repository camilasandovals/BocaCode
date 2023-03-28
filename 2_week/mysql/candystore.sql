-- Create candystore database
CREATE DATABASE candystore;

--Switch to candystore database
USE candystore;

--Create the customers table
CREATE TABLE customers (
    customerId INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    email VARCHAR(30),
    phone VARCHAR(20),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add our first customer 
INSERT INTO customers (firstName, lastName, email, phone) 
VALUES ('Damian', 'Montero', 'damian@bocacode.com', '976-CODE');

-- Let's get ALL of the customers:
SELECT * FROM customers;

-- Add multiple customers
INSERT INTO customers (firstName, lastName, email, phone)
VALUES ('Cassandra', 'Curcio', 'cassandra@bocacode.com', '954-CAST'),
 ('Bridgette', 'Lemus', 'bridgette@bocacode.com', '954-DOGS'),
  ('Nerissa', 'Dorlin', 'nerissa@bocacode.com', '954-NERI');
--