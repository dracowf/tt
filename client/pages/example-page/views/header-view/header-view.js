modules.define(
    'header-view',
    [
        'inherit',
        'block'
    ],
    function (
        provide,
        inherit,
        YBlock,
        Input,
        SuperInput
    ) {
        var header_view = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);

            }

        }, {
            getBlockName: function () {
                return 'header-view';
            }

        });

        provide(header_view);
});
