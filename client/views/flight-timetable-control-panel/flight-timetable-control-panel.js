modules.define(
    'flight-timetable-control-panel',
    ['inherit', 'block'],
    function (provide, inherit, YBlock) {
        var flight_timetable_control_panel = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);



                // здесь описываем то, что происходит сразу после создания инстанса класса
            }

            // инстанс-методы
        }, {
            getBlockName: function () {
                return 'flight-timetable-control-panel';
            }

            // статические методы
        });

        provide(flight_timetable_control_panel);
});
