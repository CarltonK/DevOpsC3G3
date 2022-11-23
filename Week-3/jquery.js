jQuery(document).ready(() => {
    console.log('JQuery is running');


    // <!-- JAVASCRIPT -->

    // <!-- 1. Selectors -> How do we access elements -->
    // <!-- ID elements -> # -->
    // <!-- Class elements ->  . -->

    // <!-- 2. Events -->

    // <!-- () => {} -->
    // <!-- function() {} -->


    // <!-- 

    //         $('p#one').click(() => {
    //             console.log('Paragraph one clicked');
    //         });

    //         $('p.two').dblclick(() => {
    //             console.log('Paragraph two double clicked');
    //         });

    //         $('p#three').mouseenter(() => {
    //             $('p#one').hide();
    //             console.log('There is a mouse in this region');
    //         });

    //         $('p#three').mouseleave(() => {
    //             console.log('A mouse has left this region');
    //             $('p#one').show();
    //         });

    //         $('p.four').click(() => {
    //             $('p#five').fadeOut();
    //         });
    //  -->

    // jQuery('p#one').click(() => {
    //     console.log('Paragraph one clicked');
    // });

    // jQuery('p.two').dblclick(() => {
    //     console.log('Paragraph two double clicked');
    // });

    // jQuery('p#three').mouseenter(() => {
    //     jQuery('p#one').hide();
    //     console.log('There is a mouse in this region');
    // });

    // jQuery('p#three').mouseleave(() => {
    //     console.log('A mouse has left this region');
    //     jQuery('p#one').show();
    // });

    // jQuery('p.four').click(() => {
    //     jQuery('p#five').fadeOut();
    // });

    $('button#color').click(() => {
        $('p#one').css('color', 'green')
    });


    $('button#fontSize').click(() => {
        $('p#one').css('font-size', '36px')
    });

    $('button#color').click(() => {
        $('button#color').addClass('paragraphStyler')
    });


    $('button#fontSize').click(() => {
        $('p#one').removeClass('paragraphStyler')
    });

    $('button#paragraphAdder').click(() => {
        $('body').prepend('<p>This has been added via Jquery</p>')
    });

    $('button#fruitAdder').click(() => {
        const fruits = ['Apples', 'Bananas', 'Mangoes'];

        fruits.forEach(fruit => {
            $('ul#fruitsList').append(`<li>${fruit}</li>`);
        })
    })

    $('button#fruitRemover').click(() => {
        $('ul#fruitsList').remove();
    })
});