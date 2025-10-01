import java.util.*;

interface Customer {
    void update(String productName, double newPrice);
}

class Product {
    private String name;
    private double price;
    private List<Customer> customers = new ArrayList<>();

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public void register(Customer customer) { customers.add(customer); }
    public void unregister(Customer customer) { customers.remove(customer); }

    public void setPrice(double newPrice) {
        this.price = newPrice;
        notifyCustomers();
    }

    private void notifyCustomers() {
        for (Customer c : customers) {
            c.update(name, price);
        }
    }
}

class MobileCustomer implements Customer {
    private String name;
    public MobileCustomer(String name) { this.name = name; }
    public void update(String productName, double newPrice) {
        System.out.println("[" + name + " - Mobile] " + productName + " new price: Rs." + newPrice);
    }
}

class WebCustomer implements Customer {
    private String name;
    public WebCustomer(String name) { this.name = name; }
    public void update(String productName, double newPrice) {
        System.out.println("[" + name + " - Web] " + productName + " new price: Rs." + newPrice);
    }
}

public class ObserverDemo {
    public static void main(String[] args) {
        Product laptop = new Product("Laptop", 60000);

        Customer c1 = new MobileCustomer("Manoj");
        Customer c2 = new WebCustomer("Jahnvi");

        laptop.register(c1);
        laptop.register(c2);

        laptop.setPrice(55000);
        laptop.setPrice(50000); 
    }
}
