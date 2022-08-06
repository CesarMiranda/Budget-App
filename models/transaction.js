const mongodb = require('mongodb');
const getDb = require('./../utils/database').getDb;

class Transaction {
  constructor(title, type, category, amount, id, userId) {
    this.title = title;
    this.type = type;
    this.category = category;
    this.amount = amount;
    this.userId = userId;
    this._id = id ? mongodb.ObjectId(id) : null;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      // Update Transaction
      dbOp = db
        .collection('transactions')
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      // Insert the transaction
      dbOp = db.collection('transactions').insertOne(this);
    }

    return dbOp.then(console.log).catch(console.log);
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('transactions')
      .find()
      .toArray()
      .then((transactions) => {
        console.log(transactions);
        return transactions;
      })
      .catch(console.log);
  }
}

module.exports = Transaction;
