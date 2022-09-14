console.log("Asincronicidad con Rene")

// codigo secuencial (sincrono) 

console.log(1)
console.log(2)
console.log(3)


// callback function 

var alumnos = ["Sebastian", "Aracely","Carlos", "Mabel","Rene"]

/*for (let i=0; i< alumnos.length; i++){
    console.log(alumnos[i])
}
function funcionpara(elemento,indice,arreglo){
    console.log(elemento)
}
alumnos.forEach((elemento,indice,arreglo)=>{
    console.log(elemento)
})
alumnos.forEach(funcionpara)*/


const primeraFuncion =()=>{
    console.log("Esta es la primera funcion")
}

const segundaFuncion =()=>{
    primeraFuncion()
    console.log("Esta es la segunda funcion")
}

const terceraFuncion =()=>{
    segundaFuncion()
    console.log("Tercera funcion")
}



//terceraFuncion()


function uno(){return 50}
function dos(){return 40}

const sumaFunciones=(funcionuno,funciondos)=>{

    const suma = funcionuno()+funciondos()
    return suma
}


//console.log(sumaFunciones(dos,dos))

//Settimeout es para ejecutar una funcion despues de cierto tiempo


//console.log("Steven")
const ejemplo =()=>{
    console.log("uno")
      setTimeout(()=>{
         return console.log("Set time out asincrono")
    },1)
    console.log("dos")
}

//ejemplo()

//setTimeout(()=>{
//    return console.log("Aracely")
//
//},4000)
//console.log("Rodolfo")

// simulacion de cuello de botella
console.log("Rodrigo")
setTimeout(()=>{
    return console.log("Rene")
},500)
var startTime = Date.now()
for (let i=0; i<9999999999;i++);
var endTime = Date.now()
console.log("final")

console.log(endTime-startTime)
//var consulta = await fetch(url)
//console.log (consulta[0])







