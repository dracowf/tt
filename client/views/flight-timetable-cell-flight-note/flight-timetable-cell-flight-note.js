modules.define(
    'flight-timetable-cell-flight-note',
    ['inherit', 'flight-timetable-cell'],
    function (provide, inherit, FlightTimetableCell) {
        var FlightTimetableCellFlightNote = inherit(FlightTimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);
            }
        }, {
            getBlockName: function () {
                return 'flight-timetable-cell-flight-note';
            }
        });
        provide(FlightTimetableCellFlightNote);
});

