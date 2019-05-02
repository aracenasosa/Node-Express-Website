const express = require('express');
const path = require('path');
const app = express();

// Setting
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(require('./routes/router'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});