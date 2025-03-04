const express = require('express');
const mysqlcommand = require('./connectmysql');
const send = require('./nodemailer');

const app = express();

app.get('/test', (req, res) => {

    mysqlcommand.query('SELECT * FROM person, poll WHERE person.idPerson = poll.idPerson', (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return;
        }
        res.json(results);
        res.end();
        send();
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});