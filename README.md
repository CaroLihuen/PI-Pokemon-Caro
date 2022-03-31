<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Pokemon

<p align="left">
  <img height="150" src="./pokemon.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver los distintos Pokemon utilizando la api externa [pokeapi](https://pokeapi.co/) y a partir de ella poder, entre otras cosas:

  - Buscar pokemons
  - Filtrarlos / Ordenarlos
  - Crear nuevos pokemons


#### Tecnologías utilizadas:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres



#### Frontend

Contiene una aplicacion usando React y Redux. Contiene las siguientes rutas: 

__Pagina inicial__: 

- [ ] Contiene una imagen relacionada con el proyecto y un boton de acceso.

__Ruta principal__: 
- [ ] Input de búsqueda para encontrar pokemons por nombre (La búsqueda es exacta, es decir solo encontrará al pokemon si se coloca el nombre completo)
- [ ] Área donde se verá el listado de pokemons. En el cual se renderizan las card de cada pokemon mostrando su nombre, los puntos de ataque y el typo de pokemon.
- [ ] Botones/Opciones filtra por tipo de pokemon, por pokemon existente o creado por nosotros.
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por fuerza.
- [ ] Paginado para ir buscando y mostrando 12 pokemons por pagina.

__Ruta de detalle de Pokemon__: Contiene
- [ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
- [ ] Estadísticas (vida, fuerza, defensa, velocidad)
- [ ] Altura y peso

__Ruta de creación__: Contiene
- [ ] Un formulario __controlado con JavaScript__ con los campos mencionados en el detalle del Pokemon
- [ ] Posibilidad de seleccionar/agregar más de un tipo de Pokemon
- [ ] Botón/Opción para crear un nuevo Pokemon



#### Base de datos

Contiene una Base de datos relacional de muchos a muchos.



#### Backend

El servidor esta realizado usando Node y Express. Contiene 4 rutas: 

- [ ] __GET /pokemons__  y __GET /pokemons?name="..."__:
  - Obtiene un listado de los pokemons desde pokeapi.
  - Obtiene el pokemon que coincida exactamente con el nombre pasado como query parameter.
  - Si no existe ningún pokemon muestra un mensaje adecuado

- [ ] __GET /pokemons/{idPokemon}__:
  - Obtiene el detalle de un pokemon en particular.

- [ ] __POST /pokemons__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body.
  - Crea un pokemon en la base de datos.

- [ ] __GET /types__:
  - Obtiene todos los tipos de pokemons posibles.
  - En una primera instancia se trae desde pokeapi y despues se guardar en la base de datos y luego se utiliza desde allí.



#### Testing

Contiene testing en el backend y en el modelo de la base de datos.
