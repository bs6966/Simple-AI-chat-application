# AI Chat Application

This project is a simple AI chat application with a React frontend and a Node.js backend.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- [npm](https://www.npmjs.com/) (Comes with Node.js)

## Getting Started

### Frontend Setup

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the frontend:

    ```bash
    npm start
    ```

   The application will be available at http://localhost:3000.

### Backend Setup

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the backend server:

    ```bash
    node server.js
    ```

   The server will be running at http://localhost:3001.

## Usage

1. Visit http://localhost:3000 in your web browser.
2. Type a message and click "Send" to interact with the AI.

## Additional Notes

- If you encounter any issues, make sure the backend server is running, and the frontend is pointing to the correct backend URL (update `MessageInputField.js` if needed).
- Customize the predefined responses in the `server.js` file to enhance the AI's interaction.
