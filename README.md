node-api-rest
=============

RESTful API for CRUD with Node.js, Express, MongoDB and mongoose.js

/************************************************************************
* - Proyect: BackEnd                                                    *
* - Author: Pablo E. Ojeda Vasco                                        *
* - Last update: 23 / 03 / 2014                                         *
* **********************************************************************/
*

* --> Tecnologías <--
* =======================================================================
* - Node.js RESTful API with express. Uso de domain y cluster.
* - MongoDB and mongoose
* - Redis
* 

* --> El proyecto. Temática: Tienda de camisetas <--
* --> Fases:
* =======================================================================
* --> Fase 1: 
*       - Crear una API RESTful que responda a los casos CRUD.
*       - La base de datos utilizadas será MongoDB.
*       
* --> Rutas:
*       - GET /tshirts - muestra una lista con todas las camisetas
*       - GET /tshirt/:id - muestra los detalles de una camiseta
*       - POST /tshirt - crea una camiseta
*           - body: model (obligatorio), colour, price, summary, images,
*                   size, style (sólo permite: Casual, Alternative, Vintage)
*       - PUT /tshirt/:id - modifica una camiseta
*           - body: model (obligatorio), colour, price, summary, images,
*                   size, style (sólo permite: Casual, Alternative, Vintage)
*       -DELETE /tshirt/:id - elimina una camiseta
*       
* --> Importante: Arrancar mongoDB en un terminal con el comando ./mongod
* ========================================================================
