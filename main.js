let productos = [
    { 
        nombre: "Martillo",
        categoria: "Herramientas",
        imagen: "martillo.jpg",
        codigo: "001",
        precio: 35000,
        marca: "MarcaX",
        material: "Acero",
        peso: "1.5 kg"
    },
    { 
        nombre: "Destornillador",
        categoria: "Herramientas",
        imagen: "destornillador.jpg",
        codigo: "002",
        precio: 19000,
        marca: "MarcaY",
        material: "Acero",
        peso: "0.5 kg"
    },
    { 
        nombre: "Cincel",
        categoria: "Herramientas",
        imagen: "cincel.jpg",
        codigo: "003",
        precio: 18000,
        marca: "MarcaZ",
        material: "Hierro",
        peso: "0.8 kg"
    },
    { 
        nombre: "Sierra Circular",
        categoria: "Herramientas",
        imagen: "sierra_circular.jpg",
        codigo: "004",
        precio: 319000,
        marca: "MarcaA",
        material: "Aluminio",
        peso: "2 kg"
    },
    { 
        nombre: "Cinta Métrica",
        categoria: "Herramientas",
        imagen: "cinta_metrica.jpg",
        codigo: "005",
        precio: 11900,
        marca: "MarcaB",
        material: "Plástico",
        peso: "0.3 kg"
    },
    { 
        nombre: "Taladro Percutor",
        categoria: "Herramientas",
        imagen: "taladro_percutor.jpg",
        codigo: "006",
        precio: 125000,
        marca: "MarcaC",
        material: "Metal",
        peso: "1.8 kg"
    },
    { 
        nombre: "Llave de Boca",
        categoria: "Herramientas",
        imagen: "llave_boca.jpg",
        codigo: "007",
        precio: 24000,
        marca: "MarcaD",
        material: "Acero",
        peso: "0.9 kg"
    },
    { 
        nombre: "Brocas para Madera",
        categoria: "Herramientas",
        imagen: "brocas_madera.jpg",
        codigo: "008",
        precio: 17000,
        marca: "MarcaE",
        material: "Acero",
        peso: "0.4 kg"
    },
    { 
        nombre: "Martillo Percutor",
        categoria: "Herramientas",
        imagen: "martillo_percutor.jpg",
        codigo: "009",
        precio: 59000,
        marca: "MarcaF",
        material: "Metal",
        peso: "2.2 kg"
    },
    { 
        nombre: "Cinta de Carpintero",
        categoria: "Herramientas",
        imagen: "cinta_carpintero.jpg",
        codigo: "010",
        precio: 13500,
        marca: "MarcaG",
        material: "Plástico",
        peso: "0.2 kg"
    },
    { 
        nombre: "Escalera de Aluminio",
        categoria: "Herramientas",
        imagen: "escalera_aluminio.jpg",
        codigo: "011",
        precio: 89000,
        marca: "MarcaH",
        material: "Aluminio",
        peso: "4 kg"
    },
    { 
        nombre: "Serrucho",
        categoria: "Herramientas",
        imagen: "serrucho.jpg",
        codigo: "012",
        precio: 18500,
        marca: "MarcaI",
        material: "Acero",
        peso: "0.7 kg"
    },
    { 
        nombre: "Nivel de Burbuja",
        categoria: "Herramientas",
        imagen: "nivel_burbuja.jpg",
        codigo: "013",
        precio: 18500,
        marca: "MarcaJ",
        material: "Plástico",
        peso: "0.5 kg"
    },
    { 
        nombre: "Taladro Inalámbrico",
        categoria: "Herramientas",
        imagen: "taladro_inalambrico.jpg",
        codigo: "014",
        precio: 179000,
        marca: "MarcaK",
        material: "Metal",
        peso: "1.7 kg"
    },
    { 
        nombre: "Pinzas de Electricista",
        categoria: "Herramientas",
        imagen: "pinzas_electricista.jpg",
        codigo: "015",
        precio: 25000,
        marca: "MarcaL",
        material: "Acero",
        peso: "0.6 kg"
    },
    { 
        nombre: "Sierra de Calar",
        categoria: "Herramientas",
        imagen: "sierra_calar.jpg",
        codigo: "016",
        precio: 129000,
        marca: "MarcaM",
        material: "Metal",
        peso: "1.5 kg"
    },
    { 
        nombre: "Cepillo Eléctrico",
        categoria: "Herramientas",
        imagen: "cepillo_electrico.jpg",
        codigo: "017",
        precio: 145000,
        marca: "MarcaN",
        material: "Metal",
        peso: "1.3 kg"
    },
    { 
        nombre: "Llave de Impacto",
        categoria: "Herramientas",
        imagen: "llave_impacto.jpg",
        codigo: "018",
        precio: 195000,
        marca: "MarcaO",
        material: "Acero",
        peso: "2 kg"
    },
    { 
        nombre: "Alicate Universal",
        categoria: "Herramientas",
        imagen: "alicate_universal.jpg",
        codigo: "019",
        precio: 19000,
        marca: "MarcaP",
        material: "Acero",
        peso: "0.7 kg"
    },
    { 
        nombre: "Broca de Metal",
        categoria: "Herramientas",
        imagen: "broca_metal.jpg",
        codigo: "020",
        precio: 8500,
        marca: "MarcaQ",
        material: "Metal",
        peso: "0.3 kg"
    },
    // Materiales de construcción
    { 
        nombre: "Cemento Portland",
        categoria: "Materiales de Construcción",
        imagen: "cemento_portland.jpg",
        codigo: "021",
        precio: 38000,
        marca: "MarcaR",
        material: "Cemento",
        peso: "50 kg"
    },
    { 
        nombre: "Varilla de Acero",
        categoria: "Materiales de Construcción",
        imagen: "varilla_acero.jpg",
        codigo: "022",
        precio: 8900,
        marca: "MarcaS",
        material: "Acero",
        peso: "6 kg"
    },
    { 
        nombre: "Ladrillo de Arcilla",
        categoria: "Materiales de Construcción",
        imagen: "ladrillo_arcilla.jpg",
        codigo: "023",
        precio: 650,
        marca: "MarcaT",
        material: "Arcilla",
        peso: "2 kg"
    },
    { 
        nombre: "Teja de Barro",
        categoria: "Materiales de Construcción",
        imagen: "teja_barro.jpg",
        codigo: "024",
        precio: 7500,
        marca: "MarcaU",
        material: "Barro",
        peso: "1 kg"
    },
    { 
        nombre: "Bloque de Concreto",
        categoria: "Materiales de Construcción",
        imagen: "bloque_concreto.jpg",
        codigo: "025",
        precio: 1800,
        marca: "MarcaV",
        material: "Concreto",
        peso: "10 kg"
    },
    { 
        nombre: "Piedra Triturada",
        categoria: "Materiales de Construcción",
        imagen: "piedra_triturada.jpg",
        codigo: "026",
        precio: 25000,
        marca: "MarcaW",
        material: "Piedra",
        peso: "1000 kg"
    },
    { 
        nombre: "Arena de Río",
        categoria: "Materiales de Construcción",
        imagen: "arena_rio.jpg",
        codigo: "027",
        precio: 60000,
        marca: "MarcaX",
        material: "Arena",
        peso: "2000 kg"
    },
    { 
        nombre: "Cerámica para Pisos",
        categoria: "Materiales de Construcción",
        imagen: "ceramica_pisos.jpg",
        codigo: "028",
        precio: 32000,
        marca: "MarcaY",
        material: "Cerámica",
        peso: "5 kg"
    },
    { 
        nombre: "Plancha de Policarbonato",
        categoria: "Materiales de Construcción",
        imagen: "plancha_policarbonato.jpg",
        codigo: "029",
        precio: 125000,
        marca: "MarcaZ",
        material: "Policarbonato",
        peso: "3 kg"
    },
    { 
        nombre: "Perfiles de Aluminio",
        categoria: "Materiales de Construcción",
        imagen: "perfiles_aluminio.jpg",
        codigo: "030",
        precio: 58000,
        marca: "MarcaA",
        material: "Aluminio",
        peso: "4 kg"
    },
    { 
        nombre: "Tubo de PVC",
        categoria: "Materiales de Construcción",
        imagen: "tubo_pvc.jpg",
        codigo: "031",
        precio: 18500,
        marca: "MarcaB",
        material: "PVC",
        peso: "2 kg"
    },
    { 
        nombre: "Impermeabilizante Asfáltico",
        categoria: "Materiales de Construcción",
        imagen: "impermeabilizante_asfaltico.jpg",
        codigo: "032",
        precio: 48000,
        marca: "MarcaC",
        material: "Asfalto",
        peso: "10 kg"
    },
    { 
        nombre: "Láminas de Zinc",
        categoria: "Materiales de Construcción",
        imagen: "laminas_zinc.jpg",
        codigo: "033",
        precio: 21500,
        marca: "MarcaD",
        material: "Zinc",
        peso: "5 kg"
    },
    { 
        nombre: "Bolsa de Cemento Blanco",
        categoria: "Materiales de Construcción",
        imagen: "cemento_blanco.jpg",
        codigo: "034",
        precio: 42000,
        marca: "MarcaE",
        material: "Cemento",
        peso: "40 kg"
    },
    { 
        nombre: "Tubo Estructural",
        categoria: "Materiales de Construcción",
        imagen: "tubo_estructural.jpg",
        codigo: "035",
        precio: 29500,
        marca: "MarcaF",
        material: "Metal",
        peso: "15 kg"
    },
    { 
        nombre: "Tablero Contrachapado",
        categoria: "Materiales de Construcción",
        imagen: "tablero_contrachapado.jpg",
        codigo: "036",
        precio: 85000,
        marca: "MarcaG",
        material: "Madera",
        peso: "20 kg"
    },
    { 
        nombre: "Pegamento para Porcelanato",
        categoria: "Materiales de Construcción",
        imagen: "pegamento_porcelanato.jpg",
        codigo: "037",
        precio: 26500,
        marca: "MarcaH",
        material: "Adhesivo",
        peso: "5 kg"
    },
    { 
        nombre: "Lija para Madera",
        categoria: "Materiales de Construcción",
        imagen: "lija_madera.jpg",
        codigo: "038",
        precio: 6500,
        marca: "MarcaI",
        material: "Papel",
        peso: "0.1 kg"
    },
    { 
        nombre: "Bloque de Vidrio",
        categoria: "Materiales de Construcción",
        imagen: "bloque_vidrio.jpg",
        codigo: "039",
        precio: 18500,
        marca: "MarcaJ",
        material: "Vidrio",
        peso: "2 kg"
    },
    { 
        nombre: "Perfil de Hierro Angular",
        categoria: "Materiales de Construcción",
        imagen: "perfil_hierro_angular.jpg",
        codigo: "040",
        precio: 39000,
        marca: "MarcaK",
        material: "Hierro",
        peso: "7 kg"
    },
    { 
        nombre: "Pegamento para Azulejos",
        categoria: "Materiales de Construcción",
        imagen: "pegamento_azulejos.jpg",
        codigo: "041",
        precio: 28500,
        marca: "MarcaL",
        material: "Adhesivo",
        peso: "2 kg"
    },
    { 
        nombre: "Tubo de PVC para Drenaje",
        categoria: "Materiales de Construcción",
        imagen: "tubo_pvc_drenaje.jpg",
        codigo: "042",
        precio: 20500,
        marca: "MarcaM",
        material: "PVC",
        peso: "4 kg"
    },
    { 
        nombre: "Cinta de Medición de Obra",
        categoria: "Materiales de Construcción",
        imagen: "cinta_medicion_obra.jpg",
        codigo: "043",
        precio: 13500,
        marca: "MarcaN",
        material: "Plástico",
        peso: "0.5 kg"
    },
    { 
        nombre: "Láminas de Plycem",
        categoria: "Materiales de Construcción",
        imagen: "lamina_plycem.jpg",
        codigo: "044",
        precio: 69000,
        marca: "MarcaO",
        material: "Plycem",
        peso: "8 kg"
    },
    { 
        nombre: "Cemento Blanco",
        categoria: "Materiales de Construcción",
        imagen: "cemento_blanco.jpg",
        codigo: "045",
        precio: 45000,
        marca: "MarcaP",
        material: "Cemento",
        peso: "30 kg"
    },
    { 
        nombre: "Perfil de Acero Galvanizado",
        categoria: "Materiales de Construcción",
        imagen: "perfil_acero_galvanizado.jpg",
        codigo: "046",
        precio: 58000,
        marca: "MarcaQ",
        material: "Acero",
        peso: "5 kg"
    },
    { 
        nombre: "Tubo de Hierro Fundido",
        categoria: "Materiales de Construcción",
        imagen: "tubo_hierro_fundido.jpg",
        codigo: "047",
        precio: 69000,
        marca: "MarcaR",
        material: "Hierro",
        peso: "8 kg"
    },
    { 
        nombre: "Teja de Barro",
        categoria: "Materiales de Construcción",
        imagen: "teja_barro.jpg",
        codigo: "048",
        precio: 8500,
        marca: "MarcaS",
        material: "Barro",
        peso: "1 kg"
    },
    { 
        nombre: "Pintura para Exteriores",
        categoria: "Materiales de Construcción",
        imagen: "pintura_exteriores.jpg",
        codigo: "049",
        precio: 55000,
        marca: "MarcaT",
        material: "Pintura",
        peso: "20 kg"
    },
    { 
        nombre: "Tubo de Conducción Eléctrica",
        categoria: "Materiales de Construcción",
        imagen: "tubo_conduccion_electrica.jpg",
        codigo: "050",
        precio: 19500,
        marca: "MarcaU",
        material: "Metal",
        peso: "3 kg"
    }
];

