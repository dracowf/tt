modules.define(
    'timetable-control-panel',
    ['inherit', 'block'],
    function (provide, inherit, YBlock) {
        var TimetableControlPanel = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);



                // здесь описываем то, что происходит сразу после создания инстанса класса
            }

            // инстанс-методы
        }, {
            getBlockName: function () {
                return 'timetable-control-panel';
            }

            // статические методы
        });

        provide(TimetableControlPanel);
});
