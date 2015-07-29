modules.define(
    'flight-timetable-cell-company-logo',
    ['inherit', 'flight-timetable-cell'],
    function (provide, inherit, FlightTimetableCell) {
        var FlightTimetableCellCompanyLogo = inherit(FlightTimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);
            }
        }, {
            getBlockName: function () {
                return 'flight-timetable-cell-company-logo';
            }
        });
        provide(FlightTimetableCellCompanyLogo);
});

