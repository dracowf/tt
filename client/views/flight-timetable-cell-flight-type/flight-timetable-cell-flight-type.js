modules.define(
    'flight-timetable-cell-flight-type',
    ['inherit', 'flight-timetable-cell'],
    function (provide, inherit, FlightTimetableCell) {
        var FlightTimetableCellFlightType = inherit(FlightTimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);
                //console.log("I'm exist!");
                //console.log(this);
            },
        }, {
            getBlockName: function () {
                return 'flight-timetable-cell-flight-type';
            }
        });
        provide(FlightTimetableCellFlightType);
    });
