modules.define(
    'timetable-cell-actual-time',
    ['inherit', 'timetable-cell'],
    function (provide, inherit, TimetableCell) {
        var TimetableCellActualTime = inherit(TimetableCell, {
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

                this._renderFlightNumber();
                this._renderPlanTime();
                this._renderAircraftType();
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
                return 'timetable-cell-actual-time';
            }
        });
        provide(TimetableCellActualTime);
});

