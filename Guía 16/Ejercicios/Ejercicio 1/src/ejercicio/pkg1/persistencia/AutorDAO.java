package ejercicio.pkg1.persistencia;

import ejercicio.pkg1.entidades.Autor;
import java.util.List;

/**
 *
 * @author Cristian
 */
public class AutorDAO extends DAO<Autor> {

    @Override
    public void editar(Autor objeto) {
        super.editar(objeto); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void guardar(Autor objeto) {
        super.guardar(objeto); //To change body of generated methods, choose Tools | Templates.
    }

    public Autor buscarPorId(int id) { // Buscador para el menú por ID.
        conectar();
        Autor autor;
        try {
            autor = em.find(Autor.class, id);
            if (autor != null) {
                System.out.println(autor);
            } else {
                System.out.println("No se encontró el autor. Verifique la ID.");
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
        desconectar();
        return autor;
    }

    public Autor buscarAutorNombre(String nombre) { // Buscador para el menú por nombre.
        conectar();
        Autor autor = null;
        try {
            List<Autor> autores = em.createQuery("SELECT a FROM Autor a WHERE a.nombre = :nombre")
                    .setParameter("nombre", nombre).getResultList();
            if (!autores.isEmpty()) {
                autor = autores.get(0);
                System.out.println(autor);
            } else {
                System.out.println("No se encontró el autor deseado.");
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
        desconectar();
        return autor;
    }

    public Autor eliminarPorId(int id) { // Elimina el autor por ID.
        conectar();
        Autor autor;
        try {
            autor = em.find(Autor.class, id);
            em.getTransaction().begin();
            em.remove(autor);
            em.getTransaction().commit();
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
        desconectar();
        return autor;
    }
}
