modules.define(
    'flight-timetable-row',
    ['inherit',
        'block',
        'flight-timetable-cell',
        'flight-timetable-cell-flight-type',
        'flight-timetable-cell-flight-number',
        'flight-timetable-cell-airline-company',
        'flight-timetable-cell-company-logo',
        'flight-timetable-cell-aircraft-type',
        'flight-timetable-cell-airport-destination',
        'flight-timetable-cell-plan-time',
        'flight-timetable-cell-flight-status',
        'flight-timetable-cell-flight-note'
    ],
    function (provide,
              inherit,
              YBlock,
              FlightTimetableCell,
              FlightTimetableCellFlightType,
              FlightTimetableCellFlightNumber,
              FlightTimetableCellAirlineCompany,
              FlightTimetableCellCompanyLogo,
              FlightTimetableCellAircraftType,
              FlightTimetableCellAirportDestination,
              FlightTimetableCellFlightPlanTime,
              FlightTimetableCellFlightStatus,
              FlightTimetableCellFlightNote) {
        var FlightTimetableRow = inherit(YBlock, {
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




                // Создаём ячейку: Тип полёта (вылет или прилёт)

                this._cellFlightType = new FlightTimetableCellFlightType({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellFlightType',
                    text: 'Flight Type'
                });

                // Создаём ячейку: Номер рейса

                this._cellFlightNumber = new FlightTimetableCellFlightNumber({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellFlightNumber',
                    text: 'Flight Number',
                    dataCompanyLogo: this.dataCompanyLogo,
                    dataAirlineCompany: this.dataAirlineCompany
                });

                // Создаём ячейку: Авиакомпания

                /*this._cellAirlineCompany = new FlightTimetableCellAirlineCompany({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellAirlineCompany',
                    text: 'Airline Company'
                });*/

                // Создаём ячейку: Логотоип авиакомпании

                this._cellCompanyLogo = new FlightTimetableCellCompanyLogo({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellCompanyLogo',
                    text: 'Company Logo',
                    dataFlightNumber: this.dataFlightNumber,
                    dataPlanTime: this.dataPlanTime,
                    dataAircraftType: this.dataAircraftType

                });

                // Создаём ячейку: Тип воздушного судна

                this._cellAircraftType = new FlightTimetableCellAircraftType({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellAircraftType',
                    text: 'Aircraft Type'
                });

                // Создаём ячейку: Аэропорт назначения

                this._cellAirportDestination = new FlightTimetableCellAirportDestination({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellAirportDestination',
                    text: 'Airport Destination'
                });

                // Создаём ячейку: Плановое время

                this._cellFlightPlanTime = new FlightTimetableCellFlightPlanTime({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellFlightPlanTime',
                    text: 'Plan Time'
                });

                // Создаём ячейку: Статус рейчас

                this._cellFlightStatus = new FlightTimetableCellFlightStatus({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellFlightStatus',
                    text: 'Status',
                    dataFlightStatus: this.dataFlightStatus,
                    dataRealTime: this.dataPlanTime,
                    dataNote: this.dataNote
                });

                // Создаём ячейку: Примечание

                this._cellFlightNote = new FlightTimetableCellFlightNote({
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
                return 'flight-timetable-row';
            },

        });

        provide(FlightTimetableRow);
    });
