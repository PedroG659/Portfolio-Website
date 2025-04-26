public class OrderProcessor {

    public void processOrder(Order order) {
        validate(order);
        calculate(order);
        invoice(order);
        notifyCustomer(order);
    }

    private void validate(Order order) {
        validateOrder(order);
    }

    private void calculate(Order order) {
        calculateTotal(order);
    }

    private void invoice(Order order) {
        generateInvoice(order);
    }

    private void notifyCustomer(Order order) {
        sendNotification(order);
    }
}
