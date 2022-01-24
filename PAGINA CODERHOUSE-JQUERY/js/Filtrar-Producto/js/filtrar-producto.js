// Flujo de trabajo
$( document ).ready(function() {
        //    Proceso Entrada 
        $("#search").keyup(function (e) { 
            if(e.target.matches("#search")){
                if(e.key === "Enter" ){
                    // Proceso salida
                    ObtenerData(e.target.value);
                    // Proceso
                    if($("#mensaje-estado")!==undefined)
                    { 
                        // Proceso Salida animaciones
                        // interactividad animaciones   
                        $("#mensaje-estado").fadeIn(2000,function(){
                            // Interactividad animaciones
                            $("#mensaje-estado").fadeOut(2000);
                            // Proceso salida
                            // interactividad animaciones 
                            $("#subtitulo").animate({
                                opacity:0.1
                            })
                            // Proceso salida
                            // interactividad animaciones 
                            $("#title").animate({
                                fontSize:"20px"
                            });
                            // Proceso salida
                            // interactividad animaciones 
                            $("#precio").animate({
                                opacity:0.1
                            })
                            // Proceso salida
                            // interactividad animaciones 
                            $("#title").css({
                               "color":"green"
                            })
                        });    
                        
                    }
                }
            }
            
        });

        // Proceso de entrada
   const ObtenerData = (busqueda)=>{    
          $.get("../../api.json", function(respuesta) {
                  // Proceso 
                  const filtrados = respuesta.filter(producto2=>producto2.title.toLocaleUpperCase().includes(busqueda.toLocaleUpperCase()));
                  if('filtrados' in localStorage)
                  {
                    //   Parse de json a objeto
                    // para obtener los objeto del archivo api.json
                    // Proceso Salida
                      JSON.parse(localStorage.getItem('filtrados'));
                  }
                    //stringify de objeto a json
                    // para guardar los datos en el navegador
                    // Proceso salida 
                  localStorage.setItem('filtrados',JSON.stringify(filtrados));        
                  $.tmpl(function(){
                    //   proceso salida
                        pintarTemplate(filtrados)
                           
                }).appendTo('#content');
        });

    }



    
});

// Proceso entrada
const content = document.getElementById("content");
const fragment = document.createDocumentFragment()
const template = document.getElementById("producto-template").content

// pintar tarjeta
// Proceso salida
const pintarTemplate =data=>{
    // console.log(data);
    // Proceso
     data.forEach(producto=>{

        template.getElementById("subtitulo").innerHTML = producto.id; 
        template.getElementById("title").innerHTML = producto.title;
        template.getElementById("precio").innerHTML = producto.precio;
        template.getElementById('imagen').setAttribute("src",producto.img);
        // En forma dinamica tiene que agregarse el titulo como llaveunica acediendo el objeto a json
        template.querySelector("h5").dataset.title = producto.title;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone)         
     
     })

      
    //  Proceso salida
     content.appendChild(fragment)
    
}

