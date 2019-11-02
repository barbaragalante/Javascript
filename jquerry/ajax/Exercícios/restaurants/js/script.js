$(function () {
    $.ajax({
        type: "GET",
        url: "./resources/restaurants.xml",
        dataType: "xml",
        success: function (data) {
            $(data).find('restaurant').each(function () {
                let html = '<li class="list-group-item list-group-item-light">' +
                '<div class="d-flex w-100 justify-content-between">' +
                    '<h5 class="mb-1">' + $(this).attr("name") + '</h5>'+
               '<p class="mb-1">' + $(this).attr("address")+'</p>' +
                '<small> <a href="http://maps.google.com/maps?q=' + $(this).attr('lat') + ',' +  $(this).attr('lng') +'" target="_blank">Ver no mapa</a></small>' +
            '</li>';
                 
                $("ul").append(html);
            });
        },
        error: function () {
            alert('Deu um erro... Que tristeza');
        }
    })
})
