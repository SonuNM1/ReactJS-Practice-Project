
SHOW Databases ; 
USE sampledb ; 

CREATE TABLE Student (
    student_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    gpa DECIMAL(3, 2),
    enrollment_date DATETIME,
    major VARCHAR(50)
);

INSERT INTO student (student_id, first_name, last_name, gpa, enrollment_date, major) VALUES
(201, 'Shivansh', 'Mahajan', 8.79, '2021-09-01 09:30:00', 'Computer Science'),
(202, 'Umesh', 'Sharma', 8.44, '2021-09-01 08:30:00', 'Mathematics'),
(203, 'Rakesh', 'Kumar', 5.60, '2021-09-01 10:00:00', 'Biology'),
(204, 'Radha', 'Sharma', 9.20, '2021-09-01 12:45:00', 'Chemistry'),
(205, 'Kush', 'Kumar', 7.85, '2021-09-01 08:30:00', 'Physics'),
(206, 'Prem', 'Chopra', 9.56, '2021-09-01 09:24:00', 'History'),
(207, 'Pankaj', 'Vats', 9.78, '2021-09-01 14:30:00', 'English'),
(208, 'Navleen', 'Kaur', 7.00, '2021-09-01 06:30:00', 'Mathematics');

SELECT * FROM Student ; 

CREATE TABLE program (
    student_ref_id INT,
    program_name VARCHAR(50),
    program_start_date DATETIME,
    FOREIGN KEY (student_ref_id) REFERENCES student(student_id)
);

INSERT INTO program (student_ref_id, program_name, program_start_date) VALUES
(201, 'Computer Science', '2021-09-01 00:00:00'),
(202, 'Mathematics', '2021-09-01 00:00:00'),
(208, 'Mathematics', '2021-09-01 00:00:00'),
(205, 'Physics', '2021-09-01 00:00:00'),
(204, 'Chemistry', '2021-09-01 00:00:00'),
(207, 'Psychology', '2021-09-01 00:00:00'),
(206, 'History', '2021-09-01 00:00:00'),
(203, 'Biology', '2021-09-01 00:00:00');

CREATE TABLE scholarship (
    student_ref_id INT,
    scholarship_amount DECIMAL(10, 2),
    scholarship_date DATETIME,
    FOREIGN KEY (student_ref_id) REFERENCES student(student_id)
);

INSERT INTO scholarship (student_ref_id, scholarship_amount, scholarship_date) VALUES
(201, 5000, '2021-10-15 00:00:00'),
(202, 4500, '2022-08-18 00:00:00'),
(203, 3000, '2022-01-25 00:00:00'),
(201, 4000, '2021-10-15 00:00:00');

SELECT * FROM student ; 

-- 1. Write a SQL query to fetch “FIRST_NAME” from the Student table in upper case and use ALIAS name as STUDENT_NAME.

SELECT upper(first_name) AS Student_Name FROM student ; 

-- 2. Write a SQL query to fetch unique values of MAJOR Subjects from Student table.

SELECT DISTINCT(major) FROM student; 

-- 3. Write a SQL query to print the first 3 characters of FIRST_NAME from Student table.

SELECT first_name FROM student LIMIT 3 ; 

SELECT SUBSTRING(first_name, 1, 3) FROM student ; 

-- 4. Write a SQL query to find the position of alphabet (‘a’) int the first name column ‘Shivansh’ from Student table.

SELECT INSTR(first_name , 'a') AS Position_of_a FROM student WHERE first_name = 'Shivansh';

-- 5. Write a SQL query that fetches the unique values of MAJOR Subjects from Student table and print its length.

SELECT * FROM student ; 

SELECT DISTINCT(major), LENGTH(major) FROM student ; 

SELECT DISTINCT(major), LENGTH(major) FROM student GROUP BY major ; 

-- 6. Write a SQL query to print FIRST_NAME from the Student table after replacing ‘a’ with ‘A’.

SELECT REPLACE(first_name, 'a', 'A') FROM student ; 

-- 7. Write a SQL query to print the FIRST_NAME and LAST_NAME from Student table into single column COMPLETE_NAME.

SELECT concat(first_name, ' ', last_name) AS Full_Name FROM student; 

-- 8. Write a SQL query to print all Student details from Student table order by FIRST_NAME Ascending and MAJOR Subject descending 

SELECT * FROM student ORDER BY first_name, major DESC ; 

-- 9. Write a SQL query to print details of the Students with the FIRST_NAME as ‘Prem’ and ‘Shivansh’ from Student table.

SELECT * FROM student WHERE first_name = 'Prem' OR first_name = 'Shivansh' ; 

-- 10. Write a SQL query to print details of the Students excluding FIRST_NAME as ‘Prem’ and ‘Shivansh’ from Student table.

SELECT * FROM student WHERE first_name NOT IN ('Prem', 'Shivansh') ; 

-- 11. Write a SQL query to print details of the Students whose FIRST_NAME ends with ‘a’.

SELECT * FROM student WHERE first_name LIKE '%a' ; 

-- 12. Write an SQL query to print details of the Students whose FIRST_NAME ends with ‘a’ and contains six alphabets.

SELECT * FROM student WHERE first_name LIKE '_____a' ; 

-- 13. Write an SQL query to print details of the Students whose GPA lies between 9.00 and 9.99.

SELECT * FROM student ; 

SELECT * FROM student WHERE gpa BETWEEN 9.00 AND 9.99; 

-- 14. Write an SQL query to fetch the count of Students having Major Subject ‘Computer Science’.

SELECT major, COUNT(*) AS Total_Count FROM student WHERE major = 'Computer Science'; 

-- 15. Write an SQL query to fetch Students full names with GPA >= 8.5 and <= 9.5.

SELECT CONCAT(first_name, ' ', last_name), gpa AS Full_name FROM student WHERE GPA >= 8.5 AND GPA <= 9.5 ; 

-- 16. Write an SQL query to fetch the no. of Students for each MAJOR subject in the descending order.

SELECT major, COUNT(*) AS No_of_Students FROM student GROUP BY major ORDER BY No_of_Students DESC ;  

-- 17. Display the details of students who have received scholarships, including their names, scholarship amounts, and scholarship dates.

SELECT * FROM student ; 
SELECT * FROM scholarship ; 

SELECT student.first_name, student.last_name, scholarship.scholarship_amount, scholarship.scholarship_date
FROM student 
INNER JOIN scholarship 
ON student.student_id = scholarship.student_ref_id ; 