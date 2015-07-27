modules.define(
    'flight-timetable-cell-flight-number',
    ['inherit', 'flight-timetable-cell'],
    function (provide, inherit, FlightTimetableCell) {
        var FlightTimetableCellFlightNumber = inherit(FlightTimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);
            }
        }, {
            getBlockName: function () {
                return 'flight-timetable-cell-flight-number';
            }
        });
        provide(FlightTimetableCellFlightNumber);
    });
