modules.define(
    'timetable-cell-airline-company',
    ['inherit', 'timetable-cell'],
    function (provide, inherit, TimetableCell) {
        var TimetableCellAirlineCompany = inherit(TimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);
            }
        }, {
            getBlockName: function () {
                return 'timetable-cell-airline-company';
            }
        });
        provide(TimetableCellAirlineCompany);
});
