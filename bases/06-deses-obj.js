const persona = {
   nombre: 'tony',
   edad: 45,
   clave: 'Ironman',
   rango: 'Soldado',
};

// const { nombre, clave } = persona;

// console.log( nombre, clave );

const getPersona = ({edad ,nombre, clave, rango = 'Capitán' }) => ({
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat:17.4546,
            lng: -2345,
        }
});

const { nombreClave, anios, latlng: {lat, lng } } = getPersona(persona);
// const { lat, lng } = latlng;


console.log(nombreClave, anios);
console.log(lat, lng);