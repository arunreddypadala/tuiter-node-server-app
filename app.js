import express from 'express';
const app = express();
app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development CS5610!')})
app.listen(4000);