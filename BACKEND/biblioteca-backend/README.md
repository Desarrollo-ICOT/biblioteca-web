# biblioteca-backend
# 📘 Backend Activity – *Biblioteca CRUD API (Java)*

## 🎯 Objective of the Activity

You are tasked with developing the backend for the **Biblioteca** application you’ve been working on in previous activities. The goal is to build a small Java application that connects to the existing **biblioteca** database and exposes basic functionality using a **CRUD system** (Create, Read, Update, Delete) for the entities:

- `Libro`
- `Estudiante`
- `Prestamo`

This activity builds directly upon the database and frontend you’ve already developed. Now you will focus on implementing the **backend logic** and **connect it to the database**.

---

## 🔧 Initial Setup

You are provided with a **template repository** containing the base structure of the project (folders only, no code):
> 🔗 GitHub Repo: [https://github.com/Desarrollo-ICOT/biblioteca-backend-template](https://github.com/Desarrollo-ICOT/biblioteca-backend-template)

1. Fork the repository to your GitHub account.
2. Clone your forked version locally.
3. Work from your local machine and commit changes regularly.
4. Push your work to your GitHub repository.

---

## 📁 Project Folder Structure

<details>
<summary>Click to view</summary>

```text
biblioteca-backend-template/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/biblioteca/
│       │       ├── models/
│       │       │   ├── Libro.java
│       │       │   ├── Estudiante.java
│       │       │   └── Prestamo.java
│       │       ├── services/
│       │       │   └── PrestamoService.java
│       │       ├── controllers/
│       │       │   └── PrestamoController.java
│       │       ├── repositories/
│       │       │   └── DatabaseConnection.java
│       │       └── App.java
│       └── resources/
│           └── application.properties
├── database/
│   └── biblioteca.sql
├── README.md
└── .gitignore
```

</details>

---

## 🧠 What You Must Implement

You must complete the project **from scratch** by writing all required Java classes and logic.

### ✅ 1. Object-Oriented Structure

- Create the classes for `Libro`, `Estudiante`, and `Prestamo` under `models/`.
- Add attributes, constructors, getters/setters, and `toString()` where needed.
- Use **encapsulation** and best OOP practices.

### ✅ 2. Database Integration

- Use JDBC (Java Database Connectivity) to connect to the existing `biblioteca` MySQL database.
- Set up your connection in `DatabaseConnection.java`.
- Load credentials via `application.properties`.

### ✅ 3. CRUD Functionality

- Implement a basic controller and service for at least **Prestamos**.
- Your controller should include:
  - Create a new record
  - List existing records
  - Update a record
  - Delete a record

### ✅ 4. Data Interchange (JSON / XML)

- Implement a way to convert data (e.g., Prestamos) to/from **JSON** or **XML** using libraries like:
  - `org.json` or `Gson` (for JSON)
  - `javax.xml` or similar (for XML)

### ✅ 5. Simple Console UI (MVC pattern)

- Your `App.java` will act as the entry point and console interface.
- It should:
  - Display menu options (create, list, update, delete)
  - Call the appropriate controllers
  - Handle input/output

### ✅ 6. Documentation

- Use **Javadoc** to document your classes and methods.
- Include:
  - Class-level descriptions
  - Parameter explanations
  - Return value descriptions

---

## 🎓 Competencies You Will Practice

| Competency | Description |
|------------|-------------|
| 🔹 **OOP Design** | Define appropriate classes, objects and methods |
| 🔹 **Documentation** | Use `Javadoc` to document source code |
| 🔹 **Data Formats** | Convert and process XML / JSON |
| 🔹 **MVC Pattern** | Create a simple console interface using MVC logic |
| 🔹 **Database Access** | Connect, read, write, update and delete DB records |

---

## ✅ Deliverables

- ✅ Code pushed to your forked GitHub repository
- ✅ All classes fully implemented and documented
- ✅ App must compile and run without errors
- ✅ Functional interaction with the database
- ✅ Sample JSON/XML export methods
- ✅ Commit messages must be clear and consistent

---

## 📌 Tips

- Start simple. First ensure your DB connection works before coding everything else.
- Tackle one entity first (`Prestamo`) and once complete, move to the others.
- Don’t forget to test your program after every small change.
