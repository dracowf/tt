modules.define(
    'timetable-view',
    ['inherit', 'block'],
    function (provide, inherit, YBlock) {
        var TimetableView = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);

                // здесь описываем то, что происходит сразу после создания инстанса класса
            }

            // инстанс-методы
        }, {
            getBlockName: function () {
                return 'timetable-view';
            }

            // статические методы
        });

        provide(TimetableView);
});
