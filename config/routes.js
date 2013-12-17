module.exports = function(app, passport, auth) {
    // ----------------------- //
    //      User Routes
    // ----------------------- // 
    var users = require('../app/controllers/users');
    
    app.get('/signout', users.signout);

    //Setting up the users api
    app.post('/users', users.create);

    app.post('/users/session', passport.authenticate('local', {
        failureRedirect: '/#!/signin/',
        failureFlash: 'Invalid email or password.'
    }), users.session);

    app.get('/users/me', users.me);
    app.get('/users/:userId', users.show);

    //Finish with setting up the userId param
    app.param('userId', users.user);


    // --------------------------- //
    //      Realisation Routes
    // --------------------------- //
    var realisations = require('../app/controllers/realisations');
    
    // Realisations CRUD
    app.post('/realisation', auth.requiresLogin, realisations.create);
    app.get('/realisations/:realisationId', realisations.show);
    app.put('/realisations/:realisationId', auth.requiresLogin, auth.realisation.hasAuthorization, realisations.update);
    app.del('/realisations/:realisationId', auth.requiresLogin, auth.realisation.hasAuthorization, realisations.destroy);

    // thumbnails
    app.get('/thumbnails', realisations.all);

    //Finish with setting up the realisationId param
    app.param('realisationId', realisations.realisation);


    // --------------------------- //
    //      Home Routes
    // --------------------------- //
    var index = require('../app/controllers/index');
    app.get('/', index.render);

};
