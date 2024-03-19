// registrationController.js

const { calculateFee } = require('../models/registrationModel');

function register(req, res) {
  try {
    const { id, fullname, address, status } = req.body;
    const fee = calculateFee(status);

    const responseData = {
      id,
      fullname,
      address,
      status,
      fee: `$${fee}`,
    };

    console.log(responseData);
    res.status(200).send(responseData);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = { register };
