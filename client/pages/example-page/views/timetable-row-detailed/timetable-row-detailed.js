modules.define(
        'timetable-row-detailed',
    [   'inherit',
        'block',
        'timetable-cell',
        'timetable-row'],
    function (provide, inherit, YBlock, TimetableCell, TimetableRow) {
        var TimetableRowDetailed = inherit(YBlock, {
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

                /*this._row = new TimetableRow({
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
                return 'timetable-row-detailed';
            }

        });

        provide(TimetableRowDetailed);
});

