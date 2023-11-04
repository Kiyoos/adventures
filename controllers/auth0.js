// const express = require('express');
// const app = express.Router();
// const { auth } = require('express-openid-connect');

// configuation of auth0 login
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

const getLogInOut = (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
};

module.exports = { config, getLogInOut };
