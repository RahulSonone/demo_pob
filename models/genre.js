var mongoose = require('mongoose');

// schema

var genreSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    }
});

var genre = module.exports = mongoose.model('genre',genreSchema);

// get genres

module.exports.getGenres = function(callback,limit){
genre.find(callback).limit(limit);
}

module.exports.getGenresById = function(id,callback){
    genre.findById(id,callback);
}

// add genres

module.exports.addGenres = function(gen,callback){
    genre.create(gen,callback);
}


module.exports.add=function(req,res)
{
	console.log("rahul bro");
}