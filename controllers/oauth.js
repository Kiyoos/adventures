const axios = require('axios');

const oauthConnect = async (req, res) => {
  try {
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.githubClientId}`
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// const oauthCallback = async (req, res) => {
//   axios({
//     method: 'POST',
//     url: `https://github.com/login/oauth/access_token?client_id=${process.env.githubClientId}&client_secret=${process.env.githubSecret}&code=${req.query.code}`,
//     headers: { Accept: 'application/json' }
//   }).then((response) => {
//     res.redirect(`http://localhost:8080?access_token=${response.data.access_token}`);
//   });
// };

/*
const oauthCallback = async (req, res) => {
  try {
    const requestToken = req.query.code;
    axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token?client_id=${process.env.githubClientId}&client_secret=${process.env.githubSecret}&code=${requestToken}`,
      headers: { accept: 'application/json' }
    }).then((res) => {
      const access_token = res.data.access_token;
      res.redirect('/success');
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const oauthSuccess = async (req, res) => {
  axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      Authorization: 'token ' + access_token
    }
  }).then((res) => {
    res.render('/success', { userData: res.data });
  });
};
*/
/*
const oauthCallback = async ({ query: { code } }, res) => {
  const body = {
    clientId: process.env.githubClientId,
    clientSecret: process.env.githubSecret,
    code
  };
  console.log(body);
  const opts = { headers: { accept: 'application/json' } };
  axios
    .post('https://github.com/login/oauth/access_token', body, opts)
    .then((_res) => _res.data.access_token)
    .then((token) => {
      console.log('My token:', token);
      res.redirect(`/?token=${token}`);
    })
    .catch((err) => res.status(500).json({ err: err.message }));
};
*/
module.exports = {
  oauthConnect
  // oauthCallback
  // oauthSuccess
};
