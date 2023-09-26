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

function actualizarContacto() {
  let nombre = prompt("Ingresa el nombre del contacto que deseas actualizar:");
  let indice = -1;
  for (let i = 0; i < listaDeContactos.length; i++) {
    if (listaDeContactos[i].nombres === nombre) {
      indice = i;
      break;
    }
  }
  if (indice !== -1) {
    let nuevoNombre = prompt("Ingresa el nuevo nombre:");
    let nuevoApellido = prompt("Ingresa el nuevo apellido:");
    let nuevoTelefono = prompt("Ingresa el nuevo número de teléfono:");
    let nuevaCiudad = prompt("Ingresa la nueva ciudad:");
    let nuevaDireccion = prompt("Ingresa la nueva dirección:");

    listaDeContactos[indice].nombres = nuevoNombre;
    listaDeContactos[indice].apellidos = nuevoApellido;
    listaDeContactos[indice].telefono = nuevoTelefono;
    listaDeContactos[indice].ubicaciones[0].ciudad = nuevaCiudad;
    listaDeContactos[indice].ubicaciones[0].dirección = nuevaDireccion;

    console.log(`Contacto "${nombre}" actualizado.`);
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
    "¿Quieres mostrar la lista de contactos (m), crear un nuevo contacto (c), borrar un contacto existente (b) o actualizar un contacto (a)? Ingresa 'c', 'b' o 'a'. Para salir, presiona Cancelar."
  );

  if (opcion === null) {
    break;
  } else if (opcion === "m") {
    imprimirContactos();
  } else if (opcion === "c") {
    agregarContacto();
  } else if (opcion === "b") {
    borrarContacto();
  } else if (opcion === "a") {
    actualizarContacto();
  } else {
    alert(
      "Opción no válida. Ingresa 'c' para crear, 'b' para borrar o 'a' para actualizar."
    );
  }
}

imprimirContactos();
