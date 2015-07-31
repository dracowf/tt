modules.define(
    'flight-timetable-cell-airport-destination',
    ['inherit', 'flight-timetable-cell'],
    function (provide, inherit, FlightTimetableCell) {
        var FlightTimetableCellAirportDestination = inherit(FlightTimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);
            },

            _render: function () {
                this.getDomNode().appendTo(this._parentNode);
                this.getDomNode().text("Самара");
            }

        }, {
            getBlockName: function () {
                return 'flight-timetable-cell-airport-destination';
            }
        });
        provide(FlightTimetableCellAirportDestination);
    });
