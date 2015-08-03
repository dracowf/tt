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
                console.log('test: PageController constructor');
                //            ^-------------------------------------- index-page
            },

            start: function () {
                console.log('test: PageController started');
                //            ^-------------------------------------- index-page!
            }
        });

        provide(PageController);
    });
