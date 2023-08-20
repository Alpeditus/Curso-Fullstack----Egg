package ejercicio.pkg1.persistencia;

import ejercicio.pkg1.entidades.Editorial;
import java.util.List;

/**
 *
 * @author Facu
 */
public class EditorialDAO extends DAO<Editorial> {
    
    @Override
    public void editar(Editorial objeto) {
        super.editar(objeto); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void guardar(Editorial objeto) {
        super.guardar(objeto); //To change body of generated methods, choose Tools | Templates.
    }
 
    public Editorial buscarPorId(int id) { // Buscador para el menú, se desconecta.
        conectar();
        Editorial editorial;
        try {
            editorial = em.find(Editorial.class, id);
            if (editorial != null) {
                System.out.println(editorial);
            } else {
                System.out.println("No se encontró la editorial. Verifique la ID.");
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
        desconectar();
        return editorial;
    }

    public Editorial buscarEditorialNombre(String nombre) {
        conectar();
        Editorial editorial = null;
        try {
            List<Editorial> editoriales = em.createQuery("SELECT a FROM Autor a WHERE a.nombre = :nombre")
                    .setParameter("nombre", nombre).getResultList();
            if (!editoriales.isEmpty()) {
                editorial = editoriales.get(0);
                System.out.println(editorial);
            } else {
                System.out.println("No se encontró la editorial deseada.");
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
        desconectar();
        return editorial;
    }

    public Editorial eliminarPorId(int id) {
        conectar();
        Editorial editorial;
        try {
            editorial = em.find(Editorial.class, id);
            em.getTransaction().begin();
            em.remove(editorial);
            em.getTransaction().commit();
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
        desconectar();
        return editorial;
    }
}
