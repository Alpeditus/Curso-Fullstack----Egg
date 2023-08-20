package tienda.persistencia;

import tienda.entidades.Fabricante;

public class FabricanteDao extends DAO {

    /*
   g) Ingresar un fabricante a la base de datos.-
     */
    public void guardarFabricante(Fabricante f) throws Exception {

        try {
            if (f == null) {
                throw new Exception("Debe poner el fabricante");
            }
            String sql = "INSERT INTO fabricante (nombre) VALUES ('" + f.getNombre() + "')";
            insertarModificarEliminar(sql);
        } catch (Exception ex) {
            System.out.println(ex);
        } finally {
            desconectarBase();
        }
    }

    public Fabricante buscarFabricantePorNombre(String nombre) throws Exception{
        
        try {
            
            String sql = "SELECT * FROM Fabricante" + " WHERE nombre = '" + nombre + "'";
            consultarBase(sql);
            
            Fabricante fabricante = null;
            
            while (resultado.next()) {
                fabricante = new Fabricante();
                fabricante.setCodigo(resultado.getInt("id"));
                fabricante.setNombre(resultado.getString("nombre"));
                
            }
            desconectarBase();
            return fabricante;
            
        } catch (Exception e) {
            
            desconectarBase();
            throw e;
            
        }
        
    }
}
