modules.define(
    'flight-timetable-cell-airport-destination',
    ['inherit', 'flight-timetable-cell'],
    function (provide, inherit, FlightTimetableCell) {
        var FlightTimetableCellAirportDestination = inherit(FlightTimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);
            }
        });
        provide(FlightTimetableCellAirportDestination);
    });
