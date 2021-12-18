// Antes de empezar: A medida que vas leyendo puedes descomentar los console.log('Para ver los ejemplos')
// Recuerda ejecutar: yarn tsc || npm run tsc para transpilar el ts a js
// TypeScript
// Es un lenguaje tipado que nos ayudara a mantener un codigo mas seguro 
// console.log('hola mundo TS :0')
var $body = document.querySelector('body');
// console.log($body)
var hello = 'Hello, How are you?';
// console.log(hello)
var number = 23234;
// Marca error ya que se deberia de esperar un cambio de tipo number
// number = 'fkdjfd'
number = 434;
// Aveces al tener abierto el index.ts y index.js, el index.ts marcara error en las variables pero se soluciona saliendo de la hoja
// console.log(number)
// 
// Leccion 2/ Tipos de datos: Number, String, Boolean and Any
// 
var num = 23232;
var str = 'Hola';
var bolean = true;
var any;
// Los num y str no se pueden modificar a diferentes de datos del mismo
// console.log(num, str, any)
// Any si puede tener cualquier valor
any = 'Hola' || 2323 || null;
// Union
// Se pueden hacer uniones a las variables para que acepten mas tipos de datos
var union = 'Hola';
// 
// Lección #3 - Arrays
// 
// Recuerda que para usar al 100% typeScript es mejor evitar usar objetos de tipo any
var arr = [1, 2, 3, 4, 5];
var arr2 = ['Ketnier', 'Hellen', 'Jackson'];
// No se puede agregar datos diferentes al ya establecido, en este caso un array de número no puede contener datos tipo string
// arr.push('df')
// De esta manera con la union hacemos que el arreglo acepte tipos de datos numeros y string
var arr3 = [12, 3, 4, '4542', 'Hello'];
// Un ejemplo claro de uso en TypeScript es que podemos evitar bugs antes de visualizarlos
// Intenta recorrer arr ó arr2 para ver las diferencias
// arr: Te dira que toUpperCase() no funciona con números
// arr2: Funcionara correctamente ya que es un array de strings
arr2.forEach(function (name) {
    // console.log(name.toUpperCase())
});
// 
// Lección #4 - Objetos
// 
// Muy pendiente 
var obj = {
    name: 'Jackson',
    age: 343
};
// No se pueden escribir propiedades si no existen
// obj.ok = ''
// Así se  declaran el tipo de dato de los datos de un objeto
var obj2 = {
    name: 'Ok',
    age: 3
};
obj2.name = 'Jackson';
// No se puede reescribir un objeto con diferentes propiedades a las ya establecidas
var obj3 = {
    name: 'Jack',
    age: 18
};
// obj3 = {
//   name2: 'jorge',
//   age2: 233
// }
obj3 = {
    name: 'jorge',
    age: 233
};
// 
// Lección #5- Funciones
// 
var testFunction = function () {
    // console.log('Test de funcion')
};
testFunction();
var testFunctionCopy = function () {
    // console.log('Test de funcion 2')
};
testFunctionCopy();
// void es el resultado sin retornar de una funcion.
// Cuando se le agrega un return este feine el tipo de dato resultante
var testFunctionThree = function () {
    // console.log('Test de funcion 2')
    return 'Hello';
};
console.log(testFunctionThree());
// Pasar parametros
// 
// Inicialmente los parametros inician con tipo any
var plusOrRest = function (a, b, rest) {
    if (rest) {
        return a - b;
    }
    return a + b;
};
// Nos pide obligatoriamente los argumentos
// Esta manera no estan útil ya que esta propensa a errores si los argumentos son diferentes a los esperados
plusOrRest(1, 3, true);
// Version mejorada
// 
// Definir el tipo de parametros
// Es recomendable declarar el tipo en minusculas
var plusOrRestTSC = function (a, b, rest) {
    if (rest) {
        return a - b;
    }
    return a + b;
};
var salu2 = function (user) {
    // console.log(`Welcome ${user} to my class`)
};
salu2('Jack');
var userInfo = function (dataUser) {
    // console.log(`Hola mi nombre es ${dataUser.name}, tengo ${dataUser.age} años y quiero decir que: ${JSON.stringify(dataUser.note)}`)
};
var dataUser = {
    name: 'Jack',
    age: 18,
    note: ['Esto solo es una', 'Prueba', 100]
};
userInfo(dataUser);
// 
// Lección #7 - Interface vs Type
// 
// En esta lección aprenderas una nueva forma de agregar alias con interace que funciona solo para objetos y tambien sabras como agregar o extender nuevos tipos en uno ya existente
var cat = {
    name: 'Michi',
    age: 1
};
var person = {
    name: 'Jack',
    age: 18
};
var test = function (data) {
    console.log("El es ".concat(data.name, " y tiene ").concat(data.age, " a\u00F1o"));
};
test(cat);
var testHuman = function (person) {
    console.log("Datos de humano: ".concat(person.name, " - ").concat(person.age, " - ").concat(person === null || person === void 0 ? void 0 : person.email));
};
testHuman(person);
var testAdress = function (direccion) {
    console.log("Eeres de ".concat(direccion.direc, " y tu correo es ").concat(direccion.email, " "));
};
testAdress({ direc: 'Arauquita', email: 'ddfd' });
