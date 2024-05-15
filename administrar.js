 src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
    crossorigin="anonymous"
 src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.js"

$(document).ready(function(){
    $('#formulario').submit(function(e) {
        e.preventDefault();
        var imagen = document.getElementById("imagen").value;
        var span_i = document.getElementById("s_imagen")
        if (imagen === '')  {
            span_i.style.display= 'block'
            return false;

        } else {
            span_i.style.display= 'none'
            localStorage.setItem("Imagen", imagen);
        }

        var id = document.getElementById("id").value;
        var span_id = document.getElementById("s_id")
        if (id === '')  {
            span_id.style.display= 'block'
            return false;

        } else {
            span_id.style.display= 'none'
            localStorage.setItem("Imagen", imagen);
        }

        var nombre = document.getElementById("nombre").value;
        var span_n = document.getElementById("s_nombre")
        if(nombre === ''){
            span_n.style.display= 'block'
            return false;
        } else {
            span_n.style.display= 'none'
            localStorage.setItem("Nombre", nombre);  
        }

        var desc = document.getElementById("desc").value
        var span_de = document.getElementById("s_desc");
        if(desc === ''){
            span_de.style.display= 'block'
            return false
        } else {
            span_de.style.display= 'none'
            localStorage.setItem("Desc", desc);
        }

        var precio = document.getElementById("precio").value;
        var span_pre = document.getElementById("s_precio");
        if(precio === ''){                
            span_pre.style.display= 'block'
            return false;
        } else {  
            span_pre.style.display= 'none'
            localStorage.setItem("Precio", precio);
        } 

        var in_imagen = document.getElementById("imagen");
        var in_nombre = document.getElementById("nombre");
        var in_desc = document.getElementById("desc");
        var in_precio = document.getElementById("precio");
        var in_id = document.getElementById("id");

        var libro = {
            Imagen: in_imagen.value.Imagen,
            Id : in_id.value.trim(),
            Nombre : in_nombre.value.trim(), 
            Desc: in_desc.value.trim(),
            Precio: in_precio.value
        };

        if (libro !== "") { 
            var listaLIbros = JSON.parse(localStorage.getItem("autos")) || []; 
            listaLIbros.push(auto);
            localStorage.setItem("autos", JSON.stringify(listaLIbros)); 
            Mostrar(); 
        }
    });
});
