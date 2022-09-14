console.log("Ejemplo de try")
import fetch from "node-fetch"
// EJEMPLO DE TRY y CATCH
function division(a,b){
	try{
	var resultado = a/b
	suma(a,b)//GENERA ERROR PORQUE FUNCION SUMA NO ESTA DEFINIDA
	return resultado
	} catch{
		
		return "No se pudo hacer la division, pero atrape el error"
	}
}
let arreglo = [1,3,4,2,0,3,4]
/*for (let i=0;i<arreglo.length;i++){
	
	console.log(division(6,arreglo[i]))
}
*/
// PROMESAS
//Math.ceil redondea al entero superior ejemplo (4.2 me lo redondea a 5)
//Math.floor redondea al entero inferior ejemplo 4.2 me lo readondea a 4
//Math.random me genera un numero aleatorio entre 0 y 1 por ejemplo .467
// si queremos generar un numero aleatorio entre 0 y N multiplicamos Math.random * N
//EJEMPLO generar un numero entre 20
//operador terniariio    CONDICION ? TRUE (SE EJECUTA CUANDO SE CUMPLE CONDICION) : FALSE (SE EJECUTA CUANDO NO SE CUMPLE LA CONDICION)
const promesaEjemplo= ()=>{
	return new Promise((resolve,reject)=>{
		const numeroAleatorio = Math.ceil(Math.random()*10)
		setTimeout(()=>{
			numeroAleatorio>=5?resolve(numeroAleatorio):reject(new Error(`El ${numeroAleatorio} es menor que 5`))
		},2000)
	
	})
}

//FORMA 1 DE EJECUTAR PROMESA (CON .THEN Y .CATCH)
//promesaEjemplo().then(numero=>{
//	console.log(numero)

//}).catch(error=>console.log(error+ "este es el error de mi primera promesa"))

//FORMA 2 DE EJECUTAR UNA PROMESA (DENTRO DE UN TRY Y CATCH)
const funcionAsync = async ()=>{
	try{
		const respuesta = await promesaEjemplo()
		console.log(respuesta)
	} catch(error){
		console.log(error)
		
	
	
	}


}

//funcionAsync()
//Direccion para buscar libros por autor


const urlAuthor = "http://openlibrary.org/search.json?author=asimov"

async function queryAuthor(urlA){
      var urlLibro = "https://openlibrary.org/api/books?bibkeys=ISBN:"
      const responseA = await fetch(urlA)
      const responseAJson = await responseA.json()
      const arreglo = responseAJson.docs
      const codigos = arreglo[0].isbn
      var arregloPromesas = []
      var arregloLibros = []
      codigos.forEach(async (elementos)=>{
            let promesa  = fetch(urlLibro+elementos).then((r)=>r)
            arregloPromesas.push(promesa)             
            
      })
      
      return new Promise((resolve)=>{
        Promise.all(arregloPromesas).then((proms)=>{
            proms.forEach((p)=>arregloLibros.push(p))
        }).then(()=>resolve(arregloLibros))
      })
      //arreglo.forEach(e=>{
      //        console.log(e.title)

      // })
}
var respuestaQueryLibros =await queryAuthor(urlAuthor)
console.log(respuestaQueryLibros)



