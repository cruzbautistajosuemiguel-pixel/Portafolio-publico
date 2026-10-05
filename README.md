# Portafolio personal

Portafolio de Josue Miguel Cruz Bautista, estudiante de Ingenieria de Software en la Universidad Veracruzana, campus Ixtaczoquitlan.

Esta hecho solo con HTML, CSS y JavaScript, sin frameworks. Usa el tema de colores Arctic Frost (azul acero, azul hielo, plata y blanco) y la letra DejaVu Sans.

## Requerimientos funcionales

**RF01 Informacion personal.** El sistema debera permitir al visitante consultar la informacion personal y profesional del estudiante, incluyendo nombre, fotografia, descripcion y perfil profesional, entre otros.
En Inicio esta el nombre y una credencial con la foto y los datos personales. En Sobre mi estan la descripcion, el perfil profesional y los intereses.

**RF02 Navegacion.** El sistema debera permitir al visitante navegar entre las diferentes secciones del portafolio mediante un menu de navegacion.
El menu esta arriba en todas las secciones. En celular se abre con el boton Menu.

**RF03 Habilidades.** El sistema debera permitir visualizar las habilidades y conocimientos tecnicos del estudiante.
Se muestran en una lista: desarrollo web, bases de datos, herramientas y conocimientos de la carrera.

**RF04 Proyectos.** El sistema debera permitir al visitante consultar los proyectos realizados por el estudiante, mostrando al menos nombre, descripcion, tecnologias utilizadas e imagen.
Cada proyecto muestra imagen, nombre, descripcion y tecnologias.

**RF05 Detalles del proyecto.** El sistema debera permitir al visitante seleccionar un proyecto para consultar informacion adicional y, cuando corresponda, acceder al repositorio.
El enlace Ver detalles abre una ventana con mas informacion y, si el proyecto tiene repositorio, el boton para verlo en GitHub.

**RF06 Curriculum.** El sistema debera permitir al visitante descargar el curriculum en PDF.
Hay un boton de descarga en Inicio y otro en la seccion Curriculum.

**RF07 Redes profesionales.** El sistema debera permitir al visitante acceder a los perfiles profesionales del estudiante mediante enlaces.
Los enlaces estan en la seccion Contacto.

**RF08 Contacto.** El sistema debera proporcionar un formulario de contacto que permita al visitante ingresar nombre, correo electronico, telefono y mensaje, y debera validar que los campos obligatorios esten completos.
Nombre, correo y mensaje son obligatorios. El telefono es opcional, pero si se escribe debe tener 10 digitos.

## Archivos

```
portafolio/
  index.html        la pagina: textos, secciones y ventanas de los proyectos
  css/styles.css    el diseño: colores, letra y acomodo
  css/fuentes.css   la letra DejaVu Sans (incluida para que se vea sin internet)
  js/main.js        menu en celular, ventanas de detalle y validacion del formulario
  img/              foto e imagenes de los proyectos
  docs/cv.pdf       curriculum en PDF
  fonts/            licencia de la letra DejaVu Sans
  README.md         este archivo
```

## Como verlo

Abre `index.html` con doble clic desde esta carpeta. Si la carpeta viene en un zip, primero extraela (clic derecho, Extraer todo). Si abres el `index.html` desde adentro del zip, la pagina sale sin diseño y sin fotos.

## Como cambiar la informacion

- Los textos estan en `index.html`.
- Los colores estan al inicio de `css/styles.css`.
- Para poner tu usuario de GitHub, cambia `TU-USUARIO` en `index.html` (aparece 2 veces).
- Para cambiar el curriculum, reemplaza `docs/cv.pdf` por otro archivo con el mismo nombre.

## Publicacion

El sitio se publica con GitHub Pages desde la rama `main`. Se sube todo lo que esta dentro de esta carpeta.
