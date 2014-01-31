/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
        _ = require('underscore');

var sendgrid  = require('sendgrid')(
  process.env.SENDGRID_USERNAME,
  process.env.SENDGRID_PASSWORD
);

exports.render = function(req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : "null"
    });
};

exports.sendMail = function(req, res) {
    
    sendgrid.send({
        to: process.env.MAIL_ADMIN,
        from: req.body.email,
        subject: 'Contact via le Portfolio: mail de ' + req.body.nom,
        text: req.body.text
    }, function(err, json) {
        if (err) {
            console.log(err);
            res.jsonp({"status":"ERROR: see server log for more information!"});
        }
        else {
            res.jsonp({"status":"Mail sent"});
        }
    });
    
};
