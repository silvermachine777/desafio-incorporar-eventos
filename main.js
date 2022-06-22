const contenedorProductos = document.getElementById('listaProductos');
const filasDeProductosComprados = document.getElementById('filasDeProductos');
const carritoDeCompras = [];

const productos = [{
        id: 1,
        nombre: "Desodorante natural",
        precio: 20000,
        img: "/assets/images/product.png",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Aceite esencial de romero",
        precio: 25000,
        img: "/assets/images/product.png",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Velas aromaticas",
        precio: 18000,
        img: "/assets/images/product.png",
        cantidad: 1,
    }
];

const mostrarProductos = (item) => {
    item.forEach(element => {
        let columnaDeProductos = document.createElement('div');
        columnaDeProductos.classList.add('col-md');
        columnaDeProductos.innerHTML += `
                                        <div class="card" style="width: 15rem;">
                                            <img src=${element.img} class="card-img-top">
                                            <div class="card-body">
                                                <h5 class="card-title">${element.nombre}</h5>
                                                <p class="card-text">$ ${element.precio}</p>
                                                <button type="button" class="btn btn-success" id="btn-comprar${element.id}">Comprar ahora</button>
                                            </div>
                                        </div>
                                    `

        contenedorProductos.appendChild(columnaDeProductos);

        let botonDeComprar = document.getElementById(`btn-comprar${element.id}`);

        botonDeComprar.addEventListener("click", () => {
            comprarProducto(element.id);
        });

    });
};

const comprarProducto = (id) => {
    let producto = productos.find(productos => productos.id == id);
    carritoDeCompras.push(producto);

    let crearfilasDeProductosComprados = document.createElement('tr');
    crearfilasDeProductosComprados.innerHTML += `                                                
                                                <tr>
                                                    <td id="nombre-producto">${producto.nombre}</td>
                                                    <td id="total-producto">${producto.precio}</td>
                                                </tr>
                                            `

    filasDeProductosComprados.appendChild(crearfilasDeProductosComprados);

}

mostrarProductos(productos);