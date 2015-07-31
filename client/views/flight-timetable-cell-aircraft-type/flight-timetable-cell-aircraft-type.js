modules.define(
    'flight-timetable-cell-aircraft-type',
    ['inherit', 'flight-timetable-cell'],
    function (provide, inherit, FlightTimetableCell) {
        var FlightTimetableCellAircraftType = inherit(FlightTimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);
            }

        }, {
            getBlockName: function () {
                return 'flight-timetable-cell-aircraft-type';
            }
        });

        provide(FlightTimetableCellAircraftType);
});

