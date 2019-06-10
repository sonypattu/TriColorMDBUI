$(document).ready(function() {
    var jqxhr = $.getJSON( "json/carpool.json", function(mokData) {
        let carsCount = "12";
        let data = mokData.data;
        console.log(mokData.data);
        $.each(data, function(i) {
            $("#carspool").append("<div class=\"card col-6 col-xs-6 col-sm-6 col-md-3 mb-md-3\" data-toggle=\"modal\" data-target=\"#basicExampleModal\">" + "<img src='"+data[i].url+"' height='180px' />" +  "<h6 class='font-weight-bold mar-zero pad-zero'>" + data[i].carTitle + "</h6>" +  "<div class='row'>" + "<div class='col col-md-6 col-sm-8 col-xs-8 no-wrap small-font'>" + data[i].miles + "</div>" +  "<div class='col col-md-6 col-sm-4 col-xs-4 text-right no-wrap small-font'>" + data[i].price + "</div>" + "</div>")
        });
        $('#carPoolCount').empty();
        $('#carPoolCount').append(carsCount + ' Trocas Perronas');
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
        let carsCount = "12";
        let data = mokData.data;
        var data_filter = data.filter( element => element.category ==="7Seater");
        console.log(data_filter);
        $('#carspool').empty();
        data = data_filter;
        $.each(data, function(i) {
            $("#carspool").append("<div class=\"card col-6 col-xs-6 col-sm-6 col-md-3 mb-md-3\" data-toggle=\"modal\" data-target=\"#basicExampleModal\">" + "<img src='"+data[i].url+"' height='180px'/>" +  "<h6 class='font-weight-bold mar-zero pad-zero'>" + data[i].carTitle + "</h6>" +  "<div class='row'>" + "<div class='col col-md-6 col-sm-8 col-xs-8 no-wrap small-font'>" + data[i].miles + "</div>" +  "<div class='col col-md-6 col-sm-4 col-xs-4 text-right no-wrap small-font'>" + data[i].price + "</div>" + "</div>")
        });
        $('#carPoolCount').empty();
        $('#carPoolCount').append(carsCount + ' Trocas Perronas');

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
        let carsCount = "12";
        let data = mokData.data;
        var data_filter = data.filter( element => element.category ==="5Seater");
        console.log(data_filter);
        $('#carspool').empty();
        data = data_filter;
        $.each(data, function(i) {
            $("#carspool").append("<div class=\"card col-6 col-xs-6 col-sm-6 col-md-3 mb-md-3\" data-toggle=\"modal\" data-target=\"#basicExampleModal\">" + "<img src='"+data[i].url+"' height='180px'/>" +  "<h6 class='font-weight-bold mar-zero pad-zero'>" + data[i].carTitle + "</h6>" +  "<div class='row'>" + "<div class='col col-md-6 col-sm-8 col-xs-8 no-wrap small-font'>" + data[i].miles + "</div>" +  "<div class='col col-md-6 col-sm-4 col-xs-4 text-right no-wrap small-font'>" + data[i].price + "</div>" + "</div>")
        });
        $('#carPoolCount').empty();
        $('#carPoolCount').append(carsCount + ' Trocas Perronas');
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
        let carsCount = "12";
        let data = mokData.data;
        $('#carspool').empty();
        var data_filter = data.filter( element => element.category ==="4Seater");
        console.log(data_filter);
        data = data_filter;
        $('#carspool').empty();
        data = data_filter;
        $.each(data, function(i) {
            $("#carspool").append("<div class=\"card col-6 col-xs-6 col-sm-6 col-md-3 mb-md-3\" data-toggle=\"modal\" data-target=\"#basicExampleModal\">" + "<img src='"+data[i].url+"' height='180px' />" +  "<h6 class='font-weight-bold mar-zero pad-zero'>" + data[i].carTitle + "</h6>" +  "<div class='row'>" + "<div class='col col-md-6 col-sm-8 col-xs-8 no-wrap small-font'>" + data[i].miles + "</div>" +  "<div class='col col-md-6 col-sm-4 col-xs-4 text-right no-wrap small-font'>" + data[i].price + "</div>" + "</div>")
        });
        $('#carPoolCount').empty();
        $('#carPoolCount').append(carsCount + ' Trocas Perronas');
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
        let carsCount = "12";
        let data = mokData.data;
        var data_filter = data.filter( element => element.category ==="10Seater");
        console.log(data_filter);
        $('#carspool').empty();
        data = data_filter;
        $.each(data, function(i) {
            $("#carspool").append("<div class=\"card col-6 col-xs-6 col-sm-6 col-md-3 mb-md-3\" data-toggle=\"modal\" data-target=\"#basicExampleModal\">" + "<img src='"+data[i].url+"' height='180px' />" +  "<h6 class='font-weight-bold mar-zero pad-zero'>" + data[i].carTitle + "</h6>" +  "<div class='row'>" + "<div class='col col-md-6 col-sm-8 col-xs-8 no-wrap small-font'>" + data[i].miles + "</div>" +  "<div class='col col-md-6 col-sm-4 col-xs-4 text-right no-wrap small-font'>" + data[i].price + "</div>" + "</div>")
        });
        $('#carPoolCount').empty();
        $('#carPoolCount').append(carsCount + ' Trocas Perronas');
    }).done(function() {
        console.log( "second success" );
    }).fail(function() {
        console.log( "error" );
    }).always(function() {
        console.log( "complete" );
    });
});




