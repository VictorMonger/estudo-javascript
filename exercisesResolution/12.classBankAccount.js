class BankAccount {
  constructor (clientName, accountNumber, balance,){
    if (balance <= 0) {
      throw new Error ('The balance must be greater than zero to create a new account!');
    }
    this.clientName = clientName;
    this.accountNumber = accountNumber;
    this.balance = balance;  
    this.bankStatement = [];
  }

  getBankStatement(operation){
    this.bankStatement.push(operation);
  }
  
  setWithdrawal(value){
    if(value > this.balance){
      throw new Error('Insufficient balance!');
    }
    this.balance = this.balance - value;
    this.getBankStatement(`Withdrawal of ${value} - New balance: ${this.balance}`);
  }
  
  setDeposit(value){
    if (value <= 0) {
      throw new Error('The deposit must be greater than zero');
    }
    this.balance = this.balance + value;
    this.getBankStatement(`Deposit of ${value} - New balance: ${this.balance}`);
  }
}

const client1 = new BankAccount ('Victor Gabriel dos Santos Monger', '23443200', 1000);
const client2 = new BankAccount ('Diogo Felipe Stefano Monger', '24554200', 30000);

client1.setDeposit(600);
client1.setWithdrawal(300);

client2.setDeposit(11000);
client2.setWithdrawal(15000);

console.log(client1);
console.log(client2);

