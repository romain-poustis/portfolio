/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Realisation = mongoose.model('Realisation'),
    _ = require('underscore');


/**
 * Find realisation by id
 */
exports.realisation = function(req, res, next, id) {
    Realisation.load(id, function(err, real) {
        if (err) return next(err);
        if (!real) return next(new Error('Failed to load realisation ' + id));
        req.real = real;
        next();
    });
};

/**
 * Create a realisation
 */
exports.create = function(req, res) {
    var real = new Realisation(req.body);
    real.user = req.user;

    real.save(function(err) {
        if (err) {
            return res.send('users/signin', {
                errors: err.errors
            });
        } else {
            res.jsonp(real);
        }
    });
};

/**
 * Update a realisation
 */
exports.update = function(req, res) {
    var real = req.real;

    real = _.extend(real, req.body);

    real.save(function(err) {
        res.jsonp(real);
    });
};

/**
 * Delete a realisation
 */
exports.destroy = function(req, res) {
    var real = req.real;

    real.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(real);
        }
    });
};

/**
 * Show a realisation
 */
exports.show = function(req, res) {
    res.jsonp(req.real);
};

/**
 * List of all realisations
 */
exports.all = function(req, res) {
    Realisation.find().sort('-date').populate('user', 'name username').exec(function(err, reals) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            var all = [];
            reals.map( function(e) {
                all.push({id: e.id, imageUrl: e.images[0], name: e.titre});
            });
            res.jsonp(all);
        }
    });
};
