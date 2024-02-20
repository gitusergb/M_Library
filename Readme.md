## Masai Library (NEM Basic)


### Problem Statement
- You are tasked with creating the backend for the Masai library. 
- The backend should be created using Node, Express, and Mongo.

***Task 1*** : Set Up the Project
- Create a new Node.js project.(frontend)
- Initialize a package.json file.
- Install the necessary dependencies (Express.js, Mongoose, etc.).

***Task 2*** : Create the Book Model
- Define a MongoDB schema for a "Book" with the following properties:
Title
Author
ISBN (International Standard Book Number)
Description
Published Date


***Task 3*** : Implement CRUD Operations

Create Operation:
Implement an API endpoint to create a new book (HTTP POST).
Validate the input data to ensure all required fields are provided.
Save the new book to the MongoDB database.

Read Operations:
Implement an API endpoint to retrieve all books (HTTP GET).
Implement an API endpoint to retrieve a single book by its ID (HTTP GET).
Implement an API endpoint to search for books by title or author (HTTP GET).

Update Operation:
Implement an API endpoint to update a book by its ID (HTTP PUT).
Validate the input data to ensure all required fields are provided.
Update the book in the MongoDB database.

Delete Operation:
Implement an API endpoint to delete a book by its ID (HTTP DELETE).
Delete the book from the MongoDB database.

***Task 4*** : Error Handling
Implement proper error handling for various scenarios (e.g., invalid input, not found, database errors).

***Task 5*** : Testing
Write unit tests for each CRUD operation using a testing framework like Mocha, Chai, or Jest.

***Task 6*** : Documentation
Generate API documentation using tools like Swagger or use Markdown to document your API endpoints.

***Task 7*** : Bonus
Add pagination to the "Get all books" endpoint.
Implement authentication and authorization for protecting certain endpoints (e.g., only authenticated users can create/update/delete books).
Add validation for ISBN numbers and dates.
Implement data validation and sanitation to prevent common security issues like SQL injection or NoSQL injection.

#### Submission:
Students should submit their code on a platform like GitHub or as a compressed archive containing all project files.
Include a README.md file with instructions on how to run the application and the API documentation.

<!-- https://geode-lion-3e5.notion.site/Masai-Library-NEM-Basic-1a0b093172cd4df9a20c5b7246d4c74e -->