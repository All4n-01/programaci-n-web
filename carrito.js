var Total = 0;
function agregarAlCarrito(index) {
    var listaLibros = JSON.parse(localStorage.getItem("libros")) || [];
    var libro = listaLibros[index];
    var libroExistente = librosSeleccionados.find(function(lib) {
        return lib.Nombre === libro.Nombre && lib.Imagen === libro.Imagen;
    });

    if (!libroExistente) {
        librosSeleccionados.push(libro);
    }

    mostrarLibrosEnCarrito();
}

    var librosSeleccionados = [];
    function mostrarComprar(){
      var btnComprar = document.getElementById("comprar");
      var span_Total = document.getElementById("span_total");
      btnComprar.style.display = 'block';
      span_Total.style.display = 'block';
    }

    

function mostrarLibrosEnCarrito() {
    
    var listaLibros = document.getElementById("listaLibros");
    listaLibros.innerHTML = "";
    Total = 0; 
    librosSeleccionados.forEach(function(libro, index) {
        var li = document.createElement("li");
        var div = document.createElement("div");
        div.style.display = "flex"; 
        var img = document.createElement("img");
        img.src = libro.Imagen;
        img.alt = libro.Nombre;
        img.style.width = "80px";
        img.style.height = "100px";
        var span = document.createElement("span");
        var in_cant = document.createElement("input");
        var span_Total = document.getElementById("span_total");
        in_cant.type = "number";
        in_cant.placeholder = "Cantidad"
        in_cant.style.width = "88px"
        in_cant.style.height = "50px"
        in_cant.addEventListener("input", function() {
            var cantidad = in_cant.value;
            var total = `${libro.Precio}` * cantidad;
            Total += total; 
            console.log("Total:", total );
            console.log("TOTAL:", Total );
            span_Total.textContent = "Total: $"+Total;
        });
        span.textContent = `${libro.Nombre} $${libro.Precio}`
        span.style.margin = '10px'
        var btnEliminar = document.createElement("button");
        btnEliminar.style.height = '45px'
        btnEliminar.classList = 'btn btn-secondary'
        btnEliminar.style.float = 'inline-end';
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", function() {
          eliminarDelCarrito(index);});
        div.appendChild(img);
        div.appendChild(span);
        div.appendChild(in_cant)
        div.appendChild(btnEliminar);
        li.appendChild(div);
        listaLibros.appendChild(li);
        mostrarComprar();
        

      });
      var btnComprar = document.getElementById("comprar");
      if (librosSeleccionados.length === 0) {
        btnComprar.style.display = "none";
      } else {
        btnComprar.style.display = "block";
      }

      var span = document.getElementById("notiCompra");
      if (librosSeleccionados.length === 0) {
        span.style.display = "none";
      } else {
        span.style.display = "block";
      }

    }
    function eliminarDelCarrito(index) {
        librosSeleccionados.splice(index, 1); 
        mostrarLibrosEnCarrito(); 
    }

    function guardarLS() {
        localStorage.setItem("carrito", JSON.stringify(librosSeleccionados));
    }
    
    function cargarLS() {
        var carritoGuardado = localStorage.getItem("carrito");
        if (carritoGuardado) {
            librosSeleccionados = JSON.parse(carritoGuardado);
            mostrarLibrosEnCarrito(); 
        }
    }
    
    document.addEventListener("DOMContentLoaded", function() {
        cargarLS();
    });
    
    window.addEventListener("beforeunload", function() {
        guardarLS();
    });
