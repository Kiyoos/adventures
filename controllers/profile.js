const getProfile = (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
};

module.exports = { getProfile };
