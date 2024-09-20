### Ventajas de la solución propuesta

- Normalización de datos al separar libros, autores y usuarios en diferentes estructuras, y evitamos la duplicación. Por ejemplo, "Uncle Bob" se repite 3 veces en los libros.
- Solución que escala bien a futuro. La estructura del estado permite fácil acceso y modificación sin afectar otras partes de la app.
- Se reduce costo de búsqueda y actualización. Si los datos del autor cambian solo se debe actulizar en la tabla de `authors` lo que mejora el rendimiento.
- Slices separados (`books`, `authors`, `users`) manteniendo el estado organizado y cada uno de ellos maneja una parte específica de la app.
