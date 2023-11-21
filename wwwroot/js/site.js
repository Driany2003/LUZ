<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    $(document).ready(function () {
        $(".btnAgregar").on("click", function () {
            var targetId = $(this).data("target");
            var cantidad = $("#" + targetId).val();
            alert("Agregado al carrito: " + cantidad + " unidades.");
        });
    });
