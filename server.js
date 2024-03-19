// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { register } = require('./controllers/registrationController');

const app = express();
const port = 3000;

// Enable All CORS Requests
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

// Route for handling registrations
app.post('/register', register);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
