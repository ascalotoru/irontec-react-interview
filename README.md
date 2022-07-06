# Irontec React Interview

Antes de empezar
------------------------------------------------
Esta prueba incluye las fuentes de un proyecto recien creado con React CRA (`npx create-react-app my-app`) y un pequeño contendor de docker que simplemente instala las dependencias y ejecuta `yarn start`.

Puedes arrancar el contenedor ejecutando `docker-compose up` y acceder a la web en `http://10.100.100.10:3000`. Si por cualquier razón prefieres hacer la prueba sin pasar por docker o partir de otras fuentes, eres libre de hacerlo.

Agenda de actividades
------------------------------------------------

- En el arranque la app hará 10 llamas a https://www.boredapi.com/api/activity y las almacenará en memoria
- Deberás dibujarlas y darle estilos
- Añade un botón de reload que actualice los resultados
- Crea un panel de búsqueda que se muestra / oculta y permita filtrar los resultados en pantalla en la base a los siguientes criterios: activity y type

Se valorará:
------------------------
- Aspecto visual
- El uso de typescript
- La inclusión tests unitarios o end to end
- Un pequeño readme detallando las decisiones tomadas y las motivaciones que había detrás
