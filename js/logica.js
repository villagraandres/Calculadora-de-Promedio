


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


examen1.addEventListener('input',validarExamen);
examen2.addEventListener('input',validarExamen);
examen3.addEventListener('input',validarExamen);
examen4.addEventListener('input',validarExamen);
medioTermino.addEventListener('input',validarMedio);
global.addEventListener('input',validarGlobal); 
portafolio.addEventListener('input',validarPortafolio);

function validarExamen(e){
 

   validarDigitos(e);

    datos[e.target.name]=  Math.round ((parseInt( e.target.value) * 5 ) / 100 );
    

   
}

function validarMedio(e){
    validarDigitos(e);

    datos[e.target.name]= Math.round ((parseInt( e.target.value) * 15 ) / 100 );
    
    
}

function validarGlobal(e){

    validarDigitos(e);

    datos[e.target.name]= Math.round ((parseInt( e.target.value) * 25 ) / 100 ) ;
   

}


function validarPortafolio(e){
    if(parseInt (e.target.value)>40 || parseInt(e.target.value.length)>=3  ){
        e.target.value='';
        datos[e.target.name]='';
        return;
    }

    datos[e.target.name]=parseInt(e.target.value);  
}




function validarDigitos(e){
    if(parseInt (e.target.value)>100 || parseInt(e.target.value.length)>=4  ){
        e.target.value='';
        datos[e.target.name]='';
        return;
    }
}





function mostrarPromedio(){


 if(Object.values(datos).includes('') || Object.values(datos).includes(NaN) ){
    console.log('invalido');
    return;
 }

 let suma = 0;
for (let key in datos) {
  suma += datos[key];
}
console.log(datos);
console.log(suma);




 }
 






