const express = require('express');
const path = require('path'); 
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/projects', (req, res) => {
    res.render('projects'); 
});
app.get('/contact', (req, res) => {
    res.render('contact'); 
});
app.get('/about', (req, res) => {
    res.render('about'); 
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});