const limpiar = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("imagen").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("marca").value = "";
    document.getElementById("material").value = "";
    document.getElementById("peso").value = "";
}

function insertaArreglo(event){

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const imagen = document.getElementById("imagen").value;
    const codigo = document.getElementById("codigo").value;
    const precio = document.getElementById("precio").value;
    const marca = document.getElementById("marca").value;
    const material = document.getElementById("material").value;
    const peso = document.getElementById("peso").value;

    if (nombre && categoria && imagen && codigo && precio && marca && material && peso) {
        const nuevoValor = {
            nombre: nombre,
            categoria: categoria,
            imagen: imagen,
            codigo: codigo,
            precio: precio,
            marca: marca,
            material: material,
            peso: peso
        }

        productos.push(nuevoValor);
        
        const productosNuevos = JSON.parse(localStorage.getItem('productos')) || [];
        productosNuevos.push(nuevoValor);
        localStorage.setItem('productos', JSON.stringify(productosNuevos));

        document.getElementById("registroForm").reset();
        
        alert("Producto ingresado correctamente!!!")
    }else {

        alert("Llene el formulario Por favor!");

    }
}

const productosPorPagina = 10; 
const mainContent = document.getElementById('main-content');
const paginationContainer = document.getElementById('pagination');

function obtenerProductosLocalStorage() {
    return JSON.parse(localStorage.getItem('productos')) || []; // Retorna un arreglo vacío si no hay productos en el localStorage
}

