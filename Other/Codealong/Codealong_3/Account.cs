namespace Codealong_3;

public class Account
{
    private double _balance;
    private string _type;

    public double Balance => _balance;
    public string Type => _type;
    
    public Account(double balance, string type)
    {
        _balance = balance;
        _type = type;
    }

    public void PrintAccountInfo()
    {
        Console.WriteLine($"Account Type: {Type},  Balance: {Balance}");
    }
    
    public void Deposit(double amount)
    {
        _balance += amount;
        PrintAccountInfo();
        
    }
  
    public void Transfer(double amount, Account to)
    {
        Console.WriteLine("\n1. Transfer from savings? or \n2. Transfer to savings?");
        switch (Console.ReadLine())
        {
            case "1":
                _balance -= amount;
                to._balance += amount;
                PrintAccountInfo();
                to.PrintAccountInfo();
                
                break;
            case "2":
                to._balance -= amount;
                _balance += amount;
                PrintAccountInfo();
                to.PrintAccountInfo();
                break;
            default:
                Console.WriteLine("Invalid input");
                break;
        }
        
    }
    public void Withdraw(double amount)
    {
        _balance -= amount;
        PrintAccountInfo();

    }
}