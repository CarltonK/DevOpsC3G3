jQuery(document).ready(() => {
    console.log('JQuery is running');

    jQuery('p#one').click(() => {
        console.log('Paragraph one clicked');
    });

    jQuery('p.two').dblclick(() => {
        console.log('Paragraph two double clicked');
    });

    jQuery('p#three').mouseenter(() => {
        jQuery('p#one').hide();
        console.log('There is a mouse in this region');
    });

    jQuery('p#three').mouseleave(() => {
        console.log('A mouse has left this region');
        jQuery('p#one').show();
    });

    jQuery('p.four').click(() => {
        jQuery('p#five').fadeOut();
    });
});