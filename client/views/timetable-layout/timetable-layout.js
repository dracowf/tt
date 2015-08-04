modules.define(
    'timetable-layout',
    ['inherit', 'block'],
    function (provide, inherit, YBlock) {
        var TimetableLayout = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);

                // здесь описываем то, что происходит сразу после создания инстанса класса
            }

            // инстанс-методы
        }, {
            getBlockName: function () {
                return 'timetable-layout';
            }

            // статические методы
        });

        provide(TimetableLayout);
});
