import lombok.Getter;

@Getter
public class PharmacyStock {
    private Pharmacy pharmacy;
    private Medication medication;
    private int quantity;

    public PharmacyStock(Pharmacy pharmacy,Medication medication, int quantity){
        this.pharmacy = pharmacy;
        this.medication = medication;
        this.quantity = quantity;
    }
}
