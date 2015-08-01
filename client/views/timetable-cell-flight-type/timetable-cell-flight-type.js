modules.define(
    'timetable-cell-flight-type',
    ['inherit', 'timetable-cell'],
    function (provide, inherit, TimetableCell) {
        var TimetableCellFlightType = inherit(TimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);
                //console.log("I'm exist!");
                //console.log(this);
            },
        }, {
            getBlockName: function () {
                return 'timetable-cell-flight-type';
            }
        });
        provide(TimetableCellFlightType);
    });
