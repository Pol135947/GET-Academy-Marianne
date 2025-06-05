namespace Codealong_3;

public class Account
{
    private double _balance; // Private backing field for the balance
    private string _type;    // Private backing field for the type

    // Public properties to access the balance and type.
    // 'get' allows reading, but no 'set' ensures they are modified only through methods.
    public double Balance
    {
        get { return _balance; }
        // We generally don't want a public set here, as modifications should go through Deposit/Withdraw/Transfer
    }
    public string Type
    {
        get { return _type; }
    }

    // Constructor to initialize an account
    public Account(double initialBalance, string type)
    {
        // Ensure initial balance is not negative (or enforce a minimum)
        if (initialBalance < 0)
        {
            throw new ArgumentException("Initial balance cannot be negative.");
        }
        _balance = initialBalance;
        _type = type;
        Console.WriteLine($"Account created: Type: {_type}, Balance: {_balance:C}");
    }

    // Method to print account information
    public void PrintAccountInfo()
    {
        Console.WriteLine($"Account Type: {Type}, Balance: {Balance:C}"); // Added currency formatting
    }

    // Method to deposit money into the account
    public void Deposit(double amount)
    {
        if (amount <= 0)
        {
            Console.WriteLine("Deposit amount must be positive.");
            return;
        }
        _balance += amount;
        Console.WriteLine($"Deposited {amount:C}.");
        PrintAccountInfo(); // Print updated info
    }

    // Method to withdraw money from the account
    public void Withdraw(double amount)
    {
        if (amount <= 0)
        {
            Console.WriteLine("Withdrawal amount must be positive.");
            return;
        }
        if (_balance < amount) // Crucial: Check for insufficient funds
        {
            Console.WriteLine($"Insufficient funds. Current balance: {Balance:C}. Attempted withdrawal: {amount:C}.");
            return; // Exit method if not enough funds
        }
        _balance -= amount;
        Console.WriteLine($"Withdrew {amount:C}.");
        PrintAccountInfo(); // Print updated info
    }

    // Method to transfer money from this account to another account
    public void Transfer(double amount, Account toAccount)
    {
        if (amount <= 0)
        {
            Console.WriteLine("Transfer amount must be positive.");
            return;
        }
        if (toAccount == null) // Check if the target account is valid
        {
            Console.WriteLine("Invalid target account for transfer.");
            return;
        }
        if (this == toAccount) // Prevent transferring to the same account
        {
            Console.WriteLine("Cannot transfer to the same account.");
            return;
        }
        if (_balance < amount) // Crucial: Check for insufficient funds in the source account
        {
            Console.WriteLine($"Insufficient funds in {this.Type} account. Current balance: {Balance:C}. Attempted transfer: {amount:C}.");
            return; // Exit method if not enough funds
        }

        // Perform the transfer
        _balance -= amount; // Deduct from this account (source)
        toAccount._balance += amount; // Add to the target account

        Console.WriteLine($"Transferred {amount:C} from {this.Type} to {toAccount.Type}.");
        Console.WriteLine($"--- {this.Type} Account ---");
        this.PrintAccountInfo();
        Console.WriteLine($"--- {toAccount.Type} Account ---");
        toAccount.PrintAccountInfo();
    }
}