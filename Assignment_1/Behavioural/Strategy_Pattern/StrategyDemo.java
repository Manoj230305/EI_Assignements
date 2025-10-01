import java.util.*;

interface PaymentStrategy {
    void pay(int amount);
}

class UpiPayment implements PaymentStrategy {
    public void pay(int amount) { System.out.println("Paid ₹" + amount + " using UPI."); }
}
class CreditCardPayment implements PaymentStrategy {
    public void pay(int amount) { System.out.println("Paid ₹" + amount + " using Credit Card."); }
}
class PayPalPayment implements PaymentStrategy {
    public void pay(int amount) { System.out.println("Paid ₹" + amount + " using PayPal."); }
}

class PaymentContext {
    private PaymentStrategy strategy;
    public void setStrategy(PaymentStrategy strategy) { this.strategy = strategy; }
    public void checkout(int amount) { strategy.pay(amount); }
}

public class StrategyDemo {
    public static void main(String[] args) {
        PaymentContext context = new PaymentContext();

        context.setStrategy(new UpiPayment());
        context.checkout(1200);

        context.setStrategy(new CreditCardPayment());
        context.checkout(5000);

        context.setStrategy(new PayPalPayment());
        context.checkout(2000);
    }
}
