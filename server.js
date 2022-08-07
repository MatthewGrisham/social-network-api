const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.Port || 3001;

app.use(EXPRESS.JSON());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(process.env.MONGOB_URI || 'mongodb://localhost/social-network-API', {
    userFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Use this to log mongo queries beign executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));