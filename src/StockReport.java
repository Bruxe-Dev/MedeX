public class StockReport implements Printable{
   private final PharmacyStock stock;

   public StockReport(PharmacyStock stock){
       this.stock = stock;
   }

    @Override
    public void print(){
        System.out.println("Current Stock: ==> Medications: " +this.stock.getMedication().getName()+
                ", Quantity: "+this.stock.getQuantity()+
                ", Status: "+this.stock.getStatus()
        );
    }
}
