There are two elements required to run this project, the `server` and `client`.

Open a terminal and run `npm i` first to install all dependencies from `package.json`

## Server
The server is a Node.js server, which uses the Express framework in order to use Socket.io

To start up the server, type `nodemon server/server` from the main project directory.

* socket.io: a library that enables real-time, bidirectional and event-based communication between browser and server.
* axios: an npm package to help fetch data
* express: fast, unopinionated, minimalist web framework for Node.js

#### API
We used [IEX Cloud](https://iexcloud.io) to provide us stock data.

#### Env file
An `env` file is required to access the IEXCloud service, which is the API used to fetch stock data.

Ensure a .env file is created in the root project directory, with a `TOKEN` entry that's assigned to your unique API key. E.g. `TOKEN=Tsk_d2f189.........9992a3ad744`

## Client
The client side is build with:
* React
* Redux

To start the client, type `npm start` from the main project directory. This will
* Spin up a local server on a local port (usually `3000` unless specified)
* Load the React application and render it into the browser

#### Running Tests
We use Jest for testing.

To run all tests, run `npm run test` 
