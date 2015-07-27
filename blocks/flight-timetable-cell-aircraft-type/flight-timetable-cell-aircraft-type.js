modules.define(
    'flight-timetable-cell-aircraft-type',
    ['inherit', 'flight-timetable-cell'],
    function (provide, inherit, FlightTimetableCell) {
        var FlightTimetableCellAircraftType = inherit(FlightTimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);
            }
        });
        provide(FlightTimetableCellAircraftType);
});

