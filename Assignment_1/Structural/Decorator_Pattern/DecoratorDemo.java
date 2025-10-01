interface Order {
    String getDescription();
    double getCost();
}

class BasicOrder implements Order {
    public String getDescription() { return "Basic Order"; }
    public double getCost() { return 1000; }
}

class GiftWrap implements Order {
    private Order order;
    public GiftWrap(Order order) { this.order = order; }
    public String getDescription() { return order.getDescription() + " + Gift Wrap"; }
    public double getCost() { return order.getCost() + 50; }
}

class PremiumDelivery implements Order {
    private Order order;
    public PremiumDelivery(Order order) { this.order = order; }
    public String getDescription() { return order.getDescription() + " + Premium Delivery"; }
    public double getCost() { return order.getCost() + 200; }
}

public class DecoratorDemo {
    public static void main(String[] args) {
        Order order = new BasicOrder();
        System.out.println(order.getDescription() + " → ₹" + order.getCost());

        order = new GiftWrap(order);
        order = new PremiumDelivery(order);

        System.out.println(order.getDescription() + " → ₹" + order.getCost());
    }
}
