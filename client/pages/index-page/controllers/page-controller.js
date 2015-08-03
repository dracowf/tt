modules.define(
    'page-controller',
    [
        'jquery',
        'inherit'
    ],
    function (
        provide,
        $,
        inherit
    ) {

        var PageController = inherit({
            __constructor: function () {
                console.log('index: PageController constructor');
                //            ^-------------------------------------- index-page
            },

            start: function () {
                console.log('index: PageController started');
                //            ^-------------------------------------- index-page!
            }
        });

        provide(PageController);
    });
