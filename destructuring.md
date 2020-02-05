# Cheatsheet de destructuring

## Arrays

```js
    const ejemplo = [ 'alice', 'bob', 'carol', 'dave', 'eve']

    // Podemos extraer todos o algunos elementos del array a variables
    const [n1, n2] = ejemplo
    console.log(n1) // alice
    console.log(n2) // bob

    // Podemos omitir elementos dejando huecos sin nombre
    const [ , , n3, , n5] = ejemplo
    console.log(n3) // 'carol'
    console.log(n5) // 'eve'

    // Podemos extraer todos los elementos restantes usando puntos suspensivos
    const [t1, t2, ...tail] = ejemplo
    console.log(tail) // [ 'carol', 'dave', 'eve' ]
```

## Objetos

```js
    const ejemplo = { nombre: 'Alice', edad: 37, pais: 'Spain', email: 'alice@example.com' }

    // Podemos extraer algunos o todos los campos del objeto a variables
    const { nombre, edad } = ejemplo
    console.log(nombre) // Alice
    console.log(edad) // 37

    // Si alguno no existe, queda undefined
    const { foo } = ejemplo
    console.log(foo) // undefined

    // Podemos extraer todos los campos restantes usando puntos suspensivos
    const { pais, email, ...otros } = ejemplo
    console.log(otros) // { nombre: 'Alice', edad: 37 }

    // Podemos indicar valores por defecto
    const { bar = 123 } = ejemplo
    console.log(bar) // 123 (porque no existe, sino tendría su valor)

    // Podemos renombrar las variables
    const { nombre: baz } = ejemplo // Equivale a: const baz = ejemplo.nombre
    console.log(baz) // Alice

    // Avanzado: podemos destructurar a varios niveles
    const ejemploComplejo = { id: 123, name: 'Esquina', address: { city: 'Vigo', cp: '36206' } }
    const { name, address: { city } } = ejemploComplejo
    // Equivale a:
    // const name = ejemploComplejo.name
    // const city = ejemploComplejo.address.city
    console.log(city) // Vigo
```

## Creación

Además de extraer campos, también podemos crear objetos/arrays del mismo modo:

```js
    // Combinando arrays
    const arr1 = [ 1, 2 ]
    const arr2 = [ 3, 4 ]
    const combinaArr = [ ...arr1, ...arr2, 5 ]
    console.log(combinaArr) // [ 1, 2, 3, 4, 5 ]

    // Combinando objetos
    const obj1 = { a: 1, b: 2 }
    const obj2 = { c: 3, d: 4 }
    const combinaObj = { ...obj1, ...obj2, e: 5 }
    console.log(combinaObj) // { a: 1, b: 2, c: 3, d: 4, e: 5 }

    // Si hay colisiones, gana el último
    const obj3 = { a: 'a', c: 'c', d: 'd' }
    const combinaCol = { ...obj1, ...obj3, d: 'gana' }
    console.log(combinaCol) // { a: 'a', b: 2, c: 'c', d: 'gana' }
```
