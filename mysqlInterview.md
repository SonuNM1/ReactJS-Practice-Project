
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

-- 26. Write an SQL query to show one row twice in results from a table.

SELECT * FROM student 
UNION ALL 
SELECT * FROM student ORDER BY student_id; 

-- 27. Write an SQL query to list STUDENT_ID who does not get Scholarship.

SELECT * FROM student ; 
SELECT * FROM scholarship ; 

SELECT * FROM student WHERE student_id NOT IN (SELECT student_ref_id FROM scholarship);

-- 28. Write an SQL query to fetch the first 50% records from a table.

SELECT * FROM student WHERE student_id <= (SELECT COUNT(student_id)/2 FROM student); 

-- 29. Write an SQL query to fetch the MAJOR subject that have less than 4 people in it.

SELECT major FROM student GROUP BY major HAVING COUNT(*) < 4 ; 

SELECT major, COUNT(*) AS student_count
FROM student
GROUP BY major ; 

-- 30. Write an SQL query to show all MAJOR subject along with the number of people in there.

SELECT major, COUNT(*) AS student_count FROM student
GROUP BY major; 

-- 31. Write an SQL query to show the last record from a table.

SELECT * FROM student 
ORDER BY student_id DESC
LIMIT 1 OFFSET 0; 

SELECT * FROM student WHERE student_id = (SELECT MAX(student_id) FROM student) ; 

-- 32. Write an SQL query to fetch the first row of a table.

SELECT * FROM student WHERE student_id = (SELECT MIN(student_id) FROM student) ; 

-- 33. Write an SQL query to fetch the last five records from a table.

SELECT * FROM student ORDER BY student_id DESC LIMIT 5 OFFSET 0 ; 

SELECT * FROM (
	SELECT * FROM student ORDER BY student_id DESC LIMIT 5
) AS subquery ORDER BY student_id ; 

-- 34. Write an SQL query to fetch three max GPA from a table using co-related subquery.

SELECT * FROM student; 

SELECT gpa FROM student ORDER BY gpa DESC LIMIT 3 ; 

-- 35. Write an SQL query to fetch three min GPA from a table using co-related subquery.

SELECT gpa FROM student ORDER BY gpa LIMIT 3 ; 

-- 36. Write an SQL query to fetch nth max (say 6th) GPA from a table.

SELECT gpa AS sixth_max_gpa FROM student
ORDER BY gpa LIMIT 1 OFFSET 5 ; 

-- 37.  37. Write an SQL query to fetch MAJOR subjects along with the max GPA in each of these MAJOR subjects.

SELECT major, max(GPA) AS max_gpa FROM student GROUP BY major;  

-- 38. Write an SQL query to fetch the names of Students who has highest GPA

SELECT CONCAT(first_name, last_name) AS full_name, gpa AS max_gpa FROM student 
WHERE gpa = (SELECT MAX(gpa) FROM student) ; 

-- 39. Write an SQL query to show the current date and time.

-- For current date 
SELECT curdate() ; 
-- For current time 
SELECT curtime() ;

-- 40. Write a query to create a new table which consists of data and structure copied 
-- from the other table (say Student) or clone the table named Student.

CREATE TABLE cloneTable AS SELECT * FROM student ; 

SELECT * FROM cloneTable ; 

-- 41. Write an SQL query to update the GPA of all the students in ‘Computer Science’ MAJOR subject to 7.5.

UPDATE student SET gpa = 7.5 WHERE major = 'Computer Science' ; 
SELECT * FROM student ; 

-- 42. Write an SQL query to find the average GPA for each major.

SELECT major, AVG(gpa) AS Average_GPA FROM student
GROUP BY major ORDER BY Average_GPA; 

--  43. Write an SQL query to show the top 3 students with the highest GPA.

SELECT CONCAT(first_name , ' ',  last_name) AS full_name, gpa FROM student ORDER BY gpa DESC LIMIT 3 ; 

-- 44. Write an SQL query to find the number of students in each major who have a GPA greater than 7.5.

SELECT major, COUNT(student_id) AS high_gpa_count FROM student WHERE gpa > 7.5 GROUP BY major ; 

-- 45. Write an SQL query to find the students who have the same GPA as ‘Shivansh Mahajan’.

SELECT * FROM student 
WHERE gpa = 
(SELECT gpa FROM student 
WHERE first_name = 'Shivansh' 
AND last_name = 'Mahajan') ; 