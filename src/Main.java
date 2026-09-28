//import java.io.*;

public class Main{
    public static void main(String[] args) {
        Medication metformin = new Medication("Metformin", "500mg");
        Pharmacy ubumwe = new Pharmacy("Ubumwe", "Nyarutarama", "+250794889741");

        PharmacyStock stock = new PharmacyStock(ubumwe,metformin,45);

        System.out.println(stock.getPharmacy().getName());
        System.out.println(stock.getMedication().getName());
        System.out.println(stock.getQuantity());

        ubumwe.addStock(stock);
        System.out.println(ubumwe.getStocks().size());

        stock.addQuantity(30);
        try{
            stock.dispenseQuantity(20);
            System.out.println("Successfully Dispensed");
        }catch (IllegalArgumentException e){
            System.out.println(e.getMessage());
        }
        System.out.println(stock.getQuantity());

        PharmacyStock newStock = new PharmacyStock(ubumwe,metformin,45);
        ubumwe.addStock(newStock);
        System.out.println(stock.getQuantity());
    }
}