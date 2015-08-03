modules.define(
    'timetable-row',
    ['inherit',
        'block',
        'timetable-cell',
        'timetable-cell-header-airline-company',
        'timetable-cell-airline-company',
        'timetable-cell-general-info',
        'timetable-cell-actual-info',
        'timetable-cell-flight-number',
        'timetable-cell-aircraft-type',
        'timetable-cell-airport-destination',
        'timetable-cell-plan-time',
        'timetable-cell-flight-status',
        'timetable-cell-actual-time',
        'timetable-cell-flight-note'
    ],
    function (provide,
              inherit,
              YBlock,
              TimetableCell,
              TimetableCellHeaderAirlineCompany,
              TimetableCellAirlineCompany,
              TimetableCellGeneralInfo,
              TimetableCellActualInfo,
              TimetableCellFlightNumber,
              TimetableCellAircraftType,
              TimetableCellAirportDestination,
              TimetableCellFlightPlanTime,
              TimetableCellFlightStatus,
              TimetableCellActualTime,
              TimetableCellFlightNote
    ) {
        var TimetableRow = inherit(YBlock, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);

                // Получаем параметр с DOM-нодой родителя.

                this._parentNode = params.parentNode;

                // Получаем view

                this._view = params.view;

                // Получаем Номер строки.

                this._rowNumber = params.rowNumber;

                // Получаем текущую DOM-ноду

                var rowDomNode = this.getDomNode();

                // Получаем тип самолёта

                this.companyLogo = params.companyLogo;

                // Получаем тип самолёта

                this.companyName = params.companyName;

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

                if (this._view == 'header') {
                    this._cellAirlineCompany = new TimetableCellHeaderAirlineCompany({
                        parentNode: rowDomNode
                    });
                } else {
                    this._cellAirlineCompany = new TimetableCellAirlineCompany({
                        parentNode: rowDomNode,
                        _nameOfCell: '_cellAirlineCompany',
                        companyLogo: this.companyLogo,
                        companyName: this.companyName
                    });
                }

                // Создаём ячейку: Номер рейса

                this._cellFlightNumber = new TimetableCellFlightNumber({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellFlightNumber',
                    text: 'Flight Number',
                    dataCompanyLogo: this.dataCompanyLogo,
                    dataCompanyName: this.dataCompanyName
                });

                // Создаём ячейку: Основная информация

                this._cellGeneralInfo = new TimetableCellGeneralInfo({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellGeneralInfo',
                    text: 'Company Logo',
                    dataFlightNumber: this.dataFlightNumber,
                    dataPlanTime: this.dataPlanTime,
                    dataAircraftType: this.dataAircraftType
                });

                // Создаём ячейку: Плановое время

                this._cellFlightPlanTime = new TimetableCellFlightPlanTime({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellFlightPlanTime',
                    text: 'Plan Time'
                });

                // Создаём ячейку: Тип воздушного судна

                this._cellAircraftType = new TimetableCellAircraftType({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellAircraftType',
                    text: 'Aircraft Type'
                });

                // Создаём ячейку: Назначение

                this._cellAirportDestination = new TimetableCellAirportDestination({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellAirportDestination',
                    text: 'Airport Destination'
                });

                // Создаём ячейку: Статус рейчас

                this._cellFlightStatus = new TimetableCellFlightStatus({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellFlightStatus',
                    text: 'Status'
                });

                // Создаём ячейку: Акутальная информация

                this._cellActualInfo = new TimetableCellActualInfo({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellActualInfo',
                    text: 'Actual Info',
                    dataFlightStatus: this.dataFlightStatus,
                    dataRealTime: this.dataRealTime,
                    dataNote: this.dataNote
                });

                // Создаём ячейку: Актуальное время

                this._cellActualTime = new TimetableCellActualTime({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellActualTime',
                    text: 'Actual Time'
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
                this.emit('click-on-row', this._rowNumber);
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
