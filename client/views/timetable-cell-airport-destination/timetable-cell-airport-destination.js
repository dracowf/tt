modules.define(
    'timetable-cell-airport-destination',
    ['inherit', 'timetable-cell'],
    function (provide, inherit, TimetableCell) {
        var TimetableCellAirportDestination = inherit(TimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);
            },

            _render: function () {
                this.getDomNode().appendTo(this._parentNode);
                this.getDomNode().text("Самара");
            }

        }, {
            getBlockName: function () {
                return 'timetable-cell-airport-destination';
            }
        });
        provide(TimetableCellAirportDestination);
    });
