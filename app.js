const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
genre = require('./models/genre');
const jwt = require('jsonwebtoken');
var rahul=require('./models/genre')
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mean_demo');
var db = mongoose.connection;

app.get('/',function(req,res){
    res.send('hello');
});

app.get('/api/genres',function(req,res){
    genre.getGenres(function(err,genres){
       res.json(genres);     
    })
});

app.get('/api/genres/:id',function(req,res){
    genre.getGenresById(req.params.id,function(err,genre){
       res.json(genre);     
    })
});

app.post('/api/genres',function(req,res){
    genre.addGenres(req.body,function(err,genres){
       res.json(genres);     
    })
});

//app.get('/api/demo',rahul.add);

app.post('/api/login',function(req,res){
    const user = {
        username:'brad',
        email:'acb@gmail.com'
    }
    jwt.sign({user:user},'secretkey',function(err,token){
        res.json({
            token:token
        })
    })
});

app.listen(3000);
  
