modules.define(
    'info-view',
    ['inherit', 'block'],
    function (provide, inherit, YBlock) {
        var info_view = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);

                // здесь описываем то, что происходит сразу после создания инстанса класса
            }

            // инстанс-методы
        }, {
            getBlockName: function () {
                return 'info-view';
            }

            // статические методы
        });

        provide(info_view);
});
