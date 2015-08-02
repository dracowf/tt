modules.define(
    'timetable-cell-airline-company',
    ['inherit', 'timetable-cell'],
    function (provide, inherit, TimetableCell) {
        var TimetableCellAirlineCompany = inherit(TimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);

                this._parentNode = params.parentNode;
                this._companyLogo = params.companyLogo;
                this._companyName = params.companyName;

                // Создаем элемент лого компании

                this._elemCompanyLogo = this._createElement({
                    elem: 'logo'
                });

                // Создаем элемент название компании

                this._elemCompanyName = this._createElement({
                    elem: 'name'
                });

                this._renderFieldCompanyLogo();
                this._renderFieldCompanyName();
            },

            _render: function () {
                this.getDomNode().appendTo(this._parentNode);
                //this.getDomNode().text("Компания");
            },

            _renderFieldCompanyLogo: function () {
                this._elemCompanyLogo.appendTo(this.getDomNode());
                this._elemCompanyLogo.text(this._companyLogo);
            },

            _renderFieldCompanyName: function () {
                this._elemCompanyName.appendTo(this.getDomNode());
                this._elemCompanyName.text(this._companyName);
            }
        }, {
            getBlockName: function () {
                return 'timetable-cell-airline-company';
            }
        });
        provide(TimetableCellAirlineCompany);
});
