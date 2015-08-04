modules.define(
    'timetable-cell-header-airport-destination',
    ['inherit', 'timetable-cell'],
    function (provide, inherit, TimetableCell) {
        var TimetableCellHeaderAirportDestination = inherit(TimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);
            }

        }, {
            getBlockName: function () {
                return 'timetable-cell-header-airport-destination';
            }
        });
        provide(TimetableCellHeaderAirportDestination);
    });
