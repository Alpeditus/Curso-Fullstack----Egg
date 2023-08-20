package ejercicio.pkg1.servicios;

import ejercicio.pkg1.entidades.Autor;
import ejercicio.pkg1.persistencia.AutorDAO;
import java.util.Scanner;

/**
 *
 * @author Cristian
 */
public class AutorService {

    private final AutorDAO dao;
    Scanner leer = new Scanner(System.in).useDelimiter("\n");
    String nom = "";

    public AutorService() {
        this.dao = new AutorDAO();
    }

    public void cargarAutor() { // Crea un nuevo autor.

        Autor autor = new Autor();
        System.out.println("Ingrese nombre del autor:");
        autor.setNombre(leer.next());

        try {
            dao.guardar(autor);
            System.out.println("Se guardó el autor.");

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public Autor buscarAutorPorId() { //Buscador por medio del ID.
        try {
            System.out.println("Ingrese el ID del autor a buscar:");
            int id = leer.nextInt();
            return dao.buscarPorId(id);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
    }

    public Autor buscarAutorNombre() { //Buscador por medio del nombre.
        try {
            System.out.println("Ingrese el nombre del autor:");
            nom = leer.next();
            return dao.buscarAutorNombre(nom);

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
    }

    public void modificarAutorNombre() { //Modifica el nombre del autor (usa el buscador por nombre).
        Autor autor = buscarAutorNombre();
        try {
            if (autor != null) {
                System.out.println("Ingrese el nuevo nombre");
                autor.setNombre(leer.next());
                dao.editar(autor);
                System.out.println("Se modificó el autor.");
            } else {
                System.out.println("No se puede modificar el autor deseado.");
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public void modificarAutorId() { //Modifica el nombre del autor (usa el buscador por ID).
        Autor autor = buscarAutorPorId();
        try {
            if (autor != null) {
                System.out.println("Ingrese el nuevo nombre");
                autor.setNombre(leer.next());
                dao.editar(autor);
                System.out.println("Se modificó el autor.");
            } else {
                System.out.println("No se puede modificar el autor deseado.");
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public void eliminarAutorPorId() { //Elimina el autor por medio de la ID.
        Autor autor;
        try {
            System.out.println("Ingrese el ID del autor a buscar:");
            int id = leer.nextInt();
            autor = dao.buscarPorId(id);
            if (autor != null) {
                System.out.println("Desea eliminar el autor?");
                String resp = leer.next();
                if (resp.equalsIgnoreCase("si")) {
                    dao.eliminarPorId(id);
                    System.out.println("Autor eliminado.");
                } else {
                    System.out.println("Ación cancelada.");
                }
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
