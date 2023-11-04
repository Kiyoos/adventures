const axios = require('axios');

const oauthConnect = async (req, res) => {
  try {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GIT_CLIENT_ID}`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const oauthCallback = async (req, res) => {
  axios({
    method: 'POST',
    url: `https://github.com/login/oauth/access_token?client_id=${process.env.GIT_CLIENT_ID}&client_secret=${process.env.GIT_SECRET}&code=${req.query.code}`,
    headers: { Accept: 'application/json' }
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      res.json(data);
    });
};

const oauthGetUser = async (req, res) => {
  req.get('Authorization');
  await fetch('https://api.github.com/user', {
    method: 'GET',
    headers: {
      Authorization: req.get('Authorization')
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.json(data);
    });
};

module.exports = {
  oauthConnect,
  oauthCallback,
  oauthGetUser
};
