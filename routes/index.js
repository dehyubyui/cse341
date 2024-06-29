const router = require('express').Router();

router.get('/', (req, res) => {res.send('Hello World');});

routes.use('/users', require('./users'));

module.exports = routes;