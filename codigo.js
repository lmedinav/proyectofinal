
   //codigo para backtoTOP
    var $button = $.backToTop({
        // background color
        backgroundColor: '#ff9a9e',
        // text color
        color: '#FFFFFF',
        // container element - adonde aparece el boton, es decir en el body
        container: this._body, 
        // efecto all aparecer/desaparece 'nonn', 'spin', 'fade', 'zoom', or 'spin-inverse'
        effect: 'spin',
        // enable the back to top button
        enabled: true, 
        // alto y ancho del boton 
        height: 40,  
        width: 40,
        // icon (desde fontawesome)
        icon: 'fas fa-chevron-up',
        // margins 
        marginX: 20,
        marginY: 20,  
        // posicion del boton dentro de la pagina bottom/top left/right
        position: 'bottom right',           
        // trigger position
        pxToTrigger: 600,
        // or 'fawesome'
        theme: 'default',
        // z-index
        zIndex: 999    
    });
    
   
