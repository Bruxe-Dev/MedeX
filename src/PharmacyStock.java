import lombok.Getter;
//import lombok.Setter;

@Getter
public class PharmacyStock {
    private final Pharmacy pharmacy;
    private final Medication medication;
    //@Setter
    private int quantity;

    public PharmacyStock(Pharmacy pharmacy,Medication medication, int quantity){
        this.pharmacy = pharmacy;
        this.medication = medication;

        if (pharmacy == null || medication == null){
            throw new IllegalArgumentException("Null Argument passed! Please check your Input.");
        }
        if (quantity < 0){
            throw new IllegalArgumentException("Invalid Quantity");
        }
        this.quantity = quantity;
    }

    public void addQuantity(int newQuantity){
        if(newQuantity < 1){
            throw new IllegalArgumentException("Invalid Value");
        }
        
        this.quantity += newQuantity;
    }

    public void dispenseQuantity(int dispenseQuantity){
        if(dispenseQuantity > this.quantity){
            throw new IllegalArgumentException("Specified Units Unavailable!");
        }
        if(dispenseQuantity < 1){
            throw new IllegalArgumentException("Invalid Value");
        }
        this.quantity -= dispenseQuantity;
    }

    public StockStatus getStatus(){
        if(this.quantity == 0){
            return StockStatus.OUT_OF_STOCK;
        } else if (this.quantity <= 10) {
            return StockStatus.LOW_STOCK;
        }else {
            return StockStatus.AVAILABLE;
        }
    }
}
