# Libres Para Prosperar — Modal Waitlist Build
Este build agrega un **modal** para la *lista de espera* en el landing.

## Páginas
- `index.html` → Landing. Botón **Descubre el Taller** → `talleres.html`. Botón **Lista de espera** abre **modal** con PipelinePro.
- `talleres.html` → Resumen + botón **Entrar al Taller** → `taller-acceso.html`.
- `taller-acceso.html` → Formulario PipelinePro (acceso). Configura redirect a `/taller-completo.html`.
- `taller-completo.html` → Taller interactivo con guardado local, PDF y email.
- `privacidad.html`.
- `styles.css`, `script.js`.

## Notas
- El estilo del botón dentro del **iframe** depende del CSS del formulario en PipelinePro. Copia el CSS recomendado en el campo **Custom CSS** del formulario.
