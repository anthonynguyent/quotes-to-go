# Express Quote API

The Express Quote API is a simple RESTful API built using Express.js, a popular Node.js framework. It provides endpoints to retrieve, add, and delete quotes categorized into different types such as inspirational, motivational, and funny.

## Features

-   **Random Quote:** Retrieve a random quote from any of the available categories.
-   **Category-based Quote:** Retrieve all quotes belonging to a specific category.
-   **Add Quote:** Add a new quote to an existing category.
-   **Delete Category:** Delete an entire category of quotes.

## Endpoints

### Random Quote

-   **GET /quote:** Retrieves a random quote from any of the available categories.

### Category-based Quote

-   **GET /quotes/:category:** Retrieves all quotes belonging to the specified category.

### Add Quote

-   **POST /quotes:** Adds a new quote to the specified category. Requires a JSON body with `category` and `quote` fields.

### Delete Category

-   **DELETE /quotes/:category:** Deletes the entire category of quotes.

## Technologies Used

-   **Express.js:** Web application framework for Node.js.
-   **Node.js:** JavaScript runtime environment.
-   **RESTful API:** Standard architectural style for designing networked applications.
-   **JSON:** Lightweight data interchange format for transmitting data between a server and a web application.

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the server: `npm start`
4. Access the API endpoints using a tool like Postman or a web browser.

## Contributions

Contributions to enhance the API's functionality, improve error handling, optimize performance, or fix any issues are welcome. Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
