package tienda.entidades;

public class Producto {
    
    private int codigo;
    private String nombre;
    private double precio;
    private int codigo_Fabricante;

    public Producto() {
    }

    public Producto(int codigo, String nombre, double precio, int codigoFabricante) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.codigo_Fabricante = codigoFabricante;
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public int getCodigoFabricante() {
        return codigo_Fabricante;
    }

    public void setCodigoFabricante(int codigoFabricante) {
        this.codigo_Fabricante = codigoFabricante;
    }

    @Override
    public String toString() {
        return "Producto:\n" + "Codigo = " + codigo + ", nombre = " + nombre + ", precio = " + precio + ", codigoFabricante = " + codigo_Fabricante + ".";
    }
    
    
}
