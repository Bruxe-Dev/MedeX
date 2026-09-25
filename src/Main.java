import java.io.*;

public class Main{
    public static void main(String[] args) {
        Medication metformin = new Medication("Metformin", "500mg");

        // String metDosage = metformin.dosage;
        System.out.println(metformin.getDosage());
        System.out.println(metformin.getName());

        Pharmacy ubumwe = new Pharmacy("Ubumwe", "Nyarutarama", "+250794889741");

        System.out.println(ubumwe.getName());
        System.out.println(ubumwe.getLocation());
        System.out.print(ubumwe.getPhoneNumber());
    }
}