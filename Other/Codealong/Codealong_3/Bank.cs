namespace Codealong_3;

public class Bank
{
    public static List<Account> accounts = new List<Account>();
    
    public Account ReturnAccount(int index)
    {
        Account activeAccount = accounts[index];
        return activeAccount;
    }

    public void PrintAllAccounts()
    {
        int index = 0;
        foreach (Account account in accounts)
        {
            Console.WriteLine(index + ". " + account.Type);
        }
    }

    public void CreateNewAccount()
    {
        Console.WriteLine("Type of account?");
        string input = Console.ReadLine();
        Console.WriteLine("How much?");
        int input2 = int.Parse(Console.ReadLine());
        
        accounts.Add(new Account(input2, input));
        
    }
    
    public Account ChooseAccount(int number)
    {
        switch (number)
        {
            case '1':
                return accounts[0];
            case '2':
                return accounts[1];
            default:
                Console.WriteLine("Invalid input");
                return null;
        }
    }

    public static Account? ChooseAccount(string type)
    {
        switch (type)
        {
            case "checking":
                return accounts.Find(x => x.Type == "checking");
            case "savings":
                return accounts.Find(x => x.Type == "savings");
            default:
                return null;
        }
    }
    
    public void MoneyActions(Account account, Account account2)
    {
        Console.WriteLine("What do you want to do? \n1. Deposit\n2. Transfer \n3. Withdraw");

        switch (Console.ReadLine())
        {
            case "1":
                Console.WriteLine("Please enter the amount you want to deposit: ");
                double amount = double.Parse(Console.ReadLine());
                account.Deposit(amount);
                break;
            case "2":
                Console.WriteLine("Please enter the amount you want to transfer: ");
                double amount2 = double.Parse(Console.ReadLine());
                account.Transfer(amount2, account2);
                break;
            case "3":
                Console.WriteLine("Please enter the amount you want to withdraw: ");
                double amount3 = double.Parse(Console.ReadLine());
                account.Withdraw(amount3);
                break;
            default:
                Console.WriteLine("Please enter a valid choice: ");
                break;
        }
    }
}