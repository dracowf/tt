modules.define(
    'flight-timetable-cell-flight-status',
    ['inherit', 'flight-timetable-cell'],
    function (provide, inherit, FlightTimetableCell) {
        var FlightTimetableCellFlightStatus = inherit(FlightTimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);
            }
        }, {
            getBlockName: function () {
                return 'flight-timetable-cell-flight-status';
            }
        });
        provide(FlightTimetableCellFlightStatus);
});

