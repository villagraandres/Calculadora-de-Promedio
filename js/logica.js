


const datos={
    etapa1:'',
    etapa2:'',
    etapa3:'',
    etapa4:'',
     medioTermino:'',
    global:'',
    portafolio:''
   
}




/* Inputs */
const examen1=document.querySelector('#etapa-1');
const examen2=document.querySelector('#etapa-2');
const examen3=document.querySelector('#etapa-3');
const examen4=document.querySelector('#etapa-4');
const medioTermino=document.querySelector('#medio-termino');
const global=document.querySelector('#global');
const portafolio=document.querySelector('#portafolio');

/* Contenedor */

const contenedor=document.querySelector('#contenido');


examen1.addEventListener('input',validarExamen);
examen2.addEventListener('input',validarExamen);
examen3.addEventListener('input',validarExamen);
examen4.addEventListener('input',validarExamen);
medioTermino.addEventListener('input',validarMedio);
global.addEventListener('input',validarGlobal); 
portafolio.addEventListener('input',validarPortafolio);

function validarExamen(e){
 

   validarDigitos(e);

    datos[e.target.name]=  Math.round ((parseFloat( e.target.value) * 5 ) / 100 );
    

   
}

function validarMedio(e){
    validarDigitos(e);

    datos[e.target.name]= Math.round((parseFloat( e.target.value) * 15 ) / 100) ;
    
    
}

function validarGlobal(e){

    validarDigitos(e);

    datos[e.target.name]= Math.round((parseFloat( e.target.value) * 25 ) / 100) ;
   

}


function validarPortafolio(e){
    if(parseFloat (e.target.value)>40 ){
        e.target.value='';
        datos[e.target.name]='';
        return;
    }

    datos[e.target.name]=  parseFloat(e.target.value);  
}




function validarDigitos(e){
    if(parseInt (e.target.value)>100 || parseInt(e.target.value)<0 || parseInt(e.target.value.length)>=4  ){
        e.target.value='';
        datos[e.target.name]='';
        return;
    }
}




function mostrarPromedio(){

   while(contenedor.firstChild){
    contenedor.removeChild(contenedor.firstChild);
   }


 if(Object.values(datos).includes('') || Object.values(datos).includes(NaN) ){

    const alerta=`<div class="alert alert-danger m-5" role="alert">
    Faltan datos de llenar!
  </div>`;
  contenedor.innerHTML=alerta;

    console.log('invalido');
    return;
 }

 let suma = 0;


for (let key in datos) {
  suma += datos[key];
}



//Crear Html
const calificacionFinal=document.createElement('p');
const mensaje=document.createElement('p');
calificacionFinal.textContent=suma;
const puntosFaltantes= document.getElementById('faltante')

if(suma>=70){
   puntosFaltantes.innerHTML='';
   calificacionFinal.classList.add('aprobo','resultado','text-center');
   mensaje.textContent='Felcidades! Tu calificacion es aprobatoria';
   contenedor.appendChild(calificacionFinal);
   contenedor.appendChild(mensaje);
    }else{
    
      let faltante=70-suma;
      calificacionFinal.classList.add('reprobo','resultado','text-center');
        
        contenedor.appendChild(calificacionFinal);
        contenedor.appendChild(mensaje);
        puntosFaltantes.innerHTML=`  <p>Te faltan <span id="faltante">${faltante}</span> puntos para aprobar </p>`;
    }








 }
 






