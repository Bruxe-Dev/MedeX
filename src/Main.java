//import java.io.*;

import java.util.NoSuchElementException;

public class Main{
    public static void main(String[] args) {
        Medication metformin = new Medication("Metformin", "500mg");
        Medication m1 = new Medication("Metformin", "500mg");
        Medication m2 = new Medication("Metformin", "500mg");
        Medication m3 = new Medication("Metformin", "850mg");
        Pharmacy ubumwe = new Pharmacy("Ubumwe", "Nyarutarama", "+250794889741");

        PharmacyStock stock = new PharmacyStock(ubumwe,metformin,45);

        System.out.println(stock.getPharmacy().getName());
        System.out.println(m1.equals(m2));
        System.out.println(m1.equals(m3));
        System.out.println(stock.getMedication().getName());
        System.out.println(stock.getQuantity());

        ubumwe.addStock(stock);
        System.out.println(ubumwe.getStocks().size());

        stock.addQuantity(30);
        try{
            ubumwe.dispenseMedication(new Medication("Ibuprofen","400mg"),5);
        }catch (NoSuchElementException e){
            System.out.println(e.getMessage());
        }
        System.out.println(stock.getQuantity());

        PharmacyStock newStock = new PharmacyStock(ubumwe,metformin,45);
        ubumwe.addStock(newStock);
        System.out.println(stock.getQuantity());
    }
}