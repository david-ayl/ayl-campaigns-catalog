

$(document).ready(function() {

        var displayCamp = function(e) {
                var el = e.target
                var id = $(el).closest('.tile').find('.id').html();
                $('#overflay-iframe-container').addClass('visible');
                $('.campaign-iframe').attr({
                        'src' : 'iframe.html',
                        'data-camp' : id
                });
        };

        var removeCamp = function() {
                $('#overflay-iframe-container').removeClass('visible');
                $('.campaign-iframe').attr({
                        'src' : '',
                        'data-camp' : ''
                });
        }

        $(document)
        .on('click', '.trigger', displayCamp)
        .on('click', '#close-iframe', removeCamp);


        $('#wrapper').sdFilterMe({
                filterSelector: '.sorter',
                orderSelector: '.orderer',
                duration: 1000,
                animation: 'ease',
                hoverEffect: true,
                sortedOut: 'disappear',
                css: {
                        overlay: {
                                background: {
                                        r: 0,
                                        v: 0,
                                        b: 0
                                },
                                duration: 250,
                                border: '1px solid white',
                                color: 'white',
                                opacity: 0.5
                        },
                        border: {
                                width: 10,
                                color: '#2A4153'
                        },
                        margin: 10,
                        pointer: true
                },
                nothingToShow: {
                        text: 'Nothing to show',
                        color: '#ccc'
                }
        });

});
