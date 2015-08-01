modules.define(
    'timetable-cell-airline-company',
    ['inherit', 'timetable-cell'],
    function (provide, inherit, TimetableCell) {
        var TimetableCellAirlineCompany = inherit(TimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);

                this._parentNode = params.parentNode;

                // Получаем лого компании

                this._dataCompanyLogo = params.dataCompanyLogo;

                // Получаем название компании

                this._dataAirlineCompany = params.dataAirlineCompany;

                // Создаем элемент лого компании

                this._companyLogo = this._createElement({
                    elem: 'logo'
                });

                // Создаем элемент название компании

                this._companyName = this._createElement({
                    elem: 'name'
                });

                this._renderCompanyLogo();
                this._renderAirlineCompany();
            },

            _render: function () {
                this.getDomNode().appendTo(this._parentNode);
            },

            _renderCompanyLogo: function () {
                this._companyLogo.appendTo(this.getDomNode());
                this._companyLogo.text(this._dataCompanyLogo);
            },

            _renderAirlineCompany: function () {
                this._companyName.appendTo(this.getDomNode());
                this._companyName.text(this._dataAirlineCompany);
            }
        }, {
            getBlockName: function () {
                return 'timetable-cell-airline-company';
            }
        });
        provide(TimetableCellAirlineCompany);
});
