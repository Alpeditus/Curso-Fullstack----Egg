package tienda.servicios;

import tienda.entidades.Fabricante;
import tienda.persistencia.FabricanteDao;

public class FabricanteService {
    
    private FabricanteDao DAO;

    public FabricanteService() {
        this.DAO = new FabricanteDao();
        
    }
    
    public void crearFabricante(String nombre) throws Exception{
        
        try {
            if (nombre == null || nombre.trim().isEmpty()) {
                throw new Exception("Debe indicar el nombre del fabricante.");
            }

            if (DAO.buscarFabricantePorNombre(nombre)!=null) {
                throw new Exception("Ya existe un fabricante con ese nombre.");
            }
            
            Fabricante f = new Fabricante();
            f.setNombre(nombre);
            DAO.guardarFabricante(f);
            
        } catch (Exception e) {
                        
            throw e;
        }
        
    }
    
    
}
