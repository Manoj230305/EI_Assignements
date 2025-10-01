interface NewPaymentGateway {
    void makePayment(int amount);
}

class OldPaymentGateway {
    public void processOldPayment(int amount) {
        System.out.println("Processing payment of ₹" + amount + " using OLD gateway.");
    }
}

class PaymentAdapter implements NewPaymentGateway {
    private OldPaymentGateway oldGateway;
    public PaymentAdapter(OldPaymentGateway oldGateway) {
        this.oldGateway = oldGateway;
    }
    public void makePayment(int amount) {
        oldGateway.processOldPayment(amount);
    }
}

public class AdapterDemo {
    public static void main(String[] args) {
        OldPaymentGateway oldSystem = new OldPaymentGateway();
        NewPaymentGateway adapter = new PaymentAdapter(oldSystem);

        adapter.makePayment(3000); 
    }
}
