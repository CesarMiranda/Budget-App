exports.getIndex = (req, res) => {
  res.render('pages/dashboard', {
    path: '/',
    pageTitle: 'Finance App',
  })
};
