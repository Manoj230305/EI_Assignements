class Logger {
    private static Logger instance;

    private Logger() {} 
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }
    public void log(String message) {
        System.out.println("[LOG] " + message);
    }
}

public class SingletonDemo {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("User added item to cart");
        logger2.log("User completed payment");

        System.out.println("Same instance? " + (logger1 == logger2));
    }
}
