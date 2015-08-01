modules.define(
    'timetable-cell-flight-number',
    ['inherit', 'timetable-cell'],
    function (provide, inherit, TimetableCell) {
        var TimetableCellFlightNumber = inherit(TimetableCell, {

            __constructor: function (params) {
                this.__base.apply(this, arguments);

                // Получаем параметр с DOM-нодой родителя

                this._parentNode = params.parentNode;

                // Получаем лого компании

                this._dataCompanyLogo = params.dataCompanyLogo;

                // Получаем название компании

                this._dataAirlineCompany = params.dataAirlineCompany;

                // Создаем элемент лого компании

                this._CompanyLogo = this._createElement({
                    elem: 'logo'
                });

                // Создаем элемент название компании

                this._AirlineCompany = this._createElement({
                    elem: 'name'
                });

                this._renderCompanyLogo();
                this._renderAirlineCompany();
            },

            _render: function () {
                this.getDomNode().appendTo(this._parentNode);
            },

            _renderCompanyLogo: function () {
                this._CompanyLogo.appendTo(this.getDomNode());
                this._CompanyLogo.text(this._dataCompanyLogo);
            },

            _renderAirlineCompany: function () {
                this._AirlineCompany.appendTo(this.getDomNode());
                this._AirlineCompany.text(this._dataAirlineCompany);
            }

        }, {
            getBlockName: function () {
                return 'timetable-cell-flight-number';
            }
        });
        provide(TimetableCellFlightNumber);
    });
