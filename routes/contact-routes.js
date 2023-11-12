const express = require('express');
const { 
    getContacts,
    getRedirectContacts
    } = require('../controllers/contact-controller');

const router = express.Router();

router.get('/contacts', getContacts);
router.get('/about-us', getRedirectContacts);

module.exports = router;