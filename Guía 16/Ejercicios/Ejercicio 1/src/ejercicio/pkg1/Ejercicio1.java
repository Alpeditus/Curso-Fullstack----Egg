package ejercicio.pkg1;

import ejercicio.pkg1.entidades.Autor;
import ejercicio.pkg1.entidades.Editorial;
import ejercicio.pkg1.servicios.AutorService;

/**
 *
 * @author Cristian
 */
public class Ejercicio1 {

    public static void main(String[] args) {

        System.out.println("     |     |  |     \n"
                + "     |     |  |     \n"
                + "     |-----|  |     \n"
                + "     |     |  |     \n"
                + "     |     |  |     \n");
        System.out.println("Bienvenidos a la biblio, eliga la opción deseada:");
        System.out.println("");

        System.out.println("  H     H  EEEEE  L      L      OOO");
        System.out.println("  H     H  E      L      L     O   O");
        System.out.println("  HHHHHHH  EEEE   L      L     O   O");
        System.out.println("  H     H  E      L      L     O   O");
        System.out.println("  H     H  EEEEE  LLLLL  LLLLL  OOO");
    
        AutorService aut = new AutorService();
        Editorial edit = new Editorial();
        
    aut.eliminarAutorPorId();
    }
}
