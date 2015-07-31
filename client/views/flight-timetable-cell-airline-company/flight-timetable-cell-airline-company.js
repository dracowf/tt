modules.define(
    'flight-timetable-cell-airline-company',
    ['inherit', 'flight-timetable-cell'],
    function (provide, inherit, FlightTimetableCell) {
        var FlightTimetableCellAirlineCompany = inherit(FlightTimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);
            }
        }, {
            getBlockName: function () {
                return 'flight-timetable-cell-airline-company';
            }
        });
        provide(FlightTimetableCellAirlineCompany);
});
