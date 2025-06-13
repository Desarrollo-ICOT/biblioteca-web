package main.java.biblioteca.models.repositories;

import java.sql.*;

public class DatabaseConnection {
    static final String DB_URL = "jdbc:mysql://localhost:3306/bibliotecaescolar";
    static final String USER = "root";
    static final String PASSWORD = "";
    static final String QUERY = "SELECT * FROM libro";

    public static void main(String[] args) {
        System.out.println("Conectando a la base de datos: " + DB_URL);
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASSWORD);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(QUERY)) {
            while (rs.next()) {
                System.out.print("ID Libro: " + rs.getInt("Id_libro"));
                System.out.print(", Título: " + rs.getString("Titulo"));
                System.out.print(", Autor: " + rs.getString("Autor"));
                System.out.print(", Año Publicación: " + rs.getInt("Anio_publicacion"));
                System.out.println(", ID Biblioteca: " + rs.getInt("Id_biblioteca"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}