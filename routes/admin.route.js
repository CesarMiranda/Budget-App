const express = require('express');

const adminController = require('./../controllers/admin.controller');
const router = express.Router();

router.get('/transactions', adminController.transactions);
router.get('/add-transaction', adminController.getAddTransaction);
router.post('/add-transaction', adminController.onAddTransaction);

module.exports = router;
