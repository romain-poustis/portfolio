var cloudinary = require('cloudinary'),
    fs = require('fs'),
    _ = require('underscore');

exports.upload = function(req, res){
  var imageStream = fs.createReadStream( req.files.image.path, { encoding: 'binary' } );
  var cloudStream = cloudinary.uploader.upload_stream( function() { res.redirect( req.redirect.url ); });

  imageStream.on('data', cloudStream.write).on('end', cloudStream.end);
};



