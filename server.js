const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // explicit views folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index', { name: 'Bipin' }); // shorter looks better in the hero
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('index', { name: 'Bipin' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});