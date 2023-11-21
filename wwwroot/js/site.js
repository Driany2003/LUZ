<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

var cantidadInput = $(".cantidad[data-id=" + id + "]");

if (cantidadInput.length > 0) {
    var cantidad = cantidadInput.val();
 
    if (cantidad && cantidad > 0) {
    
        console.log("Agregado al carrito - ID: " + id + ", Cantidad: " + cantidad);
    } else {
        alert("Por favor, ingresa una cantidad válida.");
    }
} else {
    alert("No se encontró el elemento de cantidad para el ID: " + id);
}