const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override');
const pageController = require('./controllers/pageController');
const postController = require('./controllers/postController');

const app = express();

//connect db
mongoose.connect('mongodb://localhost:27017/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Template engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

app.get('/', pageController.getHomePage);
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPostPage);
app.get('/posts/:id', pageController.getShowPostPage);
app.get('/posts/edit/:id', pageController.getEditPostPage);

app.post('/posts', postController.addPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} da çalışmaya başladı...`);
});
