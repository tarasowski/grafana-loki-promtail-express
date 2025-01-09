const express = require('express');
const app = express();
const logger = require('./logger');

const port = 5001;

app.get('/', (req, res) =>{
    res.send('Hello World');
    console.log("Wurzel Route aufgerufen");
    logger.info('Wurzel Route aufgerufen');
});

app.get('/Hallo', (req, res) =>{
    res.send('Hallo Welt');
    console.log("Hallo Welt Route aufgerufen");
    logger.info('Hallo Welt Route aufgerufen');
});

app.get('/Bye', (req, res) =>{
    res.send('Bye Bye');
    console.log("Bye Route aufgerufen");
    logger.info('Bye Route aufgerufen');
});

app.listen(port, () => {
    console.log(`Server läuft auf ${port}`);
    logger.info(`Server läuft auf ${port}`);
});


