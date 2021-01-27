const persona = {
   nombre: 'Tony',
   apellido: 'Stark',
   edad: 45,
   cp: 57300,
};

let { nombre, edad, cp } = persona;

console.log( nombre, edad, cp )

const persona2 = { ...persona };

persona2.nombre = 'Iron Main';

console.log(persona)
console.log(persona2)

