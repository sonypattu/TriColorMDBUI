$(document).ready(function() {
    var jqxhr = $.getJSON( "json/carpool.json", function(mokData) {
        let data = mokData.data;
        console.log(mokData.data);
        $.each(data, function(i) {
            var templateString = '<div class="card col-6 col-xs-6 col-sm-6 col-md-3 mb-md-3">' +  '<img class="card-img-top" src="img/cars/sierra1.jpg">' +
                '<h4>' + data[i].carTitle + '</h4>'  +  '<p>' + data[i].miles + '</p></div>';
            $('#carspool').append(templateString);
        })
    }).done(function() {
            console.log( "second success" );
    }).fail(function() {
            console.log( "error" );
    }).always(function() {
            console.log( "complete" );
    });



});

$( "#category1" ).click(function() {
    var jqxhr = $.getJSON( "json/carpool.json", function(mokData) {
        let data = mokData.data;
        var data_filter = data.filter( element => element.category ==="7Seater");
        console.log(data_filter);
        $('#carspool').empty();
        data = data_filter;
        $.each(data, function(i) {
            var templateString = '<div class="card col-6 col-xs-6 col-sm-6 col-md-3 mb-md-3">' +  '<img class="card-img-top" src="img/cars/sierra1.jpg">' +
                '<h4>' + data[i].carTitle + '</h4>'  +  '<p>' + data[i].miles + '</p></div>';
            $('#carspool').append(templateString);
        })

    }).done(function() {
        console.log( "second success" );
    }).fail(function() {
        console.log( "error" );
    }).always(function() {
        console.log( "complete" );
    });
});



$( "#category2" ).click(function() {
    var jqxhr = $.getJSON( "json/carpool.json", function(mokData) {
        let data = mokData.data;
        var data_filter = data.filter( element => element.category ==="5Seater");
        console.log(data_filter);
        $('#carspool').empty();
        data = data_filter;
        $.each(data, function(i) {
            var templateString = '<div class="card col-6 col-xs-6 col-sm-6 col-md-3 mb-md-3">' +  '<img class="card-img-top" src="img/cars/sierra1.jpg">' +
                '<h4>' + data[i].carTitle + '</h4>'  +  '<p>' + data[i].miles + '</p></div>';
            $('#carspool').append(templateString);
        })

    }).done(function() {
        console.log( "second success" );
    }).fail(function() {
        console.log( "error" );
    }).always(function() {
        console.log( "complete" );
    });
});


$( "#category3" ).click(function() {
    var jqxhr = $.getJSON( "json/carpool.json", function(mokData) {
        let data = mokData.data;
        var data_filter = data.filter( element => element.category ==="4Seater");
        console.log(data_filter);
        $('#carspool').empty();
        data = data_filter;
        $.each(data, function(i) {
            var templateString = '<div class="card col-6 col-xs-6 col-sm-6 col-md-3 mb-md-3">' +  '<img class="card-img-top" src="img/cars/sierra1.jpg">' +
                '<h4>' + data[i].carTitle + '</h4>'  +  '<p>' + data[i].miles + '</p></div>';
            $('#carspool').append(templateString);
        })

    }).done(function() {
        console.log( "second success" );
    }).fail(function() {
        console.log( "error" );
    }).always(function() {
        console.log( "complete" );
    });
});


$( "#category4" ).click(function() {
    var jqxhr = $.getJSON( "json/carpool.json", function(mokData) {
        let data = mokData.data;
        var data_filter = data.filter( element => element.category ==="10Seater");
        console.log(data_filter);
        $('#carspool').empty();
        data = data_filter;
        $.each(data, function(i) {
            var templateString = '<div class="card col-6 col-xs-6 col-sm-6 col-md-3 mb-md-3">' +  '<img class="card-img-top" src="img/cars/sierra1.jpg">' +
                '<h4>' + data[i].carTitle + '</h4>'  +  '<p>' + data[i].miles + '</p></div>';
            $('#carspool').append(templateString);
        })

    }).done(function() {
        console.log( "second success" );
    }).fail(function() {
        console.log( "error" );
    }).always(function() {
        console.log( "complete" );
    });
});




