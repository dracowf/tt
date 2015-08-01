modules.define(
    'timetable-row',
    ['inherit',
        'block',
        'timetable-cell',
        'timetable-cell-airline-company',
        'timetable-cell-flight-type',
        'timetable-cell-flight-number',
        'timetable-cell-company-logo',
        'timetable-cell-aircraft-type',
        'timetable-cell-airport-destination',
        'timetable-cell-plan-time',
        'timetable-cell-flight-status',
        'timetable-cell-flight-note'
    ],
    function (provide,
              inherit,
              YBlock,
              TimetableCell,
              TimetableCellAirlineCompany,
              TimetableCellFlightType,
              TimetableCellFlightNumber,
              TimetableCellCompanyLogo,
              TimetableCellAircraftType,
              TimetableCellAirportDestination,
              TimetableCellFlightPlanTime,
              TimetableCellFlightStatus,
              TimetableCellFlightNote) {
        var TimetableRow = inherit(YBlock, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);

                // Получаем параметр с DOM-нодой родителя.

                this._parentNode = params.parentNode;

                // Получаем Номер строки.

                this._RowNumber = params.RowNumber;

                // Получаем текущую DOM-ноду

                var rowDomNode = this.getDomNode();

                // Получаем тип самолёта

                this.dataCompanyLogo = params.CompanyLogo;

                // Получаем тип самолёта

                this.dataAirlineCompany = params.AirlineCompany;

                // Получаем номер рейса

                this.dataFlightNumber = params.flightNumber;

                // Получаем плановое время

                this.dataPlanTime = params.planTime;

                // Получаем тип самолёта

                this.dataAircraftType = params.aircraftType;

                // Получаем статус рейса

                this.dataFlightStatus = params.flightStatus;

                // Получаем реально время

                this.dataRealTime = params.realTime;

                // Получаем доп. информация

                this.dataNote = params.note;


                // Создаём ячейку: Авиакомпания

                this._cellAirlineCompany = new TimetableCellAirlineCompany({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellAirlineCompany',
                    text: 'Airline Company',
                    dataCompanyLogo: this.dataCompanyLogo,
                    dataAirlineCompany: this.dataAirlineCompany
                });


                // Создаём ячейку: Тип полёта (вылет или прилёт)

                this._cellFlightType = new TimetableCellFlightType({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellFlightType',
                    text: 'Flight Type'
                });

                // Создаём ячейку: Номер рейса

                this._cellFlightNumber = new TimetableCellFlightNumber({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellFlightNumber',
                    text: 'Flight Number',
                    dataCompanyLogo: this.dataCompanyLogo,
                    dataAirlineCompany: this.dataAirlineCompany
                });

                // Создаём ячейку: Авиакомпания

                /*this._cellAirlineCompany = new TimetableCellAirlineCompany({
                 parentNode: rowDomNode,
                 _nameOfCell: '_cellAirlineCompany',
                 text: 'Airline Company'
                 });*/

                // Создаём ячейку: Логотоип авиакомпании

                this._cellCompanyLogo = new TimetableCellCompanyLogo({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellCompanyLogo',
                    text: 'Company Logo',
                    dataFlightNumber: this.dataFlightNumber,
                    dataPlanTime: this.dataPlanTime,
                    dataAircraftType: this.dataAircraftType

                });

                // Создаём ячейку: Тип воздушного судна

                this._cellAircraftType = new TimetableCellAircraftType({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellAircraftType',
                    text: 'Aircraft Type'
                });

                // Создаём ячейку: Аэропорт назначения

                this._cellAirportDestination = new TimetableCellAirportDestination({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellAirportDestination',
                    text: 'Airport Destination'
                });

                // Создаём ячейку: Плановое время

                this._cellFlightPlanTime = new TimetableCellFlightPlanTime({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellFlightPlanTime',
                    text: 'Plan Time'
                });

                // Создаём ячейку: Статус рейчас

                this._cellFlightStatus = new TimetableCellFlightStatus({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellFlightStatus',
                    text: 'Status',
                    dataFlightStatus: this.dataFlightStatus,
                    dataRealTime: this.dataRealTime,
                    dataNote: this.dataNote
                });

                // Создаём ячейку: Примечание

                this._cellFlightNote = new TimetableCellFlightNote({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellFlightNote',
                    text: 'Note'
                });

                // Рендеримся

                this._render();

                //this._bindTo(this.getDomNode(), 'click', this._clickOnRow);

            },

            // инстанс-методы

            _render: function () {
                this.getDomNode().appendTo(this._parentNode);
            },

            _clickOnRow: function () {
                //console.log("На мне кликнули ", this._RowNumber);
                this.emit('click-on-row', this._RowNumber);
            }

        }, {
            // статические методы

            _liveInit: function () {
                this._liveBind('click', function (e) {
                    this._clickOnRow();
                });
            },

            getBlockName: function () {
                return 'timetable-row';
            },

        });

        provide(TimetableRow);
    });
