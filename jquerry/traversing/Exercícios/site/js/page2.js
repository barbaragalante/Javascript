$(function(){ 
    $("input[type=text]").parent().addClass('alert alert-info');

    $('.list-group-item').on('click', function(){
        $(this).removeClass('list-group-item-dark').addClass('lis-group-item-info')
        $(this).siblings().removeClass('list-group-item-dark').addClass('lis-group-item-info')
    })
    
    })