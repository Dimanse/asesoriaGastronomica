document.addEventListener('DOMContentLoaded', function (){
    
    
    mostrarFechaActual();
    activarBoton();
    animacionTexto();
   

    
});

function mostrarFechaActual(){
    const year = document.querySelector('#year');
    if(year){
        const fecha = new Date();
        const opciones = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        // Pasando algunas opciones y el locale como español de españa
        const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
        // fechaFormateada vale "martes, 25 de abr de 2023"
        year.textContent = fechaFormateada;
    }
}

function activarBoton(){
    const botones = document.querySelectorAll('nav a');
    botones.forEach(boton => {
   
        // console.log(boton.href);
        if(boton.href === window.location.href){
            boton.classList.add('border-b', 'border-white');
            // const botonActivo = document.querySelector('.border-b', '.border-white');
        //  console.log(botonActivo);

        // if(botonActivo){
        //     botonActivo.classList.remove('border-b', 'border-white');
        // }
        }
        
        
  
    
           
});
}

function animacionTexto(){
    var words = [
        'un restaurante?   ', 
        'un catering?   ',
        'una pastelería?   ', 
        'una cafetería?   ', 
        'una soda?   ',
        'una coctelería?   ',
        'algo que esta muy bueno?   ',
    ],
    wordWrapper = document.getElementById('word'),
    wordWrapperContent = wordWrapper.innerHTML,
    addingWord = false,
    counter = 1;

setInterval(function(){

  if(wordWrapperContent.length > 0 && !addingWord ) {
    wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
    wordWrapperContent = wordWrapper.innerHTML;
  } else {
    addingWord = true;
  }

  if( addingWord ){
    if( wordWrapperContent.length < words[counter].length  ) {
      wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      if( counter < words.length) {
        counter ++
      }
      addingWord = false;
    }
  }

  if( counter == words.length) {
    counter = 0;
  }

}, 90);
}


const mobileMenuBtn = document.querySelector('#mobile-menu');

if(mobileMenuBtn){
    mobileMenuBtn.addEventListener('click', mostrarModal);
}


function mostrarModal(){
    const ventana_modal = document.querySelector('#ventana_modal');
    if(ventana_modal.classList = 'ocultar'){

        ventana_modal.classList.remove('ocultar')
        ventana_modal.classList.add('ventana_modal', 'mostrar');
    }

    const cerrar_menu = document.querySelector('.opciones button');
    // console.log(cerrar_menu);
    cerrar_menu.addEventListener('click', function(e){
        e.preventDefault();
        // console.log(e.target.classList.contains('cerrar-modal'))
        if(e.target.classList.contains('cerrar-modal')){
            ventana_modal.classList.remove('mostrar');
            ventana_modal.classList.add('ocultar');
        }

    });

    const enlacesNav = document.querySelectorAll('nav a');
    enlacesNav.forEach(enlaceNav => {
        enlaceNav.addEventListener('click', function(e){
            e.preventDefault();
            console.log('Cerrando ventana');
            ventana_modal.classList.remove('mostrar');
            ventana_modal.classList.add('ocultar');
        })
    })

}