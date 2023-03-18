const express = require('express');
const router = express.Router();
const {login, register, findAllUsers} = require('./Controllers/UserController');
var bodyParser = require('body-parser');

const notFound = (error, req, res) => {
    res.status(404).send(error)
}

router.use(bodyParser.json());
router.get('/', (req, res)=>{
    res.send("Node-MongoDB-JWT")
});

router.post('/login', login)
router.post('/register', register)
router.get('/users', findAllUsers)
router.use(notFound);

module.exports = router;