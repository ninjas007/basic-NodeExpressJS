// load express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const database = require('./database');

// set template engine
app.set('view engine', 'ejs');
app.set('views', __dirname = './views');

app.use(express.static('public')); // use css or javascript
app.use(bodyParser.urlencoded({ extended:true })); // use body parser // untuk mereturn middleware function yang dikirmkan post

app.get('/', (req, res) => {
    let data = {
        title: 'Our client',
        projects: ['Facebook', 'Amazon', 'Google']
    }
    res.render('index', data);
});

app.get('/profile', (req, res) => {
    let data = {
        profile: {
            name: 'Alex',
            age: '20'
        },
        page: 'Halaman Profile'
    }
    res.render('profile', data);
});

var guestList = [];

app.get('/guest', (req, res) => {
    let data = {
        page: 'Guest',
        guests: guestList
    }
    res.render('guest', data);
});

app.post('/guest', (req, res) => {
    // masukkan inputan kedalam variabel guestlist
    guestList.push(req.body.name);

    res.redirect('/guest');
});

app.get('/articles', (req, res) => {
    database.Article.findAll() // return findall object promise makan bisa kita pake then
    .then(function(articles){
        let data = {
            page: 'Article',
            articles: articles
        };

        res.render('article-list', data);
    })
    .catch(function(err){
        res.send(err)
    })
    
})

module.exports = app;