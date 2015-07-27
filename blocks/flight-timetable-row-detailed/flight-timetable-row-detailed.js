modules.define(
        'flight-timetable-row-detailed',
    [   'inherit',
        'block',
        'flight-timetable-cell'],
    function (provide, inherit, YBlock, FlightTimetableCell) {
        var FlightTimetableRowDetailed = inherit(YBlock, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);

                // Получаем параметр с DOM-нодой родителя.

                if (!!params.parentNode) {
                    this._parentNode = params.parentNode;
                }

                // Получаем Номер строки.

                if (!!params.RowNumber) {
                    this._RowNumber = params.RowNumber;
                }

                // Получаем текущую DOM-ноду

                //var rowDomNode = this.getDomNode();

                this._render();

            },

            _render: function () {
                this.getDomNode().appendTo(this._parentNode);
                this.getDomNode().text("!");
            }

        }, {
            getBlockName: function () {
                return 'flight-timetable-row-detailed';
            }

            // статические методы
        });

        provide(FlightTimetableRowDetailed);
});

