exports.getAddTransaction = (req, res) => {
  res.render('pages/admin/edit-transaction', {
    pageTitle: 'Add Transaction',
    path: '/admin/add-transaction',
    editing: false
  })
};
