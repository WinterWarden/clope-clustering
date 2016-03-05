 module  model {
    export class FileTransactionDAO implements TransactionDAO {
        private transactions:{[key:number]: Transaction};
        private idsCounter: number;

        constructor() {
            this.idsCounter = 1;
            this.transactions = this.parseTransactions();
        }

        getTransactionById(transactionId:number):Transaction {
            return this.transactions[transactionId];
        }

        saveTransaction(transaction:Transaction):Transaction {
            if (transaction.id) {
                this.transactions[transaction.id] = transaction;
            } else {
                transaction.id =  this.idsCounter++;
                this.transactions[this.idsCounter] = transaction;
            }
            return transaction;
        }

        private parseTransactions():{[key:number]: Transaction} {
            var transactions:{[key:number]: Transaction} = {};

            return transactions;
        }
    }
}