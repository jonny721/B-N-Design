
//SPREAD OPERATOR

//ANTES

const numeros = [1,2,3]
const nuevoArrayDeNumeros = numeros.concat([4,5,6])

console.log(nuevoArrayDeNumeros) //[1,2,3,4,5,6]

const nuevoSugarNumeros = [...numeros, 4,5,6,7,8,9]


//Destructuring

//antes

const colores= ['rojo', 'verde', 'azul']
const primero = colores[0]
const segundo = colores[1]

const [primerColor, segundoColor]= colores


//OBJETOS

const persona = {
    nombre:'Pepe',
    edad:30,
    ciudad:'Mendoza'
}


console.log(persona.nombre, persona.edad)

const {nombre, edad, ciudad}= persona



//condicion
let mensaje;

if(edad >= 18){
    mensaje = 'Sos mayor'
}else{
    mensaje = 'Sos menor'
}

const mensajeSugar = edad >= 18 ? 'Sos mayor' : 'Sos menor'

//Functions

function sumar (a,b){
    return a + b
}

const sumarArrow = (a,b) => {
    //logica aplicar al resultado
    return a +b
}

const sumarArrowSugar = (a,b)=> a+b