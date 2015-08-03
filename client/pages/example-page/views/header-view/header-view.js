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

                // здесь описываем то, что происходит сразу после создания инстанса класса
            }

            // инстанс-методы
        }, {
            getBlockName: function () {
                return 'header-view';
            }

            // статические методы
        });

        provide(header_view);
});
