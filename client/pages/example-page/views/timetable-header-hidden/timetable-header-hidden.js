modules.define(
    'timetable-header-hidden',
    ['inherit', 'timetable-header'],
    function (provide, inherit, TimetableHeader) {
        var TimetableHeaderHidden = inherit(TimetableHeader, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);

                // здесь описываем то, что происходит сразу после создания инстанса класса
            },

            // инстанс-методы
        }, {
            getBlockName: function () {
                return 'timetable-header-hidden';
            }

            // статические методы
        });

        provide(TimetableHeaderHidden);
    });
