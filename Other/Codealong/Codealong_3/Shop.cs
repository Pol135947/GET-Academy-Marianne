namespace Codealong_3;

public class Shop
{
    public List<ShopItem?> Items = new List<ShopItem?>
    {
        new ShopItem(1, "Laptop", 1200.00, 5.0),
        new ShopItem(2, "Mouse", 25.50, 20.0),
        new ShopItem(3, "Keyboard", 75.00, 10.0),
        new ShopItem(4, "Monitor", 300.00, 8.0),
        new ShopItem(5, "Webcam", 50.00, 15.0),
        new ShopItem(6, "Headphones", 99.99, 12.0),
        new ShopItem(7, "USB Drive", 12.99, 50.0),
        new ShopItem(8, "External Hard Drive", 89.00, 7.0),
        new ShopItem(9, "Printer", 150.00, 3.0),
        new ShopItem(10, "Smartphone", 799.00, 6.0),
        new ShopItem(11, "Tablet", 329.00, 9.0),
        new ShopItem(12, "Gaming Console", 499.00, 4.0),
        new ShopItem(13, "Smartwatch", 199.50, 11.0),
        new ShopItem(14, "Bluetooth Speaker", 45.00, 25.0),
        new ShopItem(15, "Coffee Maker", 65.00, 8.0),
        new ShopItem(16, "Toaster", 30.00, 18.0),
        new ShopItem(17, "Blender", 70.00, 6.0),
        new ShopItem(18, "Vacuum Cleaner", 250.00, 2.0),
        new ShopItem(19, "Desk Chair", 110.00, 7.0),
        new ShopItem(20, "Bookshelf", 85.00, 4.0),
    };
    public ShopItem? FindItem(string? name)
    {
        return Items.Find(x => x != null && x.Name == name);
    }

    public void PrintAllItems()
    {
        foreach (var item in Items)
        {
            if (item != null) item.PrintItemInfo();
        }
    }

    public List<ShopItem?> FilterItemsByPrice(double price)
    {
        return Items.FindAll(x => x != null && x.Price >= price && x.Price <= price);
    }

    public void PurchaseItem(string? name, Account account)
    {
        ShopItem? item = FindItem(name);
        
        if (item.Price > account.Balance)
        {
            Console.WriteLine($"Not enough {account.Balance} to purchase ${item.Price}");
        }
        else
        {
            if (item.Amount == 0)
            {
                Console.WriteLine($"{item.Name} is out of stock.");
            }
        
            item.ReduceAmount();
            Console.WriteLine($"{item.Name} has been bought for {item.Price}.");
            account.Withdraw(item.Price);
        }
    }

    public void Shopping(Account account)
    {
        Console.WriteLine("Here are the items in the shop:");
        PrintAllItems();
        
        Console.WriteLine("What do you want to do? \n1. Buy item \n2. Filter items by price");
        switch (Console.ReadLine())
        {
            case "1":
                Console.WriteLine("Write name of the item you wanna buy:");
                PurchaseItem(Console.ReadLine(), account);
                break;
            case "2":
                Console.WriteLine("Filter items by price:");
                FilterItemsByPrice(double.Parse(Console.ReadLine()));
                break;
            default:
                Console.WriteLine("Invalid input");
                break;
        }
        
    }
    
    
}