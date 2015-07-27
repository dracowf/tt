modules.define(
    'flight-timetable-header-hidden',
    ['inherit', 'flight-timetable-header'],
    function (provide, inherit, FlightTimetableHeader) {
        var FlightTimetableHeaderHidden = inherit(FlightTimetableHeader, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);

                console.log(this.width);

                // здесь описываем то, что происходит сразу после создания инстанса класса
            },

            // инстанс-методы
        }, {
            getBlockName: function () {
                return 'flight-timetable-header-hidden';
            }

            // статические методы
        });

        provide(FlightTimetableHeaderHidden);
    });
