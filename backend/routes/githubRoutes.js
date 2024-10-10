const express = require('express');
const passport = require('passport');
const githubController = require('../controllers/githubController');

const router = express.Router();

router.get('/auth', passport.authenticate('github', { scope: ['user:email'] }));


router.get('/auth/callback', 
    passport.authenticate('github', { failureRedirect: '/' }),
    githubController.handleAuthSuccess
);


router.delete('/remove/:username', githubController.removeIntegration);

router.get('/', githubController.getAllIntegrations);

module.exports = router;
