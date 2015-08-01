modules.define(
    'timetable-cell-plan-time',
    ['inherit', 'timetable-cell'],
    function (provide, inherit, TimetableCell) {
        var TimetableCellPlanTime = inherit(TimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);
            }
        }, {
            getBlockName: function () {
                return 'timetable-cell-plan-time';
            }
        });
        provide(TimetableCellPlanTime);
});