function mostrarProductos(pagina) {
    mainContent.innerHTML = ''; 

    const productos = obtenerProductosLocalStorage(); // Obtiene los productos del localStorage

    const inicio = (pagina - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;

    for (let i = inicio; i < fin && i < productos.length; i++) {
        const producto = productos[i];

        // Crea una carta HTML para cada producto
        const card = document.createElement('div');
        card.classList.add('card');

        // Rellena la carta con información del producto
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p><strong>Categoría:</strong> ${producto.categoria}</p>
            <p><strong>Código:</strong> ${producto.codigo}</p>
            <p><strong>Precio:</strong> $${producto.precio}</p>
            <p><strong>Marca:</strong> ${producto.marca}</p>
            <p><strong>Material:</strong> ${producto.material}</p>
            <p><strong>Peso:</strong> ${producto.peso}</p>
        `;

        // Agrega la carta al contenido principal
        mainContent.appendChild(card);
    }
}

function mostrarPaginacion() {
    paginationContainer.innerHTML = '';

    const productos = obtenerProductosLocalStorage(); // Obtiene los productos del localStorage
    const totalPages = Math.ceil(productos.length / productosPorPagina);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.addEventListener('click', () => {
            mostrarProductos(i);
            resaltarPaginaActiva(i);
        });
        paginationContainer.appendChild(button);
    }

    mostrarProductos(1); 
    resaltarPaginaActiva(1); 
}

function resaltarPaginaActiva(pagina) {
    const buttons = paginationContainer.getElementsByTagName('button');
    for (let button of buttons) {
        button.classList.remove('active');
    }
    buttons[pagina - 1].classList.add('active');
}

// Llama a la función para mostrar la paginación al cargar la página
document.addEventListener('DOMContentLoaded', mostrarPaginacion);

// Inicializa el localStorage con los productos si está vacío
if (!localStorage.getItem('productos')) {
    localStorage.setItem('productos', JSON.stringify(productos));
}

// Función para obtener productos desde el localStorage
function obtenerProductosLocalStorage() {
    return JSON.parse(localStorage.getItem('productos')) || [];
}

document.getElementById('buscar-btn').addEventListener('click', () => {
    const nombre = document.getElementById('buscar-nombre').value.toLowerCase();
    const categoria = document.getElementById('buscar-categoria').value.toLowerCase();
    const codigo = document.getElementById('buscar-codigo').value.toLowerCase();
    const tbody = document.getElementById('resultados-body');

    const productos = obtenerProductosLocalStorage(); // Obtiene productos del localStorage

    tbody.innerHTML = `<tr><td colspan="8">Buscando...</td></tr>`;

    setTimeout(() => {
        const resultados = productos.filter(producto => {
            return (
                (nombre === "" || producto.nombre.toLowerCase().includes(nombre)) &&
                (categoria === "" || producto.categoria.toLowerCase().includes(categoria)) &&
                (codigo === "" || producto.codigo.toLowerCase().includes(codigo))
            );
        });
    
        mostrarResultados(resultados);
    },2000);
});

function mostrarResultados(resultados) {
    const resultadosBody = document.getElementById('resultados-body');
    resultadosBody.innerHTML = '';

    resultados.forEach(producto => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="50"></td>
            <td>${producto.codigo}</td>
            <td>${producto.precio}</td>
            <td>${producto.marca}</td>
            <td>${producto.material}</td>
            <td>${producto.peso}</td>
        `;

        resultadosBody.appendChild(row);
    });
}