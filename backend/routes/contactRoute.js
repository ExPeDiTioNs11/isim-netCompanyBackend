const express = require('express');
const { get_contact, create_new_contact} = require('../controllers/contactController')

const router = express.Router();
const { userControl } = require('../middlewares/authMiddleware');

// zincirleme route oluşturma
router.route('/').get(get_contact).post(create_new_contact)

module.exports = router;
