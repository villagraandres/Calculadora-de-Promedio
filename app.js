
//Variables


const marca=document.querySelector('#marca');
const year=document.querySelector('#year');
const minimo=document.querySelector('#minimo');
const maximo=document.querySelector('#maximo');
const puertas=document.querySelector('#puertas');
const transmision=document.querySelector('#transmision');
const color=document.querySelector('#color');


//Container
const resultado=document.querySelector('#resultado');

const max= new Date().getFullYear();
const min= max-10;


//Generar objetos con los datos de la busqueda
const datosBusqueda={
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color:''
}

//Eventos
document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos);//Muestra el html de los carros
    llenarSelect(); //Llena el select de años

})



//Evt para los select de busqueda

marca.addEventListener('change',(e)=>{
    
    datosBusqueda.marca=e.target.value;
    filtrarAuto();
   
})


year.addEventListener('change',(e)=>{
    
    datosBusqueda.year= parseInt (e.target.value);
    filtrarAuto();
   
})


minimo.addEventListener('change',(e)=>{
    
    datosBusqueda.minimo=e.target.value;
    filtrarAuto();
   
   
})
maximo.addEventListener('change',(e)=>{
    
    datosBusqueda.maximo=e.target.value;
    filtrarAuto();
   
})
puertas.addEventListener('change',(e)=>{
    
    datosBusqueda.puertas= parseInt(e.target.value);
    filtrarAuto();
   
})
transmision.addEventListener('change',(e)=>{
    
    datosBusqueda.transmision=e.target.value;
    filtrarAuto();

   
})

color.addEventListener('change',(e)=>{
    
    datosBusqueda.color=e.target.value;
    filtrarAuto();
   
})

function mostrarAutos(autos){

    limpiarHTML();
    autos.forEach(auto => {

        const {marca,modelo,year,puertas,transmision,precio,color}=auto
        const autoHTML=document.createElement('P');
        autoHTML.textContent=`
        ${marca} ${modelo}-${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $${precio } - Color: ${color}
        
        `;
        //Insertat
        resultado.appendChild(autoHTML);


    });
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

//Genera los años del select
function llenarSelect(){

  for(let i=max; i>=min;i--){
    const opcion=document.createElement('option');
    opcion.value=i;
    opcion.textContent=i;
    year.appendChild(opcion);
  }
    
}

function filtrarAuto(){
    const resultado=autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
   // console.log(resultado);

   if(resultado.length){
        mostrarAutos(resultado);
   }else{
        noResultado();
   }

  
}

function filtrarMarca(auto){
    const {marca}=datosBusqueda;

    if(datosBusqueda.marca){
        return auto.marca===marca;
    }

    return auto;
}

function filtrarYear(auto){

    const {year}=datosBusqueda;

    if(datosBusqueda.year){
        return auto.year=== year;
    }

    return auto;
}

function filtrarMinimo(auto){

    const {minimo}=datosBusqueda;

    if(datosBusqueda.minimo){
        return auto.precio >= minimo;
    }

    return auto;

}

function filtrarMaximo(auto){

    const {maximo}=datosBusqueda;

    if(datosBusqueda.maximo){
        return auto.precio <= maximo;
    }

    return auto;

}

function filtrarPuertas(auto){
 const {puertas}=datosBusqueda;

    if(datosBusqueda.puertas){
        return auto.puertas === puertas;
    }

    return auto;
}

function filtrarTransmision(auto){
    const {transmision}=datosBusqueda;

    if(datosBusqueda.transmision){
        return auto.transmision === transmision;
    }

    return auto;
}

function filtrarColor(auto){
    const {color}=datosBusqueda;

    if(datosBusqueda.color){
        return auto.color === color;
    }

    return auto;
}

function noResultado(){
    limpiarHTML();

    const noResultado=document.createElement('DIV');
    noResultado.classList.add('alerta','error');
    noResultado.textContent='No hay resultados';
    resultado.appendChild(noResultado);
}