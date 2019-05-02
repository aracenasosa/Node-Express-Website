
const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    /*res.sendFile(path.join(__dirname, 'Index.html'));
    console.log(path.join(__dirname, 'Index.html'));*/
    res.render('Index.html', { title: 'First Node Website' });
})

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Page' });
})

module.exports = router;
