# Book Store

[Leia em português](README.pt-br.md)

## Description

The project **Book Store** is a REST API web application for managing online libraries, it was made using node, express, mongoDb and postman for its development. It allows the user:
* Navigate among book names
* Look at a specific one by id
* Create books
* Delete books
* Update books
  ## Set Up
1. Clone repository:
   ```bash
   git clone https://github.com/devRafaelFagundes/book-store.git
   ```
3. Navigate to correct directory:
   ```bash
   cd book-store
   ```
4. Install dependencies:
   ```bash
   npm i
   ```
5. Start application:
   ```bash
   node server.js
   ```
## How to test

Even though you can access the data at the link "http://localhost:3000/api/books", you can't make any changes to the database, you need an **API TESTER** to do that, such as [**POSTMAN**](https://www.postman.com/). Simply create an account and a project, then you are finally ready for testing each route and messing with the database, speaking of routes, we can now go to the next topic. 

## API Routes

### Show all books
Endpoint: GET /api/books

![Request and response showing the data using postman](./images/api-books.png)
### Show specific book
Endpoint: GET /api/books/:id
![Request and response showing the book with requested id using postman](./images/api-books-id.png)

### Create a new book
Endpoint: POST /api/books/submit
![Request and response creating a new book with postman](./images/api-books-submit.png)

### Delete a book
Endpoint: DELETE /api/books/delete/:id
![Request and response deleting a new book with postman](./images/api-book-delete-id.png)
### Update a book
Endpoint: PUT /api/books/update/:id
![Request and response deleting a new book with postman](./images/api-books-update-id.png)
### Want to contribute?
Since it is a small project, i do not expect a community whatsoever, but you can help me by giving improvement tips about my code, ideas or anything  you think it would be helpful!!

Made effortfully by [devRafaelFagundes](https://github.com/devRafaelFagundes)
