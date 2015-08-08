modules.define(
    'timetable-cell-flight-number',
    ['inherit', 'timetable-cell'],
    function (provide, inherit, TimetableCell) {
        var TimetableCellFlightNumber = inherit(TimetableCell, {

            __constructor: function (params) {
                this.__base.apply(this, arguments);

                // Получаем параметр с DOM-нодой родителя

                this._parentNode = params.parentNode;
            }
        }, {
            getBlockName: function () {
                return 'timetable-cell-flight-number';
            }
        });
        provide(TimetableCellFlightNumber);
    });
