let listaDeContactos = [
  { nombre: "Juancito Villa", telefono: "0000" },
  { nombre: "Marta Casona", telefono: "1111" },
];

function agregarContacto() {
  let nombre = prompt("Ingresa el nombre del nuevo contacto:");
  let telefono = prompt("Ingresa el número de teléfono del nuevo contacto:");
  let nuevoContacto = { nombre, telefono };
  listaDeContactos.push(nuevoContacto);
  console.log(`Contacto "${nombre}" agregado.`);
}

function borrarContacto() {
  let nombre = prompt("Ingresa el nombre del contacto que deseas borrar:");
  let indice = -1;
  for (let i = 0; i < listaDeContactos.length; i++) {
    if (listaDeContactos[i].nombre === nombre) {
      indice = i;
      break;
    }
  }
  if (indice !== -1) {
    let nombreBorrado = listaDeContactos[indice].nombre;
    listaDeContactos.splice(indice, 1);
    console.log(`Contacto "${nombreBorrado}" borrado.`);
  } else {
    console.log(`No se encontró un contacto con el nombre "${nombre}".`);
  }
}

function imprimirContactos() {
  console.log("Lista de Contactos:");
  listaDeContactos.forEach((contacto) => {
    console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`);
  });
}

while (true) {
  let opcion = prompt(
    "¿Quieres crear un nuevo contacto (c) o borrar un contacto existente (b)? Ingresa 'c' o 'b'. Para salir, presiona Cancelar."
  );

  if (opcion === null) {
    break;
  } else if (opcion === "c") {
    agregarContacto();
  } else if (opcion === "b") {
    borrarContacto();
  } else {
    alert("Opción no válida. Ingresa 'c' para crear o 'b' para borrar.");
  }
}

imprimirContactos();
