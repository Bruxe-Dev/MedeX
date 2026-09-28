import lombok.Getter;
import lombok.Setter;

@Getter
public class PharmacyStock {
    private final Pharmacy pharmacy;
    private final Medication medication;
    @Setter
    private int quantity;

    public PharmacyStock(Pharmacy pharmacy,Medication medication, int quantity){
        this.pharmacy = pharmacy;
        this.medication = medication;
        this.quantity = quantity;
    }

    public void addQuantity(int newQuantity){
        if(newQuantity < 1){
            throw new IllegalArgumentException("Invalid Value");
        }
        this.quantity += newQuantity;
    }

    public void dispenseQ(int dispenseQuantity){
        if(dispenseQuantity > this.quantity){
            throw new IllegalArgumentException("Specified Units Unavailable!");
        }
        if(dispenseQuantity < 1){
            throw new IllegalArgumentException("Invalid Value");
        }
        this.quantity -= dispenseQuantity;
        System.out.println("Successfully Dispensed: "+ dispenseQuantity);
    }
}
