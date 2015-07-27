modules.define(
    'layout-view',
    ['inherit', 'block'],
    function (provide, inherit, YBlock) {
        var layoutView = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);

                // здесь описываем то, что происходит сразу после создания инстанса класса
            }

            // инстанс-методы
        }, {
            getBlockName: function () {
                return 'layout-view';
            }

            // статические методы
        });

        provide(layoutView);
});
