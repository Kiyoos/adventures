const oauthConnect = async (req, res) => {
  try {
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.githubClientId}`
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  oauthConnect
};
