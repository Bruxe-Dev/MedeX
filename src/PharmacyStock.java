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
        this.quantity += newQuantity;
    }
}
