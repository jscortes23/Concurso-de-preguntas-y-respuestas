<?php
    $con = mysqli_connect("localhost:81", "sofka", "sofka", "db_cuestionario");

    if (isset($_POST['iniciar']))) {
        $nombre = trim($_POST['nombre']);
        $correctas = trim($_POST['correctas']);
        $incorrecta = trim($_POST['incorrecta']);
        $consulta = "INSERT INTO jugador(nombre, correctas, incorrecta) VALUES ('$nombre','$correctas','$incorrecta')";
        $resulrado = mysql_query($con, $consulta);
    }
    
?>