import lombok.Getter;
import lombok.Setter;

@Getter
public class Pharmacy {
    private final String name;
    private final String location;

    @Setter
    private String phoneNumber;

    public Pharmacy(String name, String location, String phoneNumber){
        this.name = name;
        this.location = location;
        this.phoneNumber = phoneNumber;
    }

}
