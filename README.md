<p align="center">
  <i>Do you like my work? Buy me a coffee!</i><BR>
  <a href="https://www.buymeacoffee.com/grzegorz.opara" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
  <BR><BR>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Amazon_Kindle_logo.svg/388px-Amazon_Kindle_logo.svg.png">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/200px-Plus_symbol.svg.png" width="100" height="100">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/240px-Notion-logo.svg.png" width="100" height="100">
  
  <p align="center">(Front end)</p>
</p>


# Kindle to Notion (FE)
This repository contains the frontend application for the Kindle to Notion project. This application allows users to upload Kindle books and automatically create Notion pages with the book's content.

## Getting Started

### Prerequisites:
- Node.js and npm (or yarn) installed on your system.
- A Notion account with a database created for storing book information.
- A Notion API key.
- Backend service (https://github.com/GrzegorzOpara/kindle-to-notion) up and running on your local machine (http://172.0.0.1:8080).

### Installation:
- Clone this repository.
- Navigate to the project directory in your terminal.
- Run ``npm install`` to install dependencies.

### Running the Project:
- Run ``npm run dev`` to start the development server.
- The application will be accessible at http://localhost:5173/.

## Usage
- Navigate to http://localhost:5173/
- In the application, enter your Notion API key and the ID of the database you want to use for storing book information.
Select a Kindle Book:
- Click the "Select File" button to choose a Kindle book from your computer.
- Click the "Send to Notion" button to upload the book and create Notion pages.

The application will display a success or error message depending on the outcome of the upload.

You can then view the created Notion pages in your Notion workspace.

## Features
- File Upload: Allows users to select a Kindle book file.
- Notion Integration: Uses the Notion API to create pages in a specified database.
- Progress Indicator: Displays a progress bar while the book is being uploaded and processed.
- Error Handling: Provides informative error messages if the upload fails.

## Technologies Used
- React: JavaScript library for building user interfaces.
- Material UI: React component library for building beautiful and functional user interfaces.
- Axios: Promise-based HTTP client for making API requests.
- Vite: Fast development server and build tool.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- [Notion API Documentation](https://developers.notion.com/reference/intro)
- [Material UI](https://mui.com/)
- [Axios](https://axios-http.com/)
- [Vite](https://vitejs.dev/)