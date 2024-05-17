import { matriz_productos } from "./matrizProductos.js"
let matriz_productos = `
    <div>
        <div class="img"></div>
        <span class="titulo"></span>
        <p class="descripcion"></p>
        <span class="precio"></span>
        <span class="id"></span>
    </div>
`

function cargar_productos(listado_de_productos){

    let dom = document.querySelector("#root")

    dom.innerHTML = listado_de_productos

}

export {cargar_productos}