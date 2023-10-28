const express = require('express');
const router = express.Router();
const oauthController = require('../controllers/oauth');
// const validation = require('../middleware/validate');
const axios = require('axios');

router.get('/', oauthController.oauthConnect);
// router.get('/oauth-callback?code=', oauthController.oauthCallback);

// router.get('/success', oauthController.oauthSuccess);
/*
router.get('/oauth-callback', ({ query: { code } }, res) => {
  const body = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_SECRET,
    code
  };
  const opts = { headers: { accept: 'application/json' } };
  axios
    .post('https://github.com/login/oauth/access_token', body, opts)
    .then((_res) => _res.data.access_token)
    .then((token) => {
      // eslint-disable-next-line no-console
      console.log('My token:', token);

      res.redirect(`/?token=${token}`);
    })
    .catch((err) => res.status(500).json({ err: err.message }));
});*/

module.exports = router;
