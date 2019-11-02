$(function(){
    $.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/?limit=151",
        dataType: "json",
        success: function (data) {
            data.results.array.forEach(results=> {
                
            });
            $(data).find('Pokemon').each(function(){
            let html = '<li class="list-group-item list-group-item-danger">' +
            '<div class="d-flex w-100 justify-content-between">'+
                '<h5 class="mb-1">' + $(this).attr()+ '</h5>'
            '</div>'
            '<small><a href="#" data-toggle="modal" data-target="#modalDetalhes">Detalhes</a></small>'
        '</li>';
        $("ul").append(html);
})
        },
        error: function () {
            alert('Deu um erro... Que tristeza');
        }
    })
})




