### Problemas y/o posibilidades de mejora

1. Problemas o posibilidades de mejora

- El componente `ContactsScreen` renderiza muchas cosas la misma vez, la vista, mapea los datos de contactos, búsqueda por id y hace un truncate. No va acorde a uno de los principios SOLID (S = single responsability)
- Los elementos como `h3` y `h4` que se usan para el nombre y la empresa no reflejan correctamente la jerarquía del contenido. Tendrían que mejorarse para mantener la accesibilidad.
- Uso de funciones como `truncate` y `findById` dentro de la renderización. Esto podría hacerse fuera del renderizado para mejorar el rendimiento y evitar cálculos innecesarios en cada render.
- El código tiene múltiples `map` para iterar sobre las direcciones, lo que hace el código menos legible. Es recomendable moverlo a componentes separados.
- No se utilizan claves únicas (`key`) en las iteraciones de listas (`map`), lo cual es muy importante para que React maneje correctamente las actualizaciones de la UI.
- El componente mezcla lógica y definiciones de UI, y podría dividirse en componentes reutilizables como `ContactCard`, `AddressList`, o `ContactDetails`.
- En lugar de chequear si hay más de una dirección en la lista, el título "Address" o "Addresses" podría manejarse de manera más limpia.

- El mapeo de datos, la búsqueda y el truncate se podrían moverse a `useMemo` para evitar recomputaciones en cada renderización, si es que los datos no cambian frecuentemente.

3. Justificación de mejoras

- Dividí la lógica en componentes más pequeños como `ContactCard` y `AddressList`, lo cual mejora la legibilidad y facilita la escalabilidad al poder reutilizar estos componentes en otras partes del proyecto.
- Se cambiaron los elementos `h3` y `h4` para utilizar un `h2` para el nombre y `h3` para la empresa, lo que mejora la jerarquía semántica de los elementos y facilita la accesibilidad.
- Utilicé `useMemo` para memoizar la transformación de contactos, de modo que solo se vuelva a calcular cuando los datos cambien, lo que mejora el rendimiento.
- Agregado de las claves únicas (`key`) en los mapeos de listas, lo cual es esencial para que React pueda identificar de manera óptima qué elementos deben actualizarse.
- Ahora los componentes son más reutilizables y escalables, lo que facilita su mantenimiento y testeo en un proyecto grande.
