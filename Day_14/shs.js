
//Activity 5: Private Fields

// Task 09 -
class Account {
    #balance
    constructor(initialBalance = 0) {
        this.#balance = initialBalance
    }

    get accountBalance() {      //READ HERE - https://meta.ai/s/Cwwa7bpdWEVmYZhC/
        return this.#balance
    }

    depositeAmount(amount) {
        if (!(amount >= 0)) console.log("Invalid Deposite Amount");
        this.#balance = this.#balance + amount
        return `Deposited ${amount}/-`;
    }

    withdrawAmount(amount) {
        if (!(amount >= 0 && amount <= this.#balance)) console.log("Invalid Withdraw Amount");
        this.#balance = this.#balance - amount
        return `Withdrawn ${amount}/-`;
    }
}

//Task 10 -
let personOneAccount = new Account(0);
console.log("Initial Account Ballance: ", personOneAccount.accountBalance);
console.log(personOneAccount.depositeAmount(10000));
console.log("New Account Balance: ", personOneAccount.accountBalance);
console.log(personOneAccount.withdrawAmount(2000));
console.log("New Account Balance: ", personOneAccount.accountBalance);