//* EJECUTAR MIS BLOQUES DE CÓDIGO
//* MAIN ES NUESTRO ARCHIVO JS PRINCIPAL

const goodReadsCrud = require('./crudAuthors')

//*LISTA DE TODOS LOS AUTORES
// goodReadsCrud.listAuthors()

//*LISTA UN AUTOR POR SU ID
// goodReadsCrud.getAuthor(14814)  //14639 //14814 //14825

//*CREAR UN AUTOR 
// const jsonSend = {
//         name: "CRISTIANO",
//         last_name: "RONALDO",
//         nacionalidad: "MX",
//         biography: "FUTBOLISTA PROFESIONAL",
//         gender: "M",
//         age: 35,
//         is_alive: true
//     }
// goodReadsCrud.createAuthor(jsonSend)

//* PATCH A UN AUTOR
//  const updateData = {
//     name: "Aracely",
// 	last_name: "Reyes",
//     gender: 'F'
//  }
//  goodReadsCrud.patchAuthor(14825,updateData)

//*ELIMINAR UN AUTOR
goodReadsCrud.deleteAuthor(14814)