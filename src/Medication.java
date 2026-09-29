import lombok.Getter;
import lombok.Setter;

import java.util.Objects;

@Getter
public class Medication {
    private final String name;
    private final String dosage;

    public Medication(String name,String dosage){
        this.name = name;
        this.dosage = dosage;
    };

    @Override
    public boolean equals(Object o){
        if(!(o instanceof Medication)){
            return false;
        }
        Medication other = (Medication) o;

        return Objects.equals(this.name, other.name) && Objects.equals(this.dosage, other.dosage);
    }

//    public String getName(){
//        return this.name;
//    }
//    public String getDosage(){
//        return this.dosage;
//    }
}
