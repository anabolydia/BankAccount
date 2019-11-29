class  bankAccount {
    constructor(deposit,balance,amount, withdraw) {
        this.deposit =  deposit;
        this.withdraw = withdraw;
        this.amount =amount;
        this.current_balance = balance;
        
    const bankAccount1 =new  bankAccount(500, 400,600,200)   
    }
    
   getBalance() {
        {
       return this.current_balance  + this.amount; 
         
       }
    }

    open() {
      if(isActive) {
          return true;
      } else false; 
    }

    deposit() {
        
       return this.deposit;
          }

    withdraw() {
      return this.withdraw;
        }

    close(){
     if(!active) {
    return true;
    }else false;
    
}
    };
    module.exports = bankAccount;
