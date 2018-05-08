/*CREDENTIALS VALIDATION*/

//login animations and changing panel description
$('.login--btn').on('click', function (event) {
    var $username = $('#username').val();
    var $password = $('#password').val();
    //if credentials are OK, show welcome msg and animate the panel
    if ($username == 'admin' && $password == 'shopping'){
        event.preventDefault();
        $('.login--panel__description').text('Witamy!').css('font-size', '2em');
        $('.login--panel').delay(900).animate({right: "100%"}, {queue: true});
        $('.shopping--list--panel').delay(800).animate({left: "10%"}, {queue: true});
        //if wrong credentials are given -> error
    } else {
        event.preventDefault();
        $('.login--panel__description').text('Wpisales bledny login lub haslo, sprobuj ponownie!')
            .css({'color': 'black',
                'font-size': '1.1em'});
    }
})
//function that resets panel description as well as the input values
$('.reset--btn').on('click', function () {
    $('.login--panel__description').text('Podaj login i haslo, zeby sie zalogowac')
        .css({'color': 'white',
            'font-size': '1.3em'});
})

/*SHOPPING PANEL FUNCTIONS*/

//adding new item to the shop list
$('.plus--btn').on('click', function() {
    //getting and setting values
    var newItemName = $('#newItem').val();
    var newItem = $('<li class="shopping--item">' + newItemName + '</li>');
    //if empty -> error
    if($.trim(newItemName) == ""){
        $('.error-message').text("Nowy produkt nie moze byc pusty :(");
        //if number -> error
    } else if (isNaN(newItemName) == false) {
        $('.error-message').text("Nowy produkt nie moze byc liczba :(");
        //if more than 11 items - error
    } else if ($('li').length >= 11) {
        $('.error-message').text("Niestety nie mozna juz dodac wiecej produktow :(");
        //if no errors --> add new item
    } else {
        $('.shopping--list').append(newItem);
        $('.error-message').text("");
    }
    // reset the newItem input value
    $('#newItem').val("");
})