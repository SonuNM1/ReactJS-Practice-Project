
CREATE DATABASE sampleDB

USE sampleDB;

CREATE TABLE employee (
	empID INT AUTO_INCREMENT PRIMARY KEY ,
    firstName VARCHAR(25) NOT NULL ,
    lastName VARCHAR(40) NOT NULL , 
    dept VARCHAR(35),
    salary DECIMAL(10,2)
) ; 

DESCRIBE employee ; 

INSERT INTO employee (firstName, lastName, dept, salary) VALUES 
('John', 'Doe', 'HR', 50000.00),
('Jane', 'Smith', 'IT', 70000.00),
('Emily', 'Jones', 'IT', 70000.00),
('Michael', 'Brown', 'Finance', 60000.00),
('Chris', 'Davis', 'HR', 50000.00),
('Anna', 'Wilson', 'Marketing', 65000.00),
('Emily', 'Clark', 'IT', 72000.00);

SELECT COUNT(DISTINCT dept) FROM employee ; 

 SELECT * FROM employee WHERE dept IN('IT', 'HR') ; 
 
SELECT * FROM employee WHERE firstName LIKE 'E%';

SELECT COUNT(DISTINCT firstName) from employee WHERE firstName = 'Emily'; 

SELECT * FROM employee ORDER BY salary DESC, firstName ASC; 

SELECT * FROM employee WHERE dept = 'IT' AND salary > 70000 ; 

SELECT * FROM employee WHERE NOT firstName NOT LIKE 'E%' ; 

SELECT * FROM employee WHERE NOT salary < 70000 ; 

CREATE DATABASE companyDB ; 
USE companyDB ; 

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Department VARCHAR(50),
    Salary DECIMAL(10, 2),
    JoinDate DATE,
    ManagerID INT
);

DESCRIBE Employees ; 

INSERT INTO Employees (FirstName, LastName, Department, Salary, JoinDate, ManagerID) VALUES
('John', 'Doe', 'HR', 50000.00, '2023-05-15', NULL),
('Jane', 'Smith', 'IT', 70000.00, '2024-02-20', 1),
('Emily', 'Jones', NULL, 65000.00, '2023-12-10', 2),
('Michael', 'Brown', 'Finance', 60000.00, '2023-11-01', 1),
('Chris', 'Davis', 'HR', 50000.00, NULL, 3),
('Anna', 'Wilson', 'Marketing', 65000.00, '2024-01-05', 2),
('Emily', 'Clark', 'IT', 72000.00, '2024-03-10', NULL);

SELECT * FROM Employees WHERE Department IS NOT NULL ; 

SHOW databases ; 

USE sampledb ; 

SELECT * FROM employee ; 

UPDATE employee SET lastName = 'Mahto' WHERE empID = 2 ; 

UPDATE employee SET salary = 10000 WHERE empID = 1 ; 

UPDATE employee 
SET salary = 1, lastName = 'Tiwari'
WHERE empID =5  ; 

DELETE FROM employee WHERE empID = 4 ;  

SELECT * FROM employee LIMIT 4 OFFSET 2 ; 

SELECT * FROM employee WHERE dept ='IT' LIMIT 2 ; 

SELECT MIN(salary) FROM employee ; 

SELECT firstName, salary FROM employee WHERE 
salary = (SELECT MAX(salary) FROM employee) 
OR salary = (SELECT MIN(salary) FROM employee) ; 

SELECT empID, salary FROM employee WHERE salary = (SELECT MIN(salary) AS minimumSalary FROM employee ) ; 

SELECT COUNT(empID) FROM employee ; 

SELECT * FROM employee ; 

SELECT COUNT(salary) FROM employee WHERE salary > 70000 ; 

SELECT ROUND(AVG(salary),2) AS "Average Salary" FROM employee; 

SELECT ROUND(SUM(salary),0) AS "Total Salary" FROM employee ; 

SELECT * FROM employee WHERE firstName LIKE '_a%'; 

SELECT * FROM employee WHERE dept IN('HR', 'IT') ; 

SELECT * FROM employee WHERE (dept = 'HR' OR dept = 'IT') ; 

CREATE TABLE Customers(
	CustomerID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(30),
    LastName VARCHAR(30),
    Email VARCHAR(30)
);

