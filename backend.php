<?php
if (isset($_POST['key'])) {
    $data = $_POST['key'];

    echo "Received data: " . $data;
    
} else {
    echo "No data received.";
}
?>
