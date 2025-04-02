const express = require("express");
const router = express.Router()

const {Register, AddUser}= require("../controllers/admin.controller");


router.post('/register', Register)
router.post('/adduser', AddUser)


module.exports = router;