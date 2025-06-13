package main.java.biblioteca.models;

public class Estudiante {
    private String nombre;
    private String idEstudiante;
    private String email;

    public Estudiante(String nombre, String idEstudiante, String email) {
        this.nombre = nombre;
        this.idEstudiante = idEstudiante;
        this.email = email;
    }

    public String getNombre() {
        return nombre;
    }

    public String getIdEstudiante() {
        return idEstudiante;
    }

    public String getEmail() {
        return email;
    }

    public String toString() {
        return "Estudiante{" +
                "nombre='" + nombre + '\n' +
                ", idEstudiante='" + idEstudiante + '\n' +
                ", email='" + email + '\n' +
                '}';
    }
}