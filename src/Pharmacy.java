import lombok.Getter;
import lombok.Setter;

import java.util.*;

@Getter
public class Pharmacy {
    private final String name;
    private final String location;
    private final List<PharmacyStock> stocks;

    @Setter
    private String phoneNumber;

    public Pharmacy(String name, String location, String phoneNumber){
        if(name==null || location==null || phoneNumber==null){
            throw new IllegalArgumentException("Null Arguments! Please refill them");
        }
        this.name = name;
        this.location = location;
        this.phoneNumber = phoneNumber;
        this.stocks = new ArrayList<>();
    }

    public Set<Medication> getMedications(){
        Set<Medication> medications = new HashSet<>();

        for(PharmacyStock stock :stocks){
            medications.add(stock.getMedication());
        }
        return medications;
    }

    public void addStock(PharmacyStock stock){
        if (stock == null){
            throw new IllegalArgumentException("Stock can't be null!");
        }

        if(stock.getPharmacy() != this){
            throw new IllegalArgumentException("Specified Stocks Belong to another pharmacy!");
        }

        for(PharmacyStock existingStock: stocks){
            boolean exists = existingStock.getMedication()
                    .equals(
                            stock.getMedication()
                    );

            if (exists){
                existingStock.addQuantity(stock.getQuantity());
                return;
            }
        }
        this.stocks.add(stock);
    }

    public void dispenseMedication(Medication medication, int quantity){
        if(medication == null) {
            throw new IllegalArgumentException("Medications can't be null!");
        }
        for(PharmacyStock stock:stocks){
            boolean medicationExist = stock.getMedication()
                    .equals(
                            medication
                    );

            if(medicationExist){
                stock.dispenseQuantity(quantity);
                return;
            }
        }
        throw new NoSuchElementException("Specified Item Not Found");
    }

}
