let productos = [
    {
        nombre: "Martillo",
        categoria: "Herramientas",
        imagen: "https://thumbs.dreamstime.com/z/martillo-11642945.jpg?ct=jpeg",
        codigo: "001",
        precio: 35000,
        marca: "MarcaX",
        material: "Acero",
        peso: "1.5 kg"
    },
    {
        nombre: "Destornillador",
        categoria: "Herramientas",
        imagen: "https://www.ferreteriasuprema.com/cdn/shop/products/Destornilladorplanocontopetraseroparagolpear_1200x1200.jpg?v=1609951438",
        codigo: "002",
        precio: 19000,
        marca: "MarcaY",
        material: "Acero",
        peso: "0.5 kg"
    },
    {
        nombre: "Cincel",
        categoria: "Herramientas",
        imagen: "https://egberscompany.com/wp-content/uploads/2020/06/12127.jpg",
        codigo: "003",
        precio: 18000,
        marca: "MarcaZ",
        material: "Hierro",
        peso: "0.8 kg"
    },
    {
        nombre: "Sierra Circular",
        categoria: "Herramientas",
        imagen: "https://www.atrial.com.co/wp-content/uploads/2022/02/sierra-circular-compacta-4-1-2-750-w-82b.jpg",
        codigo: "004",
        precio: 319000,
        marca: "MarcaA",
        material: "Aluminio",
        peso: "2 kg"
    },
    {
        nombre: "Cinta Métrica",
        categoria: "Herramientas",
        imagen: "https://dstamaria.com/cdn/shop/products/cinta-metrica.jpg?v=1669393487",
        codigo: "005",
        precio: 11900,
        marca: "MarcaB",
        material: "Plástico",
        peso: "0.3 kg"
    },
    {
        nombre: "Taladro Percutor",
        categoria: "Herramientas",
        imagen: "https://ferreterianacional.com.co/cdn/shop/products/DWD520_1_1200x1200.png?v=1586391588",
        codigo: "006",
        precio: 125000,
        marca: "MarcaC",
        material: "Metal",
        peso: "1.8 kg"
    },
    {
        nombre: "Llave de Boca",
        categoria: "Herramientas",
        imagen: "https://disfecol.com.co/wp-content/uploads/2023/01/6Z.2.png",
        codigo: "007",
        precio: 24000,
        marca: "MarcaD",
        material: "Acero",
        peso: "0.9 kg"
    },
    {
        nombre: "Brocas para Madera",
        categoria: "Herramientas",
        imagen: "https://hechitools.com/cdn/shop/products/D-23204_e9dde946-2429-464a-b3fd-bcf5bfafe3f6.jpg?v=1615915898",
        codigo: "008",
        precio: 17000,
        marca: "MarcaE",
        material: "Acero",
        peso: "0.4 kg"
    },
    {
        nombre: "Martillo Percutor",
        categoria: "Herramientas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdvxlRUfjDy3ZOmHNRXxC9GqbLUElqIy_JYA&s",
        codigo: "009",
        precio: 59000,
        marca: "MarcaF",
        material: "Metal",
        peso: "2.2 kg"
    },
    {
        nombre: "Cinta de Carpintero",
        categoria: "Herramientas",
        imagen: "https://m.media-amazon.com/images/I/31r6LxVe+DL._AC_UF894,1000_QL80_.jpg",
        codigo: "010",
        precio: 13500,
        marca: "MarcaG",
        material: "Plástico",
        peso: "0.2 kg"
    },
    {
        nombre: "Escalera de Aluminio",
        categoria: "Herramientas",
        imagen: "https://www.ferreteriasamir.com/10167-large_default/escalera-de-aluminio-de-5-peldanos-183-mts-certificada-referencia-stl-6-r.jpg",
        codigo: "011",
        precio: 89000,
        marca: "MarcaH",
        material: "Aluminio",
        peso: "4 kg"
    },
    {
        nombre: "Serrucho",
        categoria: "Herramientas",
        imagen: "https://www.shutterstock.com/image-photo/saw-isolated-on-white-background-260nw-425591179.jpg",
        codigo: "012",
        precio: 18500,
        marca: "MarcaI",
        material: "Acero",
        peso: "0.7 kg"
    },
    {
        nombre: "Nivel de Burbuja",
        categoria: "Herramientas",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_816314-MLU71133540613_082023-O.webp",
        codigo: "013",
        precio: 18500,
        marca: "MarcaJ",
        material: "Plástico",
        peso: "0.5 kg"
    },
    {
        nombre: "Taladro Inalámbrico",
        categoria: "Herramientas",
        imagen: "https://belltec.com.co/13261-large_default/taladro-inalambrico-percutor-38-12v-2-bat-makita-hp333dwye.jpg",
        codigo: "014",
        precio: 179000,
        marca: "MarcaK",
        material: "Metal",
        peso: "1.7 kg"
    },
    {
        nombre: "Pinzas de Electricista",
        categoria: "Herramientas",
        imagen: "https://www.fisa.com.co/298-home_default/pinzas-para-electricista-268g-urrea.jpg",
        codigo: "015",
        precio: 25000,
        marca: "MarcaL",
        material: "Acero",
        peso: "0.6 kg"
    },
    {
        nombre: "Sierra de Calar",
        categoria: "Herramientas",
        imagen: "https://belltec.com.co/17038-large_default/sierra-caladora-720w-vv-sisorbital-baja-vibraci.jpg",
        codigo: "016",
        precio: 129000,
        marca: "MarcaM",
        material: "Metal",
        peso: "1.5 kg"
    },
    {
        nombre: "Cepillo Eléctrico",
        categoria: "Herramientas",
        imagen: "https://belltec.com.co/19909-large_default/cepillo-electrico-para-madera-total-1050w-120v-utl1108236.jpg",
        codigo: "017",
        precio: 145000,
        marca: "MarcaN",
        material: "Metal",
        peso: "1.3 kg"
    },
    {
        nombre: "Llave de Impacto",
        categoria: "Herramientas",
        imagen: "https://ferreteriaherkules.com.co/wp-content/uploads/2023/07/Llave-de-impacto-Truper-IMP-1-2N.jpg",
        codigo: "018",
        precio: 195000,
        marca: "MarcaO",
        material: "Acero",
        peso: "2 kg"
    },
    {
        nombre: "Alicate Universal",
        categoria: "Herramientas",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_963067-MCO49276888819_032022-O.webp",
        codigo: "019",
        precio: 19000,
        marca: "MarcaP",
        material: "Acero",
        peso: "0.7 kg"
    },
    {
        nombre: "Broca de Metal",
        categoria: "Herramientas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDpWASWFP_xuYFL2_WInq9PLSpGJtT6X_pg&s",
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
        imagen: "https://barracagallinal.com.uy/wp-content/uploads/2020/08/9006-1.jpg",
        codigo: "021",
        precio: 38000,
        marca: "MarcaR",
        material: "Cemento",
        peso: "50 kg"
    },
    {
        nombre: "Varilla de Acero",
        categoria: "Materiales de Construcción",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1KDa_0YGnASz3TK63y_jemL7KHLlEeKLzg&s",
        codigo: "022",
        precio: 8900,
        marca: "MarcaS",
        material: "Acero",
        peso: "6 kg"
    },
    {
        nombre: "Ladrillo de Arcilla",
        categoria: "Materiales de Construcción",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lHflPnP569NLtzbjufN0vWJV_ZHVhBIURw&s",
        codigo: "023",
        precio: 650,
        marca: "MarcaT",
        material: "Arcilla",
        peso: "2 kg"
    },
    {
        nombre: "Teja de Barro",
        categoria: "Materiales de Construcción",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThi9oHLZsIWRHpiiGG_bERNcRbYMtzdeVUxA&s",
        codigo: "024",
        precio: 7500,
        marca: "MarcaU",
        material: "Barro",
        peso: "1 kg"
    },
    {
        nombre: "Bloque de Concreto",
        categoria: "Materiales de Construcción",
        imagen: "https://cdnx.jumpseller.com/prefabricados-peniel/image/14043068/resize/540/600?1692219957",
        codigo: "025",
        precio: 1800,
        marca: "MarcaV",
        material: "Concreto",
        peso: "10 kg"
    },
    {
        nombre: "Piedra Triturada",
        categoria: "Materiales de Construcción",
        imagen: "https://canterasantarita.com/wp-content/uploads/2021/11/Triturado-1-canteras-santa-rita.jpg",
        codigo: "026",
        precio: 25000,
        marca: "MarcaW",
        material: "Piedra",
        peso: "1000 kg"
    },
    {
        nombre: "Arena de Río",
        categoria: "Materiales de Construcción",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQScGUkpcPcfIyafvMoPZwsiSCnwhzD12kUrw&s",
        codigo: "027",
        precio: 60000,
        marca: "MarcaX",
        material: "Arena",
        peso: "2000 kg"
    },
    {
        nombre: "Cerámica para Pisos",
        categoria: "Materiales de Construcción",
        imagen: "https://decorceramica.vteximg.com.br/arquivos/ids/203372-800-800/KC04OE1290-Tendidodiagonalpiso.jpg?v=638379218247500000",
        codigo: "028",
        precio: 32000,
        marca: "MarcaY",
        material: "Cerámica",
        peso: "5 kg"
    },
    {
        nombre: "Plancha de Policarbonato",
        categoria: "Materiales de Construcción",
        imagen: "https://www.femoglas.com/wp-content/uploads/2021/04/01-POLICARBONATO-ALVEOLAR-PC.-ALVEOLAR-TRANSPARENTE-04MM.jpg",
        codigo: "029",
        precio: 125000,
        marca: "MarcaZ",
        material: "Policarbonato",
        peso: "3 kg"
    },
    {
        nombre: "Perfiles de Aluminio",
        categoria: "Materiales de Construcción",
        imagen: "https://images.squarespace-cdn.com/content/v1/5b5e4e7f1aef1de885070147/1533176286523-4IK4BT6PJK7HNMLKNEA9/Fotolia_47521136_Subscription_Monthly_XXL-1024x640.jpg",
        codigo: "030",
        precio: 58000,
        marca: "MarcaA",
        material: "Aluminio",
        peso: "4 kg"
    },
    {
        nombre: "Tubo de PVC",
        categoria: "Materiales de Construcción",
        imagen: "https://easycolombia.vtexassets.com/arquivos/ids/196595-800-800?v=638150307572870000&width=800&height=800&aspect=true",
        codigo: "031",
        precio: 18500,
        marca: "MarcaB",
        material: "PVC",
        peso: "2 kg"
    },
    {
        nombre: "Impermeabilizante Asfáltico",
        categoria: "Materiales de Construcción",
        imagen: "https://sikabrasil.com.br/sikaguia/ecu/ec-Sikafill-10-Negro-01253417.png",
        codigo: "032",
        precio: 48000,
        marca: "MarcaC",
        material: "Asfalto",
        peso: "10 kg"
    },
    {
        nombre: "Láminas de Zinc",
        categoria: "Materiales de Construcción",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3vqURxp7cKcCanys8YZfHmAt35F7KrQx95A&s",
        codigo: "033",
        precio: 21500,
        marca: "MarcaD",
        material: "Zinc",
        peso: "5 kg"
    },
    {
        nombre: "Bolsa de Cemento Blanco",
        categoria: "Materiales de Construcción",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHOn8ft6mEQYLPyh59kc7jKYDQ2oGFyc5rw&s",
        codigo: "034",
        precio: 42000,
        marca: "MarcaE",
        material: "Cemento",
        peso: "40 kg"
    },
    {
        nombre: "Tubo Estructural",
        categoria: "Materiales de Construcción",
        imagen: "https://www.nortemateriales.com.co/wp-content/uploads/2021/03/F-1.jpg",
        codigo: "035",
        precio: 29500,
        marca: "MarcaF",
        material: "Metal",
        peso: "15 kg"
    },
    {
        nombre: "Tablero Contrachapado",
        categoria: "Materiales de Construcción",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlg3Fvi3a4_JuXqMBXDxsSNevhG9Uptb__w&s",
        codigo: "036",
        precio: 85000,
        marca: "MarcaG",
        material: "Madera",
        peso: "20 kg"
    },
    {
        nombre: "Pegamento para Porcelanato",
        categoria: "Materiales de Construcción",
        imagen: "https://admintienda.coval.com.co/backend/admin/backend/web/archivosDelCliente/items/images/ADHESIVOS-IMPERMEABILIZANTES-Y-CEMENTOS-ADHESIVOS-PARA-REVESTIMIENTO-SIKACERAM-PORCELANATO-GRIS--x-25-Kg-SIKA-154220210513054902.jpg",
        codigo: "037",
        precio: 26500,
        marca: "MarcaH",
        material: "Adhesivo",
        peso: "5 kg"
    },
    {
        nombre: "Lija para Madera",
        categoria: "Materiales de Construcción",
        imagen: "https://toolcraft.com.co/media/catalog/product/cache/5acb921b5de42abe363841164dfef787/t/c/tc2832.jpg",
        codigo: "038",
        precio: 6500,
        marca: "MarcaI",
        material: "Papel",
        peso: "0.1 kg"
    },
    {
        nombre: "Bloque de Vidrio",
        categoria: "Materiales de Construcción",
        imagen: "https://vitrolit.com/wp-content/uploads/2017/09/TANGERINE-A-VV-GB2-tx-min.jpg",
        codigo: "039",
        precio: 18500,
        marca: "MarcaJ",
        material: "Vidrio",
        peso: "2 kg"
    },
    {
        nombre: "Perfil de Hierro Angular",
        categoria: "Materiales de Construcción",
        imagen: "https://hierrosgil.com/wp-content/uploads/2019/10/perfiles-simpleT-300x300.jpg",
        codigo: "040",
        precio: 39000,
        marca: "MarcaK",
        material: "Hierro",
        peso: "7 kg"
    },
    {
        nombre: "Pegamento para Azulejos",
        categoria: "Materiales de Construcción",
        imagen: "https://www.vitcas.es/uploads/TsProducts/pictures/mini2_picture_164.jpg",
        codigo: "041",
        precio: 28500,
        marca: "MarcaL",
        material: "Adhesivo",
        peso: "2 kg"
    },
    {
        nombre: "Tubo de PVC para Drenaje",
        categoria: "Materiales de Construcción",
        imagen: "https://depotmx.com/wp-content/uploads/2019/05/alcanta.jpg",
        codigo: "042",
        precio: 20500,
        marca: "MarcaM",
        material: "PVC",
        peso: "4 kg"
    },
    {
        nombre: "Cinta de Medición de Obra",
        categoria: "Materiales de Construcción",
        imagen: "https://www.comercialcaro.es/FitxersWeb/135413/cinta%20metrica%201360.jpg",
        codigo: "043",
        precio: 13500,
        marca: "MarcaN",
        material: "Plástico",
        peso: "0.5 kg"
    },
    {
        nombre: "Láminas de Plycem",
        categoria: "Materiales de Construcción",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmhU6_7VA4Lfhxy5YKEcd0XU-APGYKTKl8zw&s",
        codigo: "044",
        precio: 69000,
        marca: "MarcaO",
        material: "Plycem",
        peso: "8 kg"
    },
    {
        nombre: "Cemento Blanco",
        categoria: "Materiales de Construcción",
        imagen: "https://edfkimg.s3.amazonaws.com/insumos/insm31db0b9717f13af8.jpg",
        codigo: "045",
        precio: 45000,
        marca: "MarcaP",
        material: "Cemento",
        peso: "30 kg"
    },
    {
        nombre: "Perfil de Acero Galvanizado",
        categoria: "Materiales de Construcción",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShcyyj5Az5VOBZ0yG7St2-QL7ftAdl1kObHA&s",
        codigo: "046",
        precio: 58000,
        marca: "MarcaQ",
        material: "Acero",
        peso: "5 kg"
    },
    {
        nombre: "Tubo de Hierro Fundido",
        categoria: "Materiales de Construcción",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT628wRDJoeqUD8vFRwwVXlCNsYUrzls5qb4g&s",
        codigo: "047",
        precio: 69000,
        marca: "MarcaR",
        material: "Hierro",
        peso: "8 kg"
    },
    {
        nombre: "Teja de Barro",
        categoria: "Materiales de Construcción",
        imagen: "https://www.santafe.com.co/wp-content/uploads/2022/03/Spanish-S-Red.-scaled.jpg",
        codigo: "048",
        precio: 8500,
        marca: "MarcaS",
        material: "Barro",
        peso: "1 kg"
    },
    {
        nombre: "Pintura para Exteriores",
        categoria: "Materiales de Construcción",
        imagen: "https://admintienda.coval.com.co/backend/admin/backend/web/archivosDelCliente/items/images/20210513071334-EXTERIOR-MUROS-PINTUR-COLOR-FACHADA-BLANC-NIEV-5Gl-ETER-1322202105130713347036.jpg",
        codigo: "049",
        precio: 55000,
        marca: "MarcaT",
        material: "Pintura",
        peso: "20 kg"
    },
    {
        nombre: "Tubo de Conducción Eléctrica",
        categoria: "Materiales de Construcción",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsKu8r9_Ihlbm3aMJg2VAEKVwBygucoaHNQ&s",
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

function insertaArreglo(event) {

    event.preventDefault();

    let errors = [];

    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const imagen = document.getElementById("imagen").value;
    const codigo = document.getElementById("codigo").value;
    const precio = document.getElementById("precio").value;
    const marca = document.getElementById("marca").value;
    const material = document.getElementById("material").value;
    const peso = document.getElementById("peso").value;

    if (!nombre) errors.push("Nombre del Producto falta");
    if (!categoria) errors.push("Categoría falta");
    if (!imagen) errors.push("Imagen del Producto falta");
    if (!codigo) errors.push("Código de Producto falta");
    if (!precio) errors.push("Precio falta");
    if (!marca) errors.push("Marca falta");
    if (!material) errors.push("Material falta");
    if (!peso) errors.push("Peso falta");

    if (errors.length > 0) {
        verErrores(errors);
        return false;
    }

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

    document.getElementById("registro").reset();

    alert("Producto ingresado correctamente!!!")
}

function verErrores(errors) {
    localStorage.setItem("errors", JSON.stringify(errors));
    window.location.href = "errores.html";
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
    }, 2000);
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