# Ejemplo 2b - Acordeón

Un componente acordeón similar al hecho en clase, con alguna pequeña mejora.

## Repaso

- En App:
    - Hemos importado el acordeón, como hacemos con cada componente.
    - Hemos puesto un párrafo de texto, y a continuación el acordeón, envolviendo el resto del texto.
- En Acordeón:
    - Utilizamos un state booleano para ver si está desplegado o contraido (isExpanded)
    - Utilizamos el if ternario (`x ? y : z`) para cambiar la clase del componente, y el texto del botón.
    - Utilizamos el operador `&&` para mostrar condicionalmente el contenido. (También se podría haber usado el if...)
    - En lugar de poner el texto a mano dentro del componente, lo recibimos en el prop `children`.
    
Recordad que `children` es el prop especial que contiene los hijos del componente en donde es llamado. Por tanto, en este caso contiene el segundo párrafo que envuelve en App. Al hacerlo de este modo, nos queda un acordeón reutilizable, que podemos usar con cualquier contenido, en vez de estar fijo el texto.

Por último, en el estilo hemos utilizado la clase `acordeon` para limitar las reglas únicamente a nuestro acordeón, y darle al botón un estilo bonito, con `:hover` para efectos al pasar por encima con el ratón. También hemos utilizado la clase `abierto`, que se añade condicionalmente, para que se muestre de un color diferente cuando es el botón de cerrar.
