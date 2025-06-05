namespace Codealong_3;

// Nettbank
// Du skal lage en konsollapp som oppfører seg som en nettbank. 
// Man skal kunne se hvor mye man har på konto, sette inn penger og overføre penger til en annen konto
class Program
{
    static void Main(string[] args)
    {
        Bank bank = new Bank();
        Shop shop = new Shop();
        Account checking = new Account(100, "checking");
        Account savings = new Account(100000, "savings");
        
        Bank.accounts.AddRange(checking, savings);
        while (true)
        {
            Console.WriteLine("What would you like to do?\n 1. Go shopping.\n 2. Go to your bank.");
            switch (Console.ReadLine())
            {
                case "1":
                    shop.Shopping(checking);
                    break;
                case "2":
                    bank.MoneyActions(checking, savings);
                    break;
                default:
                    Console.WriteLine("Invalid input");
                    break;
            }
        }
    }
}