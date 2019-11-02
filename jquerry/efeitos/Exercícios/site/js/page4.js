$(function(){
    $("#btn0").click(function(){
        $("#card1").slideToggle(2000);
        $("#card2").slideToggle(3000);
        $("#card3").slideToggle(4000);
        $('.btn').addClass('btn-secondary');
        $('.btn').prop('disabled',true);
    });
    
    $(".card").click(function(){
        $(this).remove()
    })

})