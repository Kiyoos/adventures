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
  }).then((response) => {
    res.redirect(`http://localhost:8080?access_token=${response.data.access_token}`);
  });
};

module.exports = {
  oauthConnect,
  oauthCallback
  // oauthSuccess
};
