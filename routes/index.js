const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

// Correctly use the router object to require and use the users router
router.use('/users', require('./users'));

module.exports = router;