modules.define(
    'timetable-cell-aircraft-type',
    ['inherit', 'timetable-cell'],
    function (provide, inherit, TimetableCell) {
        var TimetableCellAircraftType = inherit(TimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);
            }

        }, {
            getBlockName: function () {
                return 'timetable-cell-aircraft-type';
            }
        });

        provide(TimetableCellAircraftType);
});

