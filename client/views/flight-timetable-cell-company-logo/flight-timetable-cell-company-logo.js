modules.define(
    'flight-timetable-cell-company-logo',
    ['inherit', 'flight-timetable-cell'],
    function (provide, inherit, FlightTimetableCell) {
        var FlightTimetableCellCompanyLogo = inherit(FlightTimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);


                // Получаем параметр с DOM-нодой родителя

                this._parentNode = params.parentNode;

                // Получаем номер рейса

                this._dataFlightNumber = params.dataFlightNumber;

                // Получаем плановое время

                this._dataPlanTime = params.dataPlanTime;


                // Получаем тип судна

                this._dataAircraftType = params.dataAircraftType;

                // Создаем элемент тип рейса

                this._FlightType = this._createElement({
                    elem: 'flight-type'
                });

                // Создаем элемент номер рейся

                this._FlightNumber = this._createElement({
                    elem: 'flight-number'
                });

                // Создаем элемент плановое время

                this._PlanTime = this._createElement({
                    elem: 'plan-time'
                });

                // Создаем элемент тип самолёта

                this._AircraftType = this._createElement({
                 elem: 'aircraft-type'
                 });

                this._renderFlightType();
                this._renderFlightNumber();
                this._renderPlanTime();
                this._renderAircraftType();
            },

            _render: function () {
                this.getDomNode().appendTo(this._parentNode);
            },

            _renderFlightType: function () {
                this._FlightType.appendTo(this.getDomNode());
                //this._FlightNumber.text('Х');
            },

            _renderFlightNumber: function () {
                this._FlightNumber.appendTo(this.getDomNode());
                this._FlightNumber.text(this._dataFlightNumber);
            },

            _renderPlanTime: function () {
                this._PlanTime.appendTo(this.getDomNode());
                this._PlanTime.text(this._dataPlanTime);
            },

            _renderAircraftType: function () {
             this._AircraftType.appendTo(this.getDomNode());
                this._AircraftType.text(this._dataAircraftType);
             }
        }, {
            getBlockName: function () {
                return 'flight-timetable-cell-company-logo';
            }
        });
        provide(FlightTimetableCellCompanyLogo);
});

