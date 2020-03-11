$(document).ready(function(){
    $('#load').click(loadText);

    function loadText(){
        $.get('text.txt', function(data, status){
            $('#data').html(data);
            alert(status);
        });
    }
});