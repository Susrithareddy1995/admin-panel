const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3130;

//set ejs as the template engine
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static('public'));


//in memeory data store
const items = [];

//routes
app.get('/', (req, res) => {
    res.render('index', { items: items });
});

app.post('/add', (req, res) => {
    const item = req.body.item;
    if(item) {
        items.push(item);
    }
    res.redirect('/');

});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});
