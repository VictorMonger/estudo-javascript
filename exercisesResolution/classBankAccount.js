class BankAccount {
  constructor(clientName, accountNumber, balance) {
    if (balance <= 0) {
      throw new Error('The balance must be greater than zero to create a new account!');
    }
    this.clientName = clientName;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.bankStatement = [];
  }

  addBankStatement(operation) {
    this.bankStatement.push(operation);
  }

  getBankStatement() {
    this.bankStatement.forEach(operation => {
      console.log(`${operation.type} - value: ${operation.ammount} - New balance: ${operation.balance}`)
    });
  }

  withdrawal(value) {
    if (value > this.balance) {
      throw new Error('Insufficient balance!');
    }
    this.balance = this.balance - value;
    this.addBankStatement({
      type: 'withdrawal', 
      ammount: value, 
      balance: this.balance
      
    });
  }

  deposit(value) {
    if (value <= 0) {
      throw new Error('The deposit must be greater than zero');
    }
    this.balance = this.balance + value;
    this.addBankStatement({
      type: 'deposit', 
      ammount: value, 
      balance: this.balance
    });
  }
}

const client1 = new BankAccount('Victor Gabriel dos Santos Monger', '23443200', 1000);
const client2 = new BankAccount('Diogo Felipe Stefano Monger', '24554200', 30000);

client1.withdrawal(1000);
client1.deposit(2000)

client2.deposit(11000);
client2.withdrawal(15000);

console.log(client1)
console.log(client2)
