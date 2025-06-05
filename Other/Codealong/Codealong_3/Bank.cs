namespace Codealong_3;

public class Bank
{
    public static List<Account> accounts = new List<Account>();

    public Account ReturnAccount(Account account)
    {
        return account;
    }

    public void PrintAllAccounts()
    {
        int index = 0;
        if (accounts.Count == 0)
        {
            Console.WriteLine("No accounts available.");
            return;
        }
        Console.WriteLine("--- Your Accounts ---");
        foreach (Account account in accounts)
        {
            // Assuming Account has a Balance property for better display
            Console.WriteLine($"{index}. {account.Type} (Balance: {account.Balance:C})");
            index++;
        }
    }

    public void CreateNewAccount()
    {
        Console.Write("Type of account? (e.g., checking, savings): ");
        string inputType = Console.ReadLine(); // Use a new variable for account type
        Console.Write("How much initial deposit? ");
        if (double.TryParse(Console.ReadLine(), out double initialBalance) && initialBalance >= 0) // Use double for balance
        {
            accounts.Add(new Account(initialBalance, inputType));
            Console.WriteLine($"New {inputType} account created with initial balance of {initialBalance:C}.");
        }
        else
        {
            Console.WriteLine("Invalid amount. Account not created.");
        }
    }

    public Account ChooseAccount(int number)
    {
        // Add bounds checking to prevent IndexOutOfRangeException
        if (number >= 0 && number < accounts.Count)
        {
            return accounts[number];
        }
        else
        {
            Console.WriteLine("Invalid account number.");
            return null; // Return null if invalid
        }
    }

    public static Account? ChooseAccount(string type)
    {
        Account account = accounts.Find(x => x.Type.Equals(type, StringComparison.OrdinalIgnoreCase));
        return account;
    }

    public void BankInterface()
    {
        // Removed defaultAccount = ChooseAccount("deposit"); as it was causing null issues.
        // We will select an account *after* the user chooses an action (if needed).

        Console.WriteLine(
            "What do you want to do?\n1. Create new account\n2. Deposit\n3. Transfer\n4. Withdraw\n5. View All Accounts\n6. Exit"); // Added View All and Exit

        string menuChoice = Console.ReadLine(); // Use a descriptive name for menu choice

        switch (menuChoice) // Use a switch for cleaner logic
        {
            case "1":
                CreateNewAccount();
                break;

            case "5": // New case to view all accounts
                PrintAllAccounts();
                break;

            case "6": // New case to exit
                Console.WriteLine("Exiting bank interface. Goodbye!");
                return; // Exit the method

            case "2": // Deposit
            case "3": // Transfer
            case "4": // Withdraw
                if (accounts.Count == 0)
                {
                    Console.WriteLine("You don't have any accounts yet. Please create one first.");
                    break; // Exit switch and go back to menu
                }

                Console.WriteLine("Which account do you want to use for this operation?");
                PrintAllAccounts();
                Console.Write("Enter the account number: ");
                if (int.TryParse(Console.ReadLine(), out int chosenAccountNumber))
                {
                    Account activeAccount = ChooseAccount(chosenAccountNumber); // Use the int version
                    if (activeAccount == null) // Check if ChooseAccount returned null
                    {
                        Console.WriteLine("Account not found. Please try again.");
                        break;
                    }

                    if (menuChoice == "2") // Deposit
                    {
                        Console.Write($"Please enter the amount you want to deposit to {activeAccount.Type}: ");
                        if (double.TryParse(Console.ReadLine(), out double depositAmount) && depositAmount > 0)
                        {
                            activeAccount.Deposit(depositAmount);
                            Console.WriteLine($"Deposited {depositAmount:C}. New balance: {activeAccount.Balance:C}");
                        }
                        else
                        {
                            Console.WriteLine("Invalid deposit amount.");
                        }
                    }
                    else if (menuChoice == "3") // Transfer
                    {
                        Console.Write($"Please enter the amount you want to transfer from {activeAccount.Type}: ");
                        if (double.TryParse(Console.ReadLine(), out double transferAmount) && transferAmount > 0)
                        {
                            // Need to select a TARGET account for transfer
                            Console.WriteLine("To which account do you want to transfer?");
                            PrintAllAccounts();
                            Console.Write("Enter the target account number: ");
                            if (int.TryParse(Console.ReadLine(), out int targetAccountNumber))
                            {
                                Account targetAccount = ChooseAccount(targetAccountNumber);
                                if (targetAccount == null || targetAccount == activeAccount) // Prevent transfer to self or invalid account
                                {
                                    Console.WriteLine("Invalid target account or cannot transfer to the same account.");
                                }
                                else
                                {
                                    activeAccount.Transfer(transferAmount, targetAccount); // Assuming Transfer handles insufficient funds
                                    Console.WriteLine($"Transferred {transferAmount:C} from {activeAccount.Type} to {targetAccount.Type}.");
                                    Console.WriteLine($"{activeAccount.Type} new balance: {activeAccount.Balance:C}");
                                    Console.WriteLine($"{targetAccount.Type} new balance: {targetAccount.Balance:C}");
                                }
                            }
                            else
                            {
                                Console.WriteLine("Invalid target account number.");
                            }
                        }
                        else
                        {
                            Console.WriteLine("Invalid transfer amount.");
                        }
                    }
                    else if (menuChoice == "4") // Withdraw
                    {
                        Console.Write($"Please enter the amount you want to withdraw from {activeAccount.Type}: ");
                        if (double.TryParse(Console.ReadLine(), out double withdrawAmount) && withdrawAmount > 0)
                        {
                            activeAccount.Withdraw(withdrawAmount); // Assuming Withdraw handles insufficient funds
                            Console.WriteLine($"Withdrew {withdrawAmount:C}. New balance: {activeAccount.Balance:C}");
                        }
                        else
                        {
                            Console.WriteLine("Invalid withdrawal amount.");
                        }
                    }
                }
                else
                {
                    Console.WriteLine("Invalid account number entered.");
                }
                break;

            default:
                Console.WriteLine("Invalid choice. Please select a number from the menu.");
                break;
        }
        Console.WriteLine("\nPress any key to continue...");
        Console.ReadKey(); // Keep the console open until user presses a key
    }
}