const express = require('express');
const app = express();
const logger = require('./logger');

const port = 5001;

app.get('/', (req, res) =>{
    res.send('Hello World');
    console.log("Wurzel Route aufgerufen");
    logger.info('Wurzel Route aufgerufen');
});

app.get('/hallo', (req, res) =>{
    res.send('Hallo Welt');
    console.log("Hallo Welt Route aufgerufen");
    logger.info('Hallo Welt Route aufgerufen');
});

app.get('/bye', (req, res) =>{
    res.send('Bye Bye');
    console.log("Bye Route aufgerufen");
    logger.info('Bye Route aufgerufen');
});

app.get("/error", (req, res) => {
  res.status(404).send("404 error")
  logger.error("Seite nicht erreichbar: Route /error")
})

app.listen(port, () => {
    console.log(`Server läuft auf ${port}`);
    logger.info(`Server läuft auf ${port}`);
});


