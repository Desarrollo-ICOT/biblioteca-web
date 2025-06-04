// SCRIPT PARA CARGAR LOS DATOS DESDE EL XML
function students() {
  fetch('data/students.xml')
    .then(res => res.text())
    .then(xmlText => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
      const students = [...xmlDoc.getElementsByTagName('student')];
      const tbody = document.getElementById('students-table');
      tbody.innerHTML = '';

      students.forEach(student => {
        const id = student.getElementsByTagName('id')[0]?.textContent;
        const nombre = student.getElementsByTagName('nombre')[0]?.textContent;
        const apellidos = student.getElementsByTagName('apellidos')[0]?.textContent;
        const fecha = student.getElementsByTagName('fecha_nac')[0]?.textContent;
        const correo = student.getElementsByTagName('correo')[0]?.textContent;

        const row = document.createElement('tr');
        row.innerHTML = `<td>${id}</td><td>${nombre}</td><td>${apellidos}</td><td>${fecha}</td><td>${correo}</td>`;
        tbody.appendChild(row);
      });
    });
}

// SCRIPT PARA REGISTRAR UN NUEVO PRÉSTAMO POR EL NOMBRE DEL ESTUDIANTE Y EL TÍTULO DEL LIBRO
const form = document.querySelector('#prestamos form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const nombre = document.getElementById('nombre')?.value;
      const libro = document.getElementById('libro')?.value;

      const div = document.createElement('div');
      div.classList.add('tarjeta-prestamo');
      div.innerHTML = ` 
        <h2>${nombre}</h2>
        <p><strong>Título del libro:</strong> ${libro}</p>
        <button onclick="this.parentElement.remove()">Eliminar</button>
      `;

      document.getElementById('prestamos-container').appendChild(div);
      form.reset();
    });
  }

// SCRIPT PARA CARGAR LOS LIBROS DESDE UN JSON
fetch('data/books.json')
    .then(response => response.json())
    .then(data => mostrarLibros(data));

function mostrarLibros(books) {
    const contenedor = document.getElementById('libros-container');
    books.forEach(libro => {
        const div = document.createElement('div');
        div.classList.add('tarjeta-libro');
        div.classList.add(libro.available ? 'disponible' : 'no-disponible');
        div.innerHTML = `
            <h1>${libro.title}</h1>
            <p>Autor: ${libro.author}</p>
            <p>Estado: ${libro.available ? 'Disponible' : 'Prestado'}</p>
            <button onclick="this.parentElement.remove()">Eliminar</button>
        `;
        contenedor.appendChild(div);
    });
}