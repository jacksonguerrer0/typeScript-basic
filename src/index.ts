// Antes de empezar: A medida que vas leyendo puedes descomentar los console.log('Para ver los ejemplos')
// Recuerda ejecutar: yarn tsc || npm run tsc para transpilar el ts a js

// TypeScript
// Es un lenguaje tipado que nos ayudara a mantener un codigo mas seguro 

// console.log('hola mundo TS :0')

const $body = document.querySelector('body')

// console.log($body)

const hello = 'Hello, How are you?'

// console.log(hello)

let number = 23234;


// Marca error ya que se deberia de esperar un cambio de tipo number
// number = 'fkdjfd'
number = 434
// Aveces al tener abierto el index.ts y index.js, el index.ts marcara error en las variables pero se soluciona saliendo de la hoja
// console.log(number)



// 
// Leccion 2/ Tipos de datos: Number, String, Boolean and Any
// 
let num = 23232; 
let str = 'Hola'
let bolean = true
let any
// Los num y str no se pueden modificar a diferentes de datos del mismo
// console.log(num, str, any)
// Any si puede tener cualquier valor

any = 'Hola' || 2323 || null

// Union
// Se pueden hacer uniones a las variables para que acepten mas tipos de datos

let union: Number|String|Boolean = 'Hola'


// 
// Lección #3 - Arrays
// 

// Recuerda que para usar al 100% typeScript es mejor evitar usar objetos de tipo any


let arr = [1,2,3,4,5]
let arr2 = [ 'Ketnier', 'Hellen', 'Jackson']

// No se puede agregar datos diferentes al ya establecido, en este caso un array de número no puede contener datos tipo string
// arr.push('df')

// De esta manera con la union hacemos que el arreglo acepte tipos de datos numeros y string
let arr3 : (Number | String)[]  = [12,3,4, '4542', 'Hello']

// Un ejemplo claro de uso en TypeScript es que podemos evitar bugs antes de visualizarlos

// Intenta recorrer arr ó arr2 para ver las diferencias
// arr: Te dira que toUpperCase() no funciona con números
// arr2: Funcionara correctamente ya que es un array de strings
arr2.forEach(name => {
  // console.log(name.toUpperCase())
});

// 
// Lección #4 - Objetos
// 

// Muy pendiente 
let obj = {
  name: 'Jackson',
  age: 343
}

// No se pueden escribir propiedades si no existen
// obj.ok = ''


// Así se  declaran el tipo de dato de los datos de un objeto
let obj2: {name:string, age:number} ={
  name: 'Ok',
  age: 3
}
obj2.name = 'Jackson'


// No se puede reescribir un objeto con diferentes propiedades a las ya establecidas
let obj3 = {
  name: 'Jack',
  age: 18
}
// obj3 = {
//   name2: 'jorge',
//   age2: 233
// }
obj3 = {
  name: 'jorge',
  age: 233
}



// 
// Lección #5- Funciones
// 

let testFunction:Function = () => {
  // console.log('Test de funcion')
}
testFunction()
let testFunctionCopy = () => {
  // console.log('Test de funcion 2')
}
testFunctionCopy()

// void es el resultado sin retornar de una funcion.
// Cuando se le agrega un return este feine el tipo de dato resultante
let testFunctionThree  = () => {
  // console.log('Test de funcion 2')
  return 'Hello'
}
console.log(testFunctionThree())

// Pasar parametros
// 
// Inicialmente los parametros inician con tipo any
const plusOrRest = (num, num2, rest) => {
  if(rest){
    return num - num2
  }
  return num + num2
}
// Nos pide obligatoriamente los argumentos
// Esta manera no estan útil ya que esta propensa a errores si los argumentos son diferentes a los esperados
plusOrRest(1,3,true)

// Version mejorada
// 
// Definir el tipo de parametros
// Es recomendable declarar el tipo en minusculas
const plusOrRestTSC = (a:number,b:number, rest?:boolean) => {
  if(rest){
    return a - b
  }
  return a + b
}
// Nos pide obligatoriamente los argumentos
// El ultimo parametro rest? define que es opcional, los datos opcionales siempre van al final
// console.log(plusOrRestTSC(2,4, true))



// 
// Lección #6 - Alias de tipo dato
// 

