node-api-rest
=============

RESTful API for CRUD with Node.js, Express, MongoDB and mongoose.js

You need install node.js and MongoDB.

To run

* $ npm install
* start mongo server
* $ server.js


* Proyect: BackEnd 
* Author: Pablo E. Ojeda Vasco  
* Last update: 23 / 03 / 2014



<h3> Tecnologías 
<p>

* Node.js RESTful API with express. Uso de domain y cluster.
* MongoDB and mongoose
* Redis


<h2> El proyecto. Temática: Tienda de camisetas

<h3>Fase 1: 
<p>
* Crear una API RESTful que responda a los casos CRUD.
* La base de datos utilizadas será MongoDB.
      
<h4> Rutas:
<p>
* GET /tshirts - muestra una lista con todas las camisetas
* GET /tshirt/:id - muestra los detalles de una camiseta
* POST /tshirt - crea una camiseta
* -- body: model (obligatorio), colour, price, summary, images, size, style (sólo permite: Casual, Alternative, Vintage)
* PUT /tshirt/:id - modifica una camiseta
* -- body: model (obligatorio), colour, price, summary, images, size, style (sólo permite: Casual, Alternative, Vintage)
* DELETE /tshirt/:id - elimina una camiseta
    
<h4> Importante: Arrancar mongoDB en un terminal con el comando ./mongod

