// Uncomment the code below and write your tests
import {
  BankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
} from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const initial = 1115;
    const newAccount = new BankAccount(initial);
    expect(newAccount.getBalance()).toBe(initial);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const newAccount = new BankAccount(1115);
    expect(() => newAccount.withdraw(1116)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const newAccount1 = new BankAccount(1115);
    const newAccount2 = new BankAccount(1119);
    expect(() => newAccount1.transfer(111111, newAccount2)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const newAccount1 = new BankAccount(1115);
    expect(() => newAccount1.transfer(111111, newAccount1)).toThrow(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    const newAccount1 = new BankAccount(1115);
    newAccount1.deposit(2);
    expect(newAccount1.getBalance()).toBe(1117);
  });

  test('should withdraw money', () => {
    const newAccount1 = new BankAccount(1115);
    newAccount1.withdraw(2);
    expect(newAccount1.getBalance()).toBe(1113);
  });

  test('should transfer money', () => {
    const newAccount1 = new BankAccount(1115);
    const newAccount2 = new BankAccount(1119);
    newAccount1.transfer(1, newAccount2);
    expect(newAccount1.getBalance()).toBe(1114);
    expect(newAccount2.getBalance()).toBe(1120);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const newAccount1 = new BankAccount(1115);
    newAccount1.fetchBalance = jest.fn().mockResolvedValue(48);
    const balance = await newAccount1.fetchBalance();
    expect(balance).toEqual(expect.any(Number));
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const newAccount1 = new BankAccount(50);
    const mockBalance = 49;
    newAccount1.fetchBalance = jest.fn().mockResolvedValue(mockBalance);
    await newAccount1.synchronizeBalance();
    expect(newAccount1.getBalance()).toBe(mockBalance);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const newAccount1 = new BankAccount(1115);
    newAccount1.fetchBalance = async () => null;
    await expect(newAccount1.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
