package main.java.biblioteca.models;

public class Prestamo {
    private Libro libro;
    private Estudiante estudiante;
    private String fechaPrestamo;

    public Prestamo(Libro libro, Estudiante estudiante, String fechaPrestamo) {
        this.libro = libro;
        this.estudiante = estudiante;
        this.fechaPrestamo = fechaPrestamo;
    }

    public Libro getLibro() {
        return libro;
    }

    public Estudiante getEstudiante() {
        return estudiante;
    }

    public String getFechaPrestamo() {
        return fechaPrestamo;
    }

    public String toString() {
        return "Prestamo{" +
                "libro=" + libro +
                ", estudiante=" + estudiante +
                ", fechaPrestamo='" + fechaPrestamo + '\n' +
                '}';
    }
}