CREATE TABLE Orders(
	OrderID INT PRIMARY KEY AUTO_INCREMENT, 
    OrderDate DATE, 
    CustomerID INT, 
    Amount DECIMAL(10,2),
    FOREIGN KEY(CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Customers (FirstName, LastName, Email) VALUES
('John', 'Doe', 'john.doe@example.com'),
('Jane', 'Smith', 'jane.smith@example.com'),
('Emily', 'Jones', 'emily.jones@example.com');

INSERT INTO Orders (OrderDate, CustomerID, Amount) VALUES
('2024-01-15', 1, 250.00),
('2024-01-17', 2, 150.00),
('2024-02-20', 1, 300.00),
('2024-02-22', 3, 200.00),
('2024-03-10', 2, 100.00);

SELECT * FROM Customers; 
SELECT * FROM Orders; 

SELECT  Customers.FirstName, Customers.LastName, Orders.OrderDate, Orders.Amount 
FROM Customers 
INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID ; 

SELECT Customers.FirstName, Customers.LastName, Orders.OrderDate, Orders.Amount 
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID ; 

Use sampleDB ; 

SET SQL_SAFE_UPDATES = 0;
SET FOREIGN_KEY_CHECKS = 0;

DELETE FROM Customers ; 
DELETE FROM Orders ; 

DROP TABLE Customers; 
DROP TABLE Orders ; 

CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(100),
    ContactName VARCHAR(100),
    Address VARCHAR(100),
    City VARCHAR(50),
    PostalCode VARCHAR(20),
    Country VARCHAR(50)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    EmployeeID INT,
    OrderDate DATE,
    ShipperID INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Customers (CustomerID, CustomerName, ContactName, Address, City, PostalCode, Country) VALUES
(1, 'Alfreds Futterkiste', 'Maria Anders', 'Obere Str. 57', 'Berlin', '12209', 'Germany'),
(2, 'Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Avda. de la Constitución 2222', 'México D.F.', '05021', 'Mexico'),
(3, 'Antonio Moreno Taquería', 'Antonio Moreno', 'Mataderos 2312', 'México D.F.', '05023', 'Mexico');

INSERT INTO Orders (OrderID, CustomerID, EmployeeID, OrderDate, ShipperID) VALUES
(10308, 2, 7, '1996-09-18', 3),
(10309, 37, 3, '1996-09-19', 1),
(10310, 77, 8, '1996-09-20', 2);

SELECT * FROM Customers ; 
SELECT * FROM Orders ; 

SELECT Customers.CustomerID, Customers.CustomerName, Customers.Country, Customers.Address, Orders.OrderDate
FROM Customers RIGHT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.Country;

SELECT * FROM Customers CROSS JOIN Orders; 

CREATE TABLE Employees(
	EmployeeID INT PRIMARY KEY,
    Name VARCHAR(30) ,
    Position VARCHAR(30) ,
    ManagerID INT ,
    FOREIGN KEY(ManagerID) REFERENCES Employees(EmployeeID)
);

INSERT INTO Employees (EmployeeID, Name, Position, ManagerID) VALUES
(1, 'Alice', 'Manager', NULL),
(2, 'Bob', 'Developer', 1),
(3, 'Charlie', 'Developer', 1),
(4, 'David', 'Analyst', 2),
(5, 'Eve', 'Developer', 2);

SELECT * FROM Employees ; 

SELECT e1.Name AS EmployeeName, e2.Name AS ManagerName
FROM Employees e1
LEFT JOIN Employees e2 ON e1.ManagerID = e2.EmployeeID ; 

CREATE TABLE Sales2023 (
    SaleID INT,
    ProductName VARCHAR(100),
    Amount DECIMAL(10, 2)
);

INSERT INTO Sales2023 (SaleID, ProductName, Amount) VALUES
(1, 'Product A', 150.00),
(2, 'Product B', 200.00),
(3, 'Product C', 250.00);

CREATE TABLE Sales2024 (
    SaleID INT,
    ProductName VARCHAR(100),
    Amount DECIMAL(10, 2)
);

INSERT INTO Sales2024 (SaleID, ProductName, Amount) VALUES
(4, 'Product D', 300.00),
(5, 'Product E', 350.00),
(6, 'Product A', 150.00);

SELECT * FROM Sales2023;
SELECT * FROM Sales2024 ; 

SELECT SaleID, ProductName, Amount 
FROM Sales2023 
UNION 
SELECT SaleID, ProductName, Amount
FROM Sales2024 ; 

DROP TABLE Sales2024;
DROP TABLE Sales2023 ; 

CREATE TABLE Sales (
    SaleID INT,
    ProductName VARCHAR(100),
    Amount DECIMAL(10, 2),
    SaleDate DATE
);

INSERT INTO Sales (SaleID, ProductName, Amount, SaleDate) VALUES
(1, 'Product A', 150.00, '2024-01-01'),
(2, 'Product B', 200.00, '2024-01-02'),
(3, 'Product A', 250.00, '2024-01-03'),
(4, 'Product C', 300.00, '2024-01-04'),
(5, 'Product B', 350.00, '2024-01-05'),
(6, 'Product A', 150.00, '2024-01-06');

SELECT * FROM Sales ; 

SELECT ProductName, SUM(Amount) 
FROM Sales
GROUP BY ProductName;

SELECT ProductName, SUM(Amount), SaleDate
FROM Sales
GROUP BY ProductName, SaleDate ;  

SELECT * FROM Sales ; 

SELECT ProductName, SUM(Amount)
FROM Sales
GROUP BY ProductName
HAVING SUM(Amount)>500 ; 

SELECT ProductName, SUM(Amount) AS TotalSales
FROM Sales
GROUP BY ProductName
ORDER BY TotalSales;

-- total sales amount by product 

SELECT ProductName, SUM(Amount) AS TotalSales
FROM Sales
GROUP BY ProductName HAVING SUM(Amount)>500
ORDER BY TotalSales ; 

-- Average sales amount by product 

SELECT ProductName, ROUND(AVG(Amount),1) AS AverageSales
FROM Sales
GROUP BY ProductName
ORDER BY AverageSales DESC ; 

-- count of sales transaction by product 

SELECT ProductName, COUNT(Amount) AS SalesCount 
FROM Sales
GROUP BY ProductName
ORDER BY SalesCount ; 

-- minimum sales amount by product 

SELECT ProductName, MIN(Amount) AS MinimumSales
FROM Sales
GROUP BY ProductName ; 

-- total sales amount by sales date 

SELECT * FROM Sales ; 

SELECT SaleDate, SUM(Amount) AS TotalSales
FROM Sales
GROUP BY SaleDate
ORDER BY TotalSales ;

-- average sales amount by sales date 

 SELECT SaleDate, AVG(Amount) AS AverageSales
 FROM Sales
 GROUP BY SaleDate ; 

SELECT 'Product A exists' WHERE EXISTS (
    SELECT 1 
    FROM Sales 
    WHERE ProductName = 'Product A'
);

SELECT 'The product exists' WHERE EXISTS(SELECT 1 FROM Sales WHERE ProductName = 'Product A') ; 

SELECT 'Record exists' WHERE EXISTS(SELECT 1 FROM Sales WHERE Amount>300) ; 

CREATE DATABASE practice ; 

SHOW databases

USE sampledb ; 

DROP DATABASE practice ; 

SELECT * FROM Sales ; 

ALTER TABLE Sales DROP COLUMN Profit ; 

ALTER TABLE Sales ADD Profit DECIMAL(6,2) ; 

INSERT INTO Sales (Profit) VALUES
(12),
(9),
(30.2),
(13) ; 

DELETE FROM Sales WHERE productName = 'Product B'

ALTER TABLE Sales ADD Email VARCHAR(20) ; 

UPDATE Sales SET Email='isonumahto@gmail.com' WHERE SaleID = 1 ; 
UPDATE Sales SET Email='garima@gmail.com' WHERE SaleID = 3 ;
UPDATE Sales SET Email='badal@gmail.com' WHERE SaleID = 4 ;
UPDATE Sales SET Email='indra@gmail.com' WHERE SaleID = 6 ;

ALTER TABLE Sales DROP Email ; 

ALTER TABLE Sales ADD Email Date ; 

ALTER TABLE Sales MODIFY COLUMN Email DATE ; 

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100),
    Age INT,
    Salary DECIMAL(10, 2),
    CHECK (Age >= 18 AND Age <= 65),
    CHECK (Salary >= 30000)
);

