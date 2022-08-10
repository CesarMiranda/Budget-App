const Transaction = require('../models/transaction');

exports.transactions = (req, res) => {
  res.render('pages/admin/transactions', {
    pageTitle: 'Transactions',
    path: '/admin/transactions'
  })
};

exports.getAddTransaction = (req, res) => {
  res.render('pages/admin/edit-transaction', {
    pageTitle: 'Add Transaction',
    path: '/admin/add-transaction',
    editing: false,
  });
};

exports.onAddTransaction = (req, res) => {
  const title = req.body.title;
  const type = req.body.type;
  const category = req.body.category;
  const amount = req.body.amount;

  const transaction = new Transaction(title, type, category, amount);
  transaction
    .save()
    .then(() => console.log('Transaction Created'))
    .catch(console.log);
};
