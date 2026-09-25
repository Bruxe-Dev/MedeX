import lombok.Getter;
import lombok.Setter;

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

        this.stocks.add(stock);
    }

}
