import lombok.Getter;
import lombok.Setter;

import java.util.NoSuchElementException;
import java.util.Objects;

import java.util.ArrayList;
import java.util.List;

@Getter
public class Pharmacy {
    private final String name;
    private final String location;
    private final List<PharmacyStock> stocks;

    @Setter
    private String phoneNumber;

    public Pharmacy(String name, String location, String phoneNumber){
        this.name = name;
        this.location = location;
        this.phoneNumber = phoneNumber;
        this.stocks = new ArrayList<>();
    }

    public void addStock(PharmacyStock stock){
        if (stock == null){
            System.out.println("Can't add an empty record!");
            return;
        }

        if(stock.getPharmacy() != this){
            System.out.println("Can't Edit Others Pharmacy stocks");
            return;
        }

        for(PharmacyStock existingStock: stocks){
            boolean exists = Objects.equals(
                    existingStock.getMedication().getName()
                    , stock.getMedication().getName());

            if (exists){
                existingStock.addQuantity(stock.getQuantity());
                return;
            }
        }
        this.stocks.add(stock);
    }

    public void dispenseMedication(Medication medication, int quantity){
        if(medication == null) {
            throw new IllegalArgumentException("Can't dispense a Null field!");
        }
        for(PharmacyStock stock:stocks){
            boolean medicationExist = Objects.equals(stock.getMedication().getName(),medication.getName());

            if(medicationExist){
                stock.dispenseQuantity(quantity);
                return;
            }
        }
        throw new NoSuchElementException("Specified Item Not Found");
    }

}
