let paso=1;
const pasoMax=3;
const pasoMin=1;

document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp(){
    mostrarPagina();
    botones();
    botonesPaginador();
   paginaAnterior();
   paginaSiguiente();
 /*   mostrarPromedio(); */
}

function botones(){
    const botones=document.querySelectorAll('.tab');

    botones.forEach(boton=>{

        boton.addEventListener('click',(e)=>{
            e.preventDefault();
            paso=parseInt(e.target.dataset.paso);

            mostrarPagina();
            botonesPaginador();
          
        })
    })
}


function mostrarPagina(){


    const seccionAnterior=document.querySelector('.mostrar');
    if(seccionAnterior){
        seccionAnterior.classList.remove('mostrar');
    }
   
    const pasoSelector = `#paso-${paso}`;
    const seccion = document.querySelector(pasoSelector);
    seccion.classList.add('mostrar');

    /* Tab anterior */
   


    const tabAnterior = document.querySelector('.activo');
    tabAnterior.classList.remove('activo');

    const tab=document.querySelector(`[data-paso="${paso}"]`);
    tab.classList.add('activo');




    
}

function  botonesPaginador(){
    const paginaSiguiente=document.querySelector('#siguiente');
    const paginaAnterior=document.querySelector('#anterior');
    if(paso===1){
        paginaAnterior.classList.add('ocultar');
        paginaSiguiente.classList.remove('ocultar');
    }else if (paso === 3){
        paginaAnterior.classList.remove('ocultar');
        paginaSiguiente.classList.add('ocultar');
        mostrarPromedio();
        
    }else{
        paginaAnterior.classList.remove('ocultar');
        paginaSiguiente.classList.remove('ocultar');
    }   
    mostrarPagina();
    
}


function paginaAnterior(){
    const paginaAnterior=document.querySelector('#anterior');
    paginaAnterior.addEventListener('click',function(){
        if(paso<=pasoMin) return;
        paso--;
        botonesPaginador();
        
    });
}


function  paginaSiguiente(){
    const paginaSiguiente=document.querySelector('#siguiente');
    paginaSiguiente.addEventListener('click',function(){
        if(paso>=pasoMax) return;
        paso++;
        botonesPaginador();
        
    });

 
    
}


