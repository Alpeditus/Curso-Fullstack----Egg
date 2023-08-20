package ejercicio.pkg1.persistencia;

import ejercicio.pkg1.entidades.Libro;
import java.util.List;

/**
 *
 * @author Cristian
 */
public class LibroDAO extends DAO<Libro>{

    @Override
    public void editar(Libro objeto) {
        super.editar(objeto); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void guardar(Libro objeto) {
        super.guardar(objeto); //To change body of generated methods, choose Tools | Templates.
    }
 
    public Libro buscarPorIsbn(int isbn) { // Buscador para el menú, se desconecta.
        conectar();
        Libro libro;
        try {
            libro = em.find(Libro.class, isbn);
            if (libro != null) {
                System.out.println(libro);
            } else {
                System.out.println("No se encontró el libro. Verifique la ID.");
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
        desconectar();
        return libro;
    }

    public Libro buscarLibroNombre(String nombre) {
        conectar();
        Libro libro = null;
        try {
            List<Libro> libros = em.createQuery("SELECT a FROM Autor a WHERE a.nombre = :nombre")
                    .setParameter("nombre", nombre).getResultList();
            if (!libros.isEmpty()) {
                libro = libros.get(0);
                System.out.println(libro);
            } else {
                System.out.println("No se encontró el libro deseado.");
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
        desconectar();
        return libro;
    }

    public Libro eliminarPorId(int id) {
        conectar();
        Libro libro;
        try {
            libro = em.find(Libro.class, id);
            em.getTransaction().begin();
            em.remove(libro);
            em.getTransaction().commit();
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
        desconectar();
        return libro;
    }
}
