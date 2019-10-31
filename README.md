## Getting started
There are two elements required to run this project, the `server` and `client`.

Open a terminal and run `npm i` to install all dependencies.

### Server
The server is a Node.js server, which uses the Express framework in order to use Socket.io

To start the server, type `nodemon server/server` from the main project directory.

#### Env file
An `env` file is required to access the IEXCloud service, which is the API used to fetch stock data.

Ensure a .env file is created in the root project directory, with a `TOKEN` entry that's assigned to your unique API key. E.g. `TOKEN=Tsk_d2f189.........9992a3ad744`

### Client
The client side is build with:
* React
* Redux

To start the client, type `npm start` from the main project directory.

#### Running Tests
To run a test, run `npm run test` 
