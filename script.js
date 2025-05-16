// Cargar libros desde JSON
fetch('data/libros.json')
  .then(response => response.json())
  .then(data => mostrarLibros(data));

function mostrarLibros(libros) {
  const contenedor = document.getElementById('libros-container');
  libros.forEach(libro => {
    const div = document.createElement('div');
    div.classList.add('tarjeta-libro');
    div.classList.add(libro.available ? 'disponible' : 'no-disponible');

    div.innerHTML = `
      <h3>${libro.title}</h3>
      <p><strong>Autor:</strong> ${libro.author}</p>
      <p>${libro.available ? 'Disponible' : 'Prestado'}</p>
    `;

    contenedor.appendChild(div);
  });
}

// Registrar préstamo
document.getElementById('form-prestamo').addEventListener('submit', function (e) {
  e.preventDefault();
  const nombre = this.children[0].value;
  const libro = this.children[1].value;

  const div = document.createElement('div');
  div.classList.add('tarjeta-libro');
  div.innerHTML = `
    <h3>${libro}</h3>
    <p><strong>Prestado a:</strong> ${nombre}</p>
    <button onclick="this.parentElement.remove()">Eliminar</button>
  `;

  document.getElementById('prestamos-container').appendChild(div);

  // Limpiar el formulario
  this.reset();
});

// Cargar estudiantes desde XML y convertir a JSON
function cargarEstudiantes() {
  fetch('data/estudiantes.xml')
    .then(res => res.text())
    .then(xmlText => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
      const students = [...xmlDoc.getElementsByTagName('student')];
      const tbody = document.getElementById('tabla-estudiantes');
      tbody.innerHTML = ''; // Limpiar

      students.forEach(student => {
        const id = student.getElementsByTagName('id')[0].textContent;
        const name = student.getElementsByTagName('name')[0].textContent;
        const books = student.getElementsByTagName('borrowedBooks')[0].textContent;

        const row = document.createElement('tr');
        row.innerHTML = `<td>${id}</td><td>${name}</td><td>${books}</td>`;
        tbody.appendChild(row);
      });
    });
}
