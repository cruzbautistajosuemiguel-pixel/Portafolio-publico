// Portafolio personal - JavaScript

// ---------- RF02: menu en celular ----------
const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", function () {
  menu.classList.toggle("abierto");
  botonMenu.setAttribute("aria-expanded", menu.classList.contains("abierto"));
});

// Al elegir una seccion se cierra el menu
menu.querySelectorAll("a").forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    menu.classList.remove("abierto");
    botonMenu.setAttribute("aria-expanded", "false");
  });
});

// ---------- RF05: ventanas con los detalles de cada proyecto ----------
document.querySelectorAll("[data-modal]").forEach(function (boton) {
  boton.addEventListener("click", function () {
    document.getElementById(boton.dataset.modal).showModal();
  });
});

document.querySelectorAll(".cerrar").forEach(function (boton) {
  boton.addEventListener("click", function () {
    boton.closest("dialog").close();
  });
});

// Cerrar la ventana al hacer clic afuera
document.querySelectorAll("dialog").forEach(function (ventana) {
  ventana.addEventListener("click", function (evento) {
    if (evento.target === ventana) {
      ventana.close();
    }
  });
});

// ---------- RF08: validacion del formulario de contacto ----------
const formulario = document.getElementById("formulario");
const estado = document.getElementById("estado-formulario");
const miCorreo = "cruzbautistajosuemiguel@gmail.com";

function mostrarError(campo, texto) {
  document.getElementById("error-" + campo).textContent = texto;
  document.getElementById(campo).classList.add("campo-error");
}

function limpiarErrores() {
  ["nombre", "correo", "telefono", "mensaje"].forEach(function (campo) {
    document.getElementById("error-" + campo).textContent = "";
    document.getElementById(campo).classList.remove("campo-error");
  });
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  limpiarErrores();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  let valido = true;

  if (nombre === "") {
    mostrarError("nombre", "Escribe tu nombre.");
    valido = false;
  }

  if (correo === "") {
    mostrarError("correo", "Escribe tu correo electronico.");
    valido = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    mostrarError("correo", "El correo no es valido.");
    valido = false;
  }

  // El telefono es opcional, pero si lo escriben debe tener 10 digitos
  if (telefono !== "" && !/^\d{10}$/.test(telefono.replace(/\s/g, ""))) {
    mostrarError("telefono", "El telefono debe tener 10 digitos.");
    valido = false;
  }

  if (mensaje === "") {
    mostrarError("mensaje", "Escribe tu mensaje.");
    valido = false;
  }

  if (!valido) {
    estado.textContent = "Completa los campos obligatorios.";
    estado.style.color = "#b3261e";
    return;
  }

  estado.textContent = "Gracias, " + nombre + ". Se abrira tu correo para enviar el mensaje.";
  estado.style.color = "#1d6b45";

  // Abre la aplicacion de correo con el mensaje listo
  const cuerpo = "Nombre: " + nombre + "\nCorreo: " + correo + "\nTelefono: " + telefono + "\n\n" + mensaje;
  window.location.href = "mailto:" + miCorreo +
    "?subject=" + encodeURIComponent("Contacto desde el portafolio") +
    "&body=" + encodeURIComponent(cuerpo);

  formulario.reset();
});
