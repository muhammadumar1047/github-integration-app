const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const githubStrategy = new GitHubStrategy({
    clientID: 'Ov23limqzDegLERIB2BA',
    clientSecret: '8102044aa41f548e19ec26aef69055bc73c10003',
    callbackURL: "http://localhost:3000/api/github/auth/callback" 

},
async (accessToken, refreshToken, profile, done) => {
    return done(null, { accessToken, profile });
});

module.exports = { githubStrategy };
