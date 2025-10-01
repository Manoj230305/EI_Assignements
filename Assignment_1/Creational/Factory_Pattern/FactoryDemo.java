interface ProductItem {
    void display();
}

class Electronics implements ProductItem {
    public void display() { System.out.println("Electronics product created."); }
}
class Clothing implements ProductItem {
    public void display() { System.out.println("Clothing product created."); }
}
class Book implements ProductItem {
    public void display() { System.out.println("Book product created."); }
}

class ProductFactory {
    public ProductItem createProduct(String type) {
        switch (type.toLowerCase()) {
            case "electronics": return new Electronics();
            case "clothing": return new Clothing();
            case "book": return new Book();
            default: throw new IllegalArgumentException("Unknown product type: " + type);
        }
    }
}

public class FactoryDemo {
    public static void main(String[] args) {
        ProductFactory factory = new ProductFactory();

        ProductItem p1 = factory.createProduct("electronics");
        p1.display();

        ProductItem p2 = factory.createProduct("clothing");
        p2.display();

        ProductItem p3 = factory.createProduct("book");
        p3.display();
    }
}
