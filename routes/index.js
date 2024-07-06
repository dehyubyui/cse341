const express = require('express');
const router = express.Router();

routes.use('/', require('./swagger'));

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.use('/users', require('./users'));

module.exports = router;