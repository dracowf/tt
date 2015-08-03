modules.define(
    'timetable-cell-flight-note',
    ['inherit', 'timetable-cell'],
    function (provide, inherit, TimetableCell) {
        var TimetableCellFlightNote = inherit(TimetableCell, {
                __constructor: function (params) {
                    this.__base.apply(this, arguments);

                }
            },
            {

                getBlockName: function () {
                    return 'timetable-cell-flight-note';

                }
            });
        provide(TimetableCellFlightNote);
    });

