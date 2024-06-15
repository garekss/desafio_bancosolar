### Rutas CRUD

- / GET: Devuelve la aplicación cliente disponible en el apoyo de la prueba.
- /usuario POST: Recibe los datos de un nuevo usuario y los almacena en PostgreSQL.
- /usuarios GET: Devuelve todos los usuarios registrados con sus balances.
- /usuario PUT: Recibe los datos modificados de un usuario registrado y los actualiza.
- /usuario DELETE: Recibe el id de un usuario registrado y lo elimina .
- /transferencia POST: Recibe los datos para realizar una nueva transferencia. Se debe ocupar una transacción SQL en la consulta a la base de datos.
- /transferencias GET: Devuelve todas las transferencias almacenadas en la base de datos en formato de arreglo.


### Persistencia de datos en SQL

    CREATE DATABASE bancosolar;
    CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    balance FLOAT CHECK (balance >= 0)
    );
	
    CREATE TABLE transferencias (
    id SERIAL PRIMARY KEY,
    emisor INT,
    receptor INT,
    monto FLOAT,
    fecha TIMESTAMP,
    FOREIGN KEY (emisor) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (receptor) REFERENCES usuarios(id) ON DELETE CASCADE
    );

    

### Instalación de dependencias:
`$ npm install axios cors dotenv express pg nodemon`

### Ejecución de servidor
`$ node servidor.js`

### Resultados:

![image](https://github.com/garekss/desafio_bancosolar/assets/159491346/7d6c62f5-0b8e-46ba-99bb-49d88614687e)

![image](https://github.com/garekss/desafio_bancosolar/assets/159491346/ae44bbba-36d6-4c53-91b8-7e762a6f3965)

![image](https://github.com/garekss/desafio_bancosolar/assets/159491346/1247382b-2011-4634-b30e-5b711d40cf57)







