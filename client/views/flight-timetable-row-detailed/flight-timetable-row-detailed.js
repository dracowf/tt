modules.define(
        'flight-timetable-row-detailed',
    [   'inherit',
        'block',
        'flight-timetable-cell',
        'flight-timetable-row'],
    function (provide, inherit, YBlock, FlightTimetableCell, FlightTimetableRow) {
        var FlightTimetableRowDetailed = inherit(YBlock, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);

                // Получаем параметр с DOM-нодой родителя.

                //if (!!params.parentNode) {
                    this._parentNode = params.parentNode;
                //}

                // Получаем Номер строки.

                //if (!!params.RowNumber) {
                    this._RowNumber = params.RowNumber;
                //}

                this._thisDomNode = this.getDomNode();

                /*this._row = new FlightTimetableRow({
                    parentNode: this._thisDomNode,
                    view: 'light',
                    RowNumber: '1'
                });*/

                // Получаем текущую DOM-ноду

                //var rowDomNode = this.getDomNode();

                this._render();

            },

            _render: function () {
                this.getDomNode().appendTo(this._parentNode);
                //this.getDomNode().text("!");
            }

        }, {
            getBlockName: function () {
                return 'flight-timetable-row-detailed';
            }

            // статические методы
        });

        provide(FlightTimetableRowDetailed);
});

