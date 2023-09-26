let listaDeContactos = [
  {
    id: 1,
    nombres: "Juancito",
    apellidos: "Villa",
    telefono: "0000",
    ubicaciones: [
      {
        ciudad: "Ciudad",
        dirección: "Calle",
      },
    ],
  },
  {
    id: 2,
    nombres: "Marta",
    apellidos: "Casona",
    telefono: "1111",
    ubicaciones: [
      {
        ciudad: "Ciudad1",
        dirección: "Avenida1",
      },
    ],
  },
];

function agregarContacto() {
  let id = listaDeContactos.length + 1; // Genera un nuevo ID.
  let nombres = prompt("Ingresa los nombres del nuevo contacto:");
  let apellidos = prompt("Ingresa los apellidos del nuevo contacto:");
  let telefono = prompt("Ingresa el número de teléfono del nuevo contacto:");
  let ciudad = prompt("Ingresa la ciudad del nuevo contacto:");
  let dirección = prompt("Ingresa la dirección del nuevo contacto:");

  let nuevoContacto = {
    id,
    nombres,
    apellidos,
    telefono,
    ubicaciones: [{ ciudad, dirección }],
  };

  listaDeContactos.push(nuevoContacto);
  console.log(`Contacto "${nombres} ${apellidos}" agregado.`);
}

function borrarContacto() {
  let nombre = prompt("Ingresa el nombre del contacto que deseas borrar:");
  let indice = -1;
  for (let i = 0; i < listaDeContactos.length; i++) {
    if (listaDeContactos[i].nombres === nombre) {
      // Corregido: Cambiado `listaDeContactos[i].nombre` a `listaDeContactos[i].nombres`.
      indice = i;
      break;
    }
  }
  if (indice !== -1) {
    let nombreBorrado = listaDeContactos[indice].nombres;
    listaDeContactos.splice(indice, 1);
    console.log(`Contacto "${nombreBorrado}" borrado.`);
  } else {
    console.log(`No se encontró un contacto con el nombre "${nombre}".`);
  }
}

function imprimirContactos() {
  console.log("Lista de Contactos:");
  listaDeContactos.forEach((contacto) => {
    console.log(
      `Apellido: ${contacto.apellidos}, Nombre: ${contacto.nombres}, Teléfono: ${contacto.telefono}`
    );
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
