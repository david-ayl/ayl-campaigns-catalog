$('#wrapper').sdFilterMe({
    filterSelector: '.sorter', // string: selector
    orderSelector: '.orderer', // string: selector
    duration: 1000, // integer: in ms
    animation: 'ease', // string: ease | ease-in | ease-out | linear | ease-in-out
    hoverEffect: true, // boolean
    sortedOut: 'disappear', // string: disappear | opacity
    css: { // object
        overlay: { // object
            background: { // object
                r: 0, // integer: as in CSS
                v: 0, // integer: as in CSS
                b: 0 // integer: as in CSS
            },
            duration: 250, // integer: in ms
            border: '1px solid white', // string: as in CSS
            color: 'white', // string: color
            opacity: 0.5 // float: as in CSS
        },
        border: { // object
            width: 10, // integer: in px
            color: '#2A4153' // string: color
        },
        margin: 10, // integer: in px
        pointer: true // boolean
    },
    nothingToShow: {
        text: 'Nothing to show', // string: text
        color: '#ccc' // string: color
    }
}).on('fm.boxClicked', function(e, position, order) {
    console.log('Box position is ' + position);
    console.log('Box sort order is ' + order);
});
