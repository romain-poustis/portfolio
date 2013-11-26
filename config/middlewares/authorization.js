/**
 * Generic require login routing middleware
 */
exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

/**
 * User authorizations routing middleware
 */
exports.user = {
    hasAuthorization: function(req, res, next) {
        if (req.profile.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

/**
 * Realisation authorizations routing middleware
 * there is only one, but we have to protect the 
 * REST webservice
 */
exports.realisation = {
    hasAuthorization: function(req, res, next) {
        if (req.realisation.user.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};