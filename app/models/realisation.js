/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 * Cf: http://mongoosejs.com/docs/schematypes.html
 */
var RealisationSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    titre: {
        type: String,
        default: '',
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    lien: {
        type: String,
        default: '',
        trim: true    
    },
    images: {
        type: [String]
    },
    tags: {
        type: [{ name: String, lien: String }]
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
RealisationSchema.path('titre').validate(function(titre) {
    return titre.length;
}, 'Le titre ne peut pas être vide');

RealisationSchema.path('description').validate(function(description) {
    return description.length;
}, 'La description ne peut pas être vide');

/**
 * Statics
 */
RealisationSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username').exec(cb);
    }
};

mongoose.model('Realisation', RealisationSchema);