module Model {
    export interface TransactionDAO {
        getTransactionById(transactionId:number): Transaction;
        saveTransaction(transaction: Transaction): Transaction;
    }
}