CREATE TABLE checkExample(
	empID INT AUTO_INCREMENT PRIMARY KEY, 
    empName VARCHAR(20) NOT NULL, 
    Age INT, 
    salary DECIMAL(10,2),
    CHECK(age>= 18 AND age<=70),
    CHECK(salary >= 40000),
    Country VARCHAR(20) DEFAULT 'India'
) ; 

CREATE INDEX salesIndex ON Sales(ProductName);

SELECT * FROM Sales WHERE ProductName = 'Product A';

SHOW INDEX FROM Sales ; 

DROP INDEX salesIndex ON Sales;

USE sampleDB ; 

SHOW tables

DROP TABLE sales ; 

CREATE TABLE Sales (
    SaleID INT,
    ProductName VARCHAR(100),
    Amount DECIMAL(10, 2),
    SaleDate DATE
);

INSERT INTO Sales (SaleID, ProductName, Amount, SaleDate) VALUES
(1, 'Product A', 150.00, '2024-01-01'),
(3, 'Product A', 250.00, '2024-01-03'),
(4, 'Product C', 300.00, '2024-01-04'),
(6, 'Product A', 150.00, '2024-01-06');

SELECT * FROM Sales ; 

DROP VIEW SalesSummary ; 

CREATE VIEW SalesSummary AS 
SELECT ProductName, SUM(Amount) AS TotalSales, COUNT(ProductName) AS NumberOfSales
FROM Sales
GROUP BY ProductName ; 

SELECT * FROM SalesSummary ; 

UPDATE SalesSummary SET Amount = 400 WHERE ProductName = 'Product A' ; 
