namespace Codealong_3;

public class ShopItem
{
    private int _itemID;
    private string _name;
    private double _price;
    private double _amount;

    public int ItemID => _itemID;
    public string Name => _name;
    public double Price => _price;
    public double Amount => _amount;
    
    public ShopItem(int itemID, string name, double price, double amount)
    {
        _itemID = itemID;
        _name = name;
        _price = price;
        _amount = amount;
    }

    public void PrintItemInfo()
    {
        Console.WriteLine($"Name: {_name}, Price: {_price}, Amount in stock: {_amount}");
    }

    public override string ToString()
    {
        return $"Name: {_name}, Price: {_price}, Amount in stock: {_amount}";
    }

    public void ReduceAmount()
    {
        _amount -= 1;
    }
}