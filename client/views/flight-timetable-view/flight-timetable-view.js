modules.define(
    'flight-timetable-view',
    ['inherit', 'block'],
    function (provide, inherit, YBlock) {
        var flight_timetable_view = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);

                // здесь описываем то, что происходит сразу после создания инстанса класса
            }

            // инстанс-методы
        }, {
            getBlockName: function () {
                return 'flight-timetable-view';
            }

            // статические методы
        });

        provide(flight_timetable_view);
});
