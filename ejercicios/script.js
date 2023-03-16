

const myFamily = [
    {name:'juliana',rol:'esposa'},
    {name:'gabriela', rol:'hija'},
    {name:'rogelio', rol:'papa'},
    {name:'gloria', rol:'mama'},
    {name: 'julian',rol:'hermano'},
    {name: 'daniel',rol:'hermano'},
    {name: 'simon',rol:'hermano'},
    {name: 'tomas',rol:'hermano'},
];
//************************************************************************** */
const titulo = document.querySelector('#titulo');
const buscar = document.querySelector("#buscar");
const family = document.querySelector('#contenido');

titulo.innerHTML += ' Juan Esteban Valencia';

const showFamilys = () => {
    myFamily.forEach(({name}) => {
        const li = document.createElement('li');
        li.innerHTML=  `${name} `;
        family.appendChild(li);
    });
};

buscar.addEventListener('click', showFamilys);

//********************************************************************************** */

const familiar = document.querySelector('#familiar');
const identificar = document.querySelector('#identificar');
const mostrar = document.querySelector('#mostrar');

const showFamily = () => {
    myFamily.forEach(({name,rol})=>{
        if(familiar.value === name){
            mostrar.innerHTML = `${rol}`;
        }
    });
    familiar.value = '';
};

identificar.addEventListener('click', showFamily );

//************************************************************************************ */

const familiarIdo = document.querySelector('#familiarIdo');
const botonViajo = document.querySelector('#viajo');
const ausente = document.querySelector('#ausente');

const sacaFamiliar = () => {
    for(let i = 0; i<myFamily.length; i++ ){
        if(familiarIdo.value === myFamily[i].name){
            ausente.innerHTML = `${familiarIdo.value} se encuentra en otra ciudad`;
            myFamily.splice(i,1);
        }
    }
    showFamily();
};

botonViajo.addEventListener('click', sacaFamiliar);

//********************************************************************************** */