// Pueden definirse coloquialmente como el apodo de tipo de dato
// Es usado por ejemplo cuando tenemos muchas funciones y cada función tiene algo en comú y es que se repiten las mismas delaraciones de datos la mejor forma de hacerlos es usar el alias para así hacer un codigo mas limpio y reutilizable


// En este ejemplo si tuvieramos mas funciones tendriamos que repetir muchas veces la declaracion de tipo de dato
// const salu2 = (user:string) => {
//   console.log(`Welcome ${user} to my class`)
// }
// salu2('Jack')
// const userInfo = (dataUser:{name:string, age:number, note:(string | number)[]}) => {
//   console.log(`Hola mi nombre es ${dataUser.name}, tengo ${dataUser.age} años y quiero decir que: ${dataUser.note.forEach(el => el)}`)
// }

// const dataUser ={
//   name: 'Jack',
//   age: 18,
//   note: ['Esto solo es una', 'Prueba', 100]
// }
// userInfo(dataUser)

// Una mejor forma usando type
 
type User = string;
type UserData = {
  name:string, 
  age:number, 
  note:(string | number)[]
}


const salu2 = (user:User) => {
  // console.log(`Welcome ${user} to my class`)
}
salu2('Jack')
const userInfo = (dataUser: UserData) => {
  // console.log(`Hola mi nombre es ${dataUser.name}, tengo ${dataUser.age} años y quiero decir que: ${JSON.stringify(dataUser.note)}`)
}

const dataUser ={
  name: 'Jack',
  age: 18,
  note: ['Esto solo es una', 'Prueba', 100]
}
userInfo(dataUser)


// 
// Lección #7 - Interface vs Type
// 

// En esta lección aprenderas una nueva forma de agregar alias con interace que funciona solo para objetos y tambien sabras como agregar o extender nuevos tipos en uno ya existente
const cat = {
  name: 'Michi',
  age: 1,
}
const person = {
  name: 'Jack',
  age: 18,
  // email: 'ksdjsd@gmail.com'
}
type email = string
interface dataValid{
  name:string,
  age:number
}

const test = (data: dataValid) => {
  console.log(`El es ${data.name} y tiene ${data.age} año`)
}
test(cat)

// Como extenderr? Nos referimos mas a los datos de tipo objeto
// Se crea una nueva interfas heredadno la iterface dataValid
interface human extends dataValid{
  email?:email
}
const testHuman = (person:human) => {
  console.log(`Datos de humano: ${person.name} - ${person.age} - ${person?.email}`)
}
testHuman(person)

// Extender alias
type adressTwo ={
  email: email
}
type adress = {
  direc: string
} & adressTwo

const testAdress = (direccion : adress) => {
  console.log(`Eeres de ${direccion.direc} y tu correo es ${direccion.email} `)
}
testAdress({direc: 'Arauquita', email: 'ddfd'})



// 
// TSConfig y como mejorar la estructura del proyecto
// 

// Como lo mencione al inicio se necesita transpilar el codigo ts a js, para ello se
// Ejecutaba el comando yarn tsc index.ts. Ahora imaginate hacerlo muchas veces, esto prodria ser muy tedioso. La solución seria agregarle un observador de cambios para que se transpile:
// yarn tsc index.ts --watch


// Si comenzamos un proyecto grande se requiere de una buena estructura en el codigo

// Al momento de tener muchos archivos a transpilar, hay que crear el archivo tsconfig.json y editarlo
// Para crearlo ejecute npx tsc --init 

// Luego edita Y agrega estas opciones
// {{
// "rootDir": "./src", 
// "outDir": "./public",
//   },
// "include": ["src"],
// }F

// Luego de terminar las configuraciones no es necesario indicar el archivo al transpilar
// Solo ejecuta yarn tsc --watch






//
// Muy bien llegó el momento de la practica
// 

// Cosas a tener en cuenta:

// const form  = document.querySelector('#form-inputs')
// TypeScript indica que form puede ser nulo y para solucionarlo podemos agregar el operador de asercion no nulo
// const form  = document.querySelector('#form-inputs')!


// Al momento de trabajar con el DOM hay que especificar que tipo de elemento es con el typeCasting (as)
// const form  = document.querySelector('#form-inputs') as HTMLFormElement
