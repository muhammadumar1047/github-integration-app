const GithubIntegration = require('../models/githubIntegration');


exports.handleAuthSuccess = async (req, res) => {
    console.log("controller triggered");
    const newIntegration = new GithubIntegration({
        username: req.user.profile.username,
        accessToken: req.user.accessToken,
    });
    await newIntegration.save();
    //res.json({ message: "Successfully connected to GitHub!", user: req.user.profile });
    res.redirect('http://localhost:4200');
    
};

exports.removeIntegration = async (req, res) => {
    await GithubIntegration.deleteOne({ username: req.params.username });
    res.json({ message: "Integration removed." });
};


exports.getAllIntegrations = async (req, res) => {
    const integrations = await GithubIntegration.find();
    res.json(integrations);
};




