

$(document).ready(function() {


        $('.languages:last').addClass('last');
        $('.type:last').addClass('last');
        $('.topic:last').addClass('last');
        $(document).on('click', '.trigger', function() {
                var iFrame = $(this).closest('.tile').find('.invisible');
                if(iFrame) {
                        iFrame.removeClass('invisible');
                        iFrame.attr('src', 'iframe.html');
                };
        });

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
