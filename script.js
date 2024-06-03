$(document).ready(function() {
    $("#submit-button").click(function() {
        var inputData = $("#input-field").val();
    
    
    
    
    
    });
        $.ajax({
            type: "POST",
            url: "backend.php",
            data: { key: inputData },
            success: function(response) {
                $("#response").html(response);
            },
            error: function(xhr, status, error) {
                console.error(error);
            }
        });
    });
