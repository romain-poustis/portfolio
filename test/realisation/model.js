/**
 * Module dependencies.
 */
var should = require('should'),
    app = require('../../server'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Realisation = mongoose.model('Realisation');

//Globals
var user;
var real;

//The tests
describe('<Unit Test>', function() {
    describe('Model Realisation:', function() {
        beforeEach(function(done) {
            user = new User({
                name: 'Full name',
                email: 'test@test.com',
                username: 'user',
                password: 'password'
            });

            user.save(function(err) {
                real = new Realisation({
                    titre: 'Première réalisation',
                    description: 'Contenu de la réalisation',
                    lien: '',
                    images: ['img1','img2'],
                    tags: [{name: "tag1", lien: "lien1"},{name: "tag2", lien: "lien2"}],    
                    user: user
                });

                done();
            });
        });

        describe('Method Save', function() {
            it('should be able to save without problems', function(done) {
                return real.save(function(err) {
                    should.not.exist(err);
                    done();
                });
            });

            it('should be able to show an error when try to save without title', function(done) {
                real.titre = '';

                return real.save(function(err) {
                    should.exist(err);
                    done();
                });
            });
            
            it('should have a realisation', function(done) {
                Realisation.find({}, function(err, reals){
                    reals.should.have.length(1);
                    done();
                });
            });
        });

        afterEach(function(done) {
            Realisation.remove({});
            User.remove({});
            done();
        });
        after(function(done){
            Realisation.remove().exec();
            User.remove().exec();
            done();
        });
    });
});
