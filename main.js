class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(value) {
    if (value > 0) {
      this.balance += value;
    }
    else {
      console.log("Deposit amount must be positive");
    }
  }

  withdraw(value) {
    if (value > this.balance) {
      console.log("Insufficient funds");
    }
    else if (value <= 0) {
      console.log("Withdrawal amount must be positive");
    }
    else {
      this.balance -= value;
    }
  }

  getBalance() {
    return this.balance;
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300

account1.deposit(-1000);
account1.withdraw(2000);
console.log(account1.getBalance());
