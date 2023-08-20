package ejercicio.pkg1.servicios;

import ejercicio.pkg1.entidades.Libro;
import ejercicio.pkg1.persistencia.LibroDAO;
import java.util.Scanner;

/**
 *
 * @author Cristian
 */
public class LibroService {

    private final LibroDAO dao;
    Scanner leer = new Scanner(System.in).useDelimiter("\n");
    String nom = "";

    public LibroService() {
        this.dao = new LibroDAO();
    }

    public void cargarAutor() { // Crea un nuevo libro.

        Libro libro = new Libro();
        System.out.println("Ingrese nombre del libro:");
        libro.setTitulo(leer.next());
        System.out.println("Ingrese el año de edición:");
        libro.setAnio(leer.nextInt());

        try {
            dao.guardar(libro);
            System.out.println("Se guardó el libro.");

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public Libro buscarLibroPorIsbn() { //Buscador por medio del ID.
        try {
            System.out.println("Ingrese el ISBN del libro a buscar:");
            int id = leer.nextInt();
            return dao.buscarPorIsbn(id);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
    }

    public Libro buscarLibroNombre() { //Buscador por medio del nombre.
        try {
            System.out.println("Ingrese el nombre del libro:");
            nom = leer.next();
            return dao.buscarLibroNombre(nom);

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
    }

    public void modificarAutorNombre() { //Modifica el nombre del libro (usa el buscador por nombre) y el año (opcional).
        Libro libro = buscarLibroNombre();
        try {
            if (libro != null) {
                System.out.println("Ingrese el nuevo nombre");
                libro.setTitulo(leer.next());
                System.out.println("Desea modificar el año de edición?");
                if (leer.next().equalsIgnoreCase("si")) {
                    System.out.println("Ingrese año de edición.");
                    libro.setAnio(leer.nextInt());
                    dao.editar(libro);
                } else {
                    dao.editar(libro);
                    System.out.println("Se modificó el libro.");
                }
            } else {
                System.out.println("No se puede modificar el nombre del libro.");
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public void modificarLibroId() { //Modifica el nombre del libro (usa el buscador por ID) y el año (opcional).
        Libro libro = buscarLibroPorIsbn();
        try {
            if (libro != null) {
                System.out.println("Ingrese el nuevo nombre");
                libro.setTitulo(leer.next());
                System.out.println("Desea modificar el año de edición?");
                if (leer.next().equalsIgnoreCase("si")) {
                    System.out.println("Ingrese año de edición.");
                    libro.setAnio(leer.nextInt());
                    dao.editar(libro);
                } else {
                    dao.editar(libro);
                    System.out.println("Se modificó el libro.");
                }
            } else {
                System.out.println("No se puede modificar el nombre del libro.");
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public void eliminarLibroPorId() { //Elimina el libro por medio de la ID.
        Libro libro;
        try {
            System.out.println("Ingrese el ID del libro a buscar:");
            int id = leer.nextInt();
            libro = dao.buscarPorIsbn(id);
            if (libro != null) {
                System.out.println("Desea eliminar el libro?");
                String resp = leer.next();
                if (resp.equalsIgnoreCase("si")) {
                    dao.eliminarPorId(id);
                    System.out.println("Libro eliminado.");
                } else {
                    System.out.println("Ación cancelada.");
                }
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
