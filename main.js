import './style.css'

// Ejercicio 1
const listaFrutas = ['sandia','uva','fresa','mora','naranja','coco'];
console.log(listaFrutas.pop(listaFrutas.length-1))
listaFrutas.push('mango')
console.log(listaFrutas)

// Ejercicio 2
const listaTareas = ['Banco', 'Dentista', 'Cena'];
const tareaRealizada = listaTareas.shift()
console.log('Tarea completada ir al ' + tareaRealizada)

listaTareas.unshift('Gym')
console.log(listaTareas)

// Ejercicio 3
const listaFila = ['Juan', 'Pedro', 'Raúl', 'Omar', 'Cristóbal', 'Sebastián', 'Daniela']
listaFila.push('Vanesa', 'Carlos')
const personaAtendida = listaFila.shift()
console.log('Sr/a ' + personaAtendida + ' ha sido atendido/a')

// Ejercicio 4
let indice;
const listaNumeros = [22, 41, 63, 74, 27]
console.log(listaNumeros)
for (indice = 0; indice < 3; indice++) {
    let temporal = listaNumeros.pop()
    listaNumeros.unshift(temporal)
}

console.log(listaNumeros)

// Ejercicio 5
const carritoCompras = []
console.log(carritoCompras)

let itemProducto = prompt('Agrega un producto al carrito de la compra')
console.log(itemProducto)
carritoCompras.push(itemProducto)
itemProducto = prompt('Agrega otro producto al carrito de la compra')
carritoCompras.push(itemProducto)
itemProducto = prompt('Agrega otro producto al carrito de la compra')
carritoCompras.push(itemProducto)

console.log(carritoCompras)

itemProducto = prompt('Deseas eliminar el último producto')
if (itemProducto == 'si') {
  carritoCompras.pop()
}
console.log(carritoCompras)

// Ejercicio 6
const numerosDobles = listaNumeros.map(function(x) {
  return x * 2; 
})
console.log(numerosDobles)

// Ejercicio 7
const frutasMayusculas = []

const convertirMayusculas = listaFrutas.map(function(m) {
  for (indice = 0; indice < (listaFrutas.length); indice++) {
    frutasMayusculas[indice] = listaFrutas[indice].toUpperCase();
  }
  return;
})
console.log(frutasMayusculas)
console.log(listaFrutas)

// Ejercicio 8
const listaPrecios = [1200, 1500, 1700, 2200, 800, 1900, 2500]
const preciosConIva = []

const agregarIva = listaPrecios.map(function(p) {
  for (indice = 0; indice < (listaPrecios.length); indice++) {
    preciosConIva[indice] = listaPrecios[indice] * 0.21
    preciosConIva[indice] = listaPrecios[indice] + preciosConIva[indice]
  }
  return;
})
console.log(listaPrecios)
console.log(preciosConIva)

// Ejercicio 9
const listaNumeros2 = []
for (indice = 1; indice < 11; indice++) {
  listaNumeros2.push(indice)
}
const cuadrados = listaNumeros2.map(function(c) {
  return (c * c);
})
console.log(listaNumeros2)
console.log(cuadrados)

// Ejercicio 10
const numerosPares = []

const filtrarPares = listaNumeros2.filter(function(nPares) {
  for (indice = 0; indice < (listaNumeros2.length); indice++) {
    if ((listaNumeros2[indice] % 2) === 0) {
      numerosPares[indice] = listaNumeros2[indice]
    } else {
      listaNumeros2.splice(indice, 1)
    }
  }
  return
})
console.log(numerosPares)

// Ejercicio 11
const palabrasLargas = []

const conteoLetras = listaFrutas.map(cadena => cadena.length);
const filtrarPalabrasLargas = conteoLetras.filter(function(largas) {
  for (indice = 0; indice < (conteoLetras.length); indice++) {
    if (conteoLetras[indice] > 4) {
      palabrasLargas[indice] = listaFrutas[indice]
    }
  }
  return
})
console.log(palabrasLargas)
console.log(listaFrutas)

// Ejercicio 12
const productos = [
  { "Nombre": 'Adaptador', "Precio": 100},
  { "Nombre": 'Tv', "Precio": 700},
  { "Nombre": 'Iphone', "Precio": 1700},
  { "Nombre": 'Cable', "Precio": 200},
  { "Nombre": 'Laptop', "Precio": 2200},
  { "Nombre": 'Cargador', "Precio": 300 }
]
const productosEnOferta = productos.filter(producto => producto.Precio < 500) 

console.log("Los productos menores a 500$ son:", productosEnOferta)

// Ejercicio 13
const listaEstudiantes = [
  { "Nombre": 'Carlos', "Edad": 15, "Nota": 1},
  { "Nombre": 'Angel', "Edad": 16, "Nota": 7},
  { "Nombre": 'Yami', "Edad": 14, "Nota": 4},
  { "Nombre": 'Carmen', "Edad": 15, "Nota": 6},
  { "Nombre": 'Luis', "Edad": 17, "Nota": 2},
  { "Nombre": 'Teresa', "Edad": 15, "Nota": 3 }
]
const estudiantesAprobados = listaEstudiantes.filter(estudiante => estudiante.Nota > 4) 
console.log("Los estudiantes aprobados son:", estudiantesAprobados)

// Ejercicio 14
const listaTareasB = [
  { "Descripcion": 'Sumas', "Completada": 'si'},
  { "Descripcion": 'Funciones', "Completada": 'si'},
  { "Descripcion": 'Deportes', "Completada": 'si'},
  { "Descripcion": 'Maqueta', "Completada": 'no'},
  { "Descripcion": 'Volcán', "Completada": 'no'},
  { "Descripcion": 'Restas', "Completada": 'si' }
]
const tareasCompletadas = listaTareasB.filter(tarea => tarea.Completada == 'si') 
console.log("Las tareas completadas son:", tareasCompletadas)

// Ejercicio 15
const nombresEstudiantes = listaEstudiantes.forEach(function(estudiante) {
  console.log(estudiante.Nombre)
})

// Ejercicio 16
let sumaEdades = 0
const edadesEstudiantes = listaEstudiantes.forEach(function(estudiante) {
  sumaEdades = sumaEdades + estudiante.Edad;
  return estudiante;
})
console.log("La suma de las edades es", sumaEdades)

// Ejercicio 17
productos.forEach(producto => {
  let descuento = producto.Precio * 0.1;
  descuento = producto.Precio - descuento
  console.log(`${producto.Nombre}: ${descuento.toFixed(2)}`);
});

// Ejercicio 18
listaEstudiantes.forEach(estudiante => {
  console.log(`Invitación enviada a ${estudiante.Nombre}`);
});
