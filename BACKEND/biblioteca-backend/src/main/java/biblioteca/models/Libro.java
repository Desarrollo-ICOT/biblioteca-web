package main.java.biblioteca.models;

public class Libro {
    private String titulo;
    private String autor;
    private String isbn;
    private boolean prestado;

    public Libro(String titulo, String autor, String isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.prestado = false;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getAutor() {
        return autor;
    }

    public String getIsbn() {
        return isbn;
    }

    public boolean prestado() {
        return prestado;
    }

    public void prestar() {
        this.prestado = true;
    }

    public void devolver() {
        this.prestado = false;
    }

    public String toString() {
        return "Libro{" +
                "titulo='" + titulo + '\n' +
                ", autor='" + autor + '\n' +
                ", isbn='" + isbn + '\n' +
                ", prestado=" + prestado +
                '}';
    }
}