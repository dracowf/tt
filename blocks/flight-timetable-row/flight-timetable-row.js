modules.define(
    'flight-timetable-row',
    ['inherit',
        'block',
        'flight-timetable-cell',
        'flight-timetable-cell-flight-type',
        'flight-timetable-cell-flight-number',
        'flight-timetable-cell-airline-company',
    ],
    function (provide,
              inherit,
              YBlock,
              FlightTimetableCell,
              FlightTimetableCellFlightType,
              FlightTimetableCellFlightNumber
    ) {
        var FlightTimetableRow = inherit(YBlock, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);

                // Получаем параметр с DOM-нодой родителя.

                this._parentNode = params.parentNode;

                // Получаем Номер строки.

                this._RowNumber = params.RowNumber;

                // Получаем текущую DOM-ноду

                var rowDomNode = this.getDomNode();

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
                    text: 'Flight Number'
                });

                // Создаём ячейку: Авиакомпания

                this._cellAirlineCompany = new FlightTimetableCell({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellAirlineCompany',
                    text: 'Airline Company'
                });

                // Создаём ячейку: Логотоип авиакомпании

                this._cellCompanyLogo = new FlightTimetableCell({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellCompanyLogo',
                    text: 'Company Logo'
                });

                // Создаём ячейку: Тип воздушного судна

                this._cellAircraftType = new FlightTimetableCell({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellAircraftType',
                    text: 'Aircraft Type'
                });

                // Создаём ячейку: Аэропорт назначения

                this._cellAirportDest = new FlightTimetableCell({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellAirportDest',
                    text: 'Airport Destination'
                });

                // Создаём ячейку: Плановое время

                this._cellFlightPlanTime = new FlightTimetableCell({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellFlightPlanTime',
                    text: 'Plan Time'
                });

                // Создаём ячейку: Статус рейчас

                this._cellFlightStatus = new FlightTimetableCell({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellFlightStatus',
                    text: 'Status'
                });

                // Создаём ячейку: Примечание

                this._cellFlightNote = new FlightTimetableCell({
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
                this._liveBind('click', function(e) {
                    this._clickOnRow();
                });
            },

            getBlockName: function () {
                return 'flight-timetable-row';
            },

        });

        provide(FlightTimetableRow);
    });