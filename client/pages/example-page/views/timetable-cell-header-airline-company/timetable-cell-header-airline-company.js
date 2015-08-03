modules.define(
    'timetable-cell-header-airline-company',
    ['inherit', 'timetable-cell'],
    function (provide, inherit, TimetableCell) {
        var TimetableCellHeaderAirlineCompany = inherit(TimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);

                this._parentNode = params.parentNode;

            },

            _render: function () {
                this.getDomNode().appendTo(this._parentNode);
                this.getDomNode().text("Компания");
            },

        }, {
            getBlockName: function () {
                return 'timetable-cell-header-airline-company';
            }
        });
        provide(TimetableCellHeaderAirlineCompany);
});
