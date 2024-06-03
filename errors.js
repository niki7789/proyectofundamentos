// Obtener los errores del localStorage
let errores = JSON.parse(localStorage.getItem("errors"));

// Obtener la lista de errores en el HTML
let erroresList = document.getElementById("error");

// Verificar si hay errores para mostrar
if (errores && errores.length > 0) {
    // Recorrer cada elemento del arreglo de errores y agregarlos a la lista en el HTML
    errores.forEach(error => {
        let li = document.createElement('li');
        li.textContent = error;
        erroresList.appendChild(li);
    });
} else {
    // Si no hay errores, mostrar un mensaje indicando que no hay errores disponibles
    let li = document.createElement('li');
    li.textContent = "No hay errores disponibles.";
    erroresList.appendChild(li);
}
