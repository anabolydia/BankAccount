const bankAccount = require('./bankAccount');

test('Bank account has amout, current balance, withdraw and deposite',() =>{
    expect(bankAccount('string')).toBe('invalid input');
});
   
test('it provides the values for the new constructor',() =>{
expect(
    bankAccount(balance, amount,withdraw,deposit)
).toEqual(
    {'balance':1000,'amout':600,'withdraw':200,'deposit':500}
);

});
test('if active then open',() =>{
    expect(bankAccount(isActive),toEqual('True'))
});
test('if is not active then close',() =>{
    expect(bankAccount(!isActive),toEqual('False'))
});
   
   