const express = require("express"); // Import the express module
const app = express(); // Create an instance of an Express application
const db = require("./db"); // Import the database connection module

const bodyParser = require("body-parser"); // Import the body-parser middleware

const personRoutes = require('./routes/personRoutes'); // Import the person routes module
const menuRoutes = require('./routes/menuRoutes'); // Import the menu routes module

app.use(bodyParser.json()); // Use body-parser middleware to parse JSON requests

// Define the home route
app.get("/", (req, res) => {
  res.send("This is home page");
});

// Use the person routes for any requests to /person
app.use('/person', personRoutes);

// Use the menu routes for any requests to /menu
app.use('/menu', menuRoutes);

// Start the server and listen on port 3300
app.listen(3300, () => {
  console.log("Server is started at http://localhost:3300");
});
