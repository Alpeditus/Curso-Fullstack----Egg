package tienda;

import tienda.servicios.FabricanteService;

public class Tienda {
    public static void main(String[] args) throws Exception {
    FabricanteService f = new FabricanteService();
    
        try {
            f.crearFabricante("asdf");
            
        } catch (Exception e) {            
            throw e;
        }
    }
    
   
}
