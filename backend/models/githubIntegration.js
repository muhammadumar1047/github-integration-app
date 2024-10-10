const mongoose = require('mongoose');

const githubIntegrationSchema = new mongoose.Schema({
    username: { type: String, required: true },
    accessToken: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GithubIntegration', githubIntegrationSchema);
