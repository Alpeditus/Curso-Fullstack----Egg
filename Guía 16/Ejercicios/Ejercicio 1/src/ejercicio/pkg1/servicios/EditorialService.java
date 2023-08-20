package ejercicio.pkg1.servicios;

import ejercicio.pkg1.entidades.Editorial;
import ejercicio.pkg1.persistencia.EditorialDAO;
import java.util.Scanner;

/**
 *
 * @author Cristian
 */
public class EditorialService {
    
    private final EditorialDAO dao;
    Scanner leer = new Scanner(System.in).useDelimiter("\n");
    String nom = "";

    public EditorialService() {
        this.dao = new EditorialDAO();
    }
    
    public void cargarEditorial() { // Crea un nuevo editorial.

        Editorial editorial = new Editorial();
        System.out.println("Ingrese nombre de la editorial:");
        editorial.setNombre(leer.next());

        try {
            dao.guardar(editorial);
            System.out.println("Se guardó el autor.");

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public Editorial buscarEditorialPorId() { //Buscador por medio del ID.
        try {
            System.out.println("Ingrese el ID de la editorial a buscar:");
            int id = leer.nextInt();
            return dao.buscarPorId(id);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
    }

    public Editorial buscarEditorialNombre() { //Buscador por medio del nombre.
        try {
            System.out.println("Ingrese el nombre de la editorial:");
            nom = leer.next();
            return dao.buscarEditorialNombre(nom);

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
    }

    public void modificarEditorialNombre() { //Modifica el nombre del editorial (usa el buscador por nombre).
        Editorial editorial = buscarEditorialNombre();
        try {
            if (editorial != null) {
                System.out.println("Ingrese el nuevo nombre");
                editorial.setNombre(leer.next());
                dao.editar(editorial);
                System.out.println("Se modificó la editorial.");
            } else {
                System.out.println("No se puede modificar la editorial deseada.");
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public void modificarEditorialId() { //Modifica el nombre del editorial (usa el buscador por ID).
        Editorial editorial = buscarEditorialPorId();
        try {
            if (editorial != null) {
                System.out.println("Ingrese el nuevo nombre");
                editorial.setNombre(leer.next());
                dao.editar(editorial);
                System.out.println("Se modificó la editorial.");
            } else {
                System.out.println("No se puede modificar la editorial deseada.");
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public void eliminarEditorialPorId() { //Elimina el editorial por medio de la ID.
        Editorial editorial;
        try {
            System.out.println("Ingrese el ID de la editorial a buscar:");
            int id = leer.nextInt();
            editorial = dao.buscarPorId(id);
            if (editorial != null) {
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
