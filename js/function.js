$(function(){
    $('#mail').click(function(e){
        e.preventDefault();
        $('#form').css('display','block');
    });
});

$(function() {
    $('#close').click(function(){
        $('#form').css('display','none');
    });
});

$(function() {
    $('#btn').click(function(e) {
        e.preventDefault();
        $.ajax({    
            url: "https://formspree.io/flead@yandex.ru", 
            method: "POST",
            data: {
                message: $('#name').val(),
                email: $('#email').val(),
                text: $('#comment').val()
            },
            dataType: "json"}).done(function(e){
                $('#message').css('display','block');
                $('#form').css('display','none');
                e.preventDefault();
            });
    });
});