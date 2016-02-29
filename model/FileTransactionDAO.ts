/// <reference path="Model.ts"/>
module  Model {
    export class FileTransactionDAO implements TransactionDAO {
        private transactions:Transaction[];

        constructor() {

        }

        getTransactionById(transactionId:number):Transaction {
            return null;
        }

        saveTransaction(transaction:Transaction):Transaction {
            if (transaction.id) {
                this.transactions[transaction.id] = transaction;
            } else {
                transaction.id = this.transactions.length;
                this.transactions.push(transaction)
            }
            return transaction;
        }


    }
}