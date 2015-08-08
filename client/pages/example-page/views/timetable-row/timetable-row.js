modules.define(
    'timetable-row',
    ['inherit',
        'block',
        'timetable-cell',
        'timetable-cell-header-airline-company',
        'timetable-cell-header-general-info',
        'timetable-cell-header-actual-info',
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
              TimetableCellHeaderGeneralInfo,
              TimetableCellHeaderActualInfo,
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
                    this._cellAirlineCompany = new TimetableCellAirlineCompany({
                        parentNode: rowDomNode,
                        view: 'header',
                        text: 'Компания'
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
                    text: this.dataFlightNumber,
                    dataCompanyLogo: this.dataCompanyLogo,
                    dataCompanyName: this.dataCompanyName
                });

                // Создаём ячейку: Основная информация

                if (this._view == 'header') {
                    this._cellGeneralInfo = new TimetableCellGeneralInfo({
                        parentNode: rowDomNode,
                        view: 'header',
                        text: 'Рейс'
                        //dataFlightNumber: 'Номер рейса',
                        //dataPlanTime: 'Время по расписанию',
                        //dataAircraftType: 'Тип самолёта'
                    });
                } else {
                    this._cellGeneralInfo = new TimetableCellGeneralInfo({
                        parentNode: rowDomNode,
                        _nameOfCell: '_cellGeneralInfo',
                        //text: 'Company Logo',
                        dataFlightNumber: this.dataFlightNumber,
                        dataPlanTime: this.dataPlanTime,
                        dataAircraftType: this.dataAircraftType
                    });
                }

                // Создаём ячейку: Плановое время
                if (this._view == 'header') {
                    this._cellFlightPlanTime = new TimetableCellFlightPlanTime({
                        view: 'header',
                        parentNode: rowDomNode,
                        text: 'Время плановое'
                    });
                } else {
                    this._cellFlightPlanTime = new TimetableCellFlightPlanTime({
                        parentNode: rowDomNode,
                        _nameOfCell: '_cellFlightPlanTime',
                        text: this.dataPlanTime
                    });
                }

                // Создаём ячейку: Тип воздушного судна
                if (this._view == 'header') {
                    this._cellAircraftType = new TimetableCellAircraftType({
                        view: 'header',
                        parentNode: rowDomNode,
                        _nameOfCell: '_cellAircraftType',
                        text: 'Тип самолёта'
                    });
                } else {
                    this._cellAircraftType = new TimetableCellAircraftType({
                        parentNode: rowDomNode,
                        _nameOfCell: '_cellAircraftType',
                        text: this.dataAircraftType
                    });
                }
                // Создаём ячейку: Назначение

                if (this._view == 'header') {
                    this._cellAirportDestination = new TimetableCellAirportDestination({
                        parentNode: rowDomNode,
                        view: 'header',
                        text: 'Направление'
                        //text: 'City'
                    });
                } else {
                    this._cellAirportDestination = new TimetableCellAirportDestination({
                        parentNode: rowDomNode,
                        _nameOfCell: '_cellAirportDestination',
                        text: 'Калининград'
                    });
                }

                // Создаём ячейку: Статус рейчас

                this._cellFlightStatus = new TimetableCellFlightStatus({
                    parentNode: rowDomNode,
                    _nameOfCell: '_cellFlightStatus',
                    text: 'Status'
                });

                // Создаём ячейку: Акутальная информация


                if (this._view == 'header') {
                    this._cellActualInfo = new TimetableCellActualInfo({
                        parentNode: rowDomNode,
                        view: 'header',
                        text: 'Статус'
                       /*dataFlightStatus: 'Статус рейса',
                        dataRealTime: 'Время по факту',
                        dataNote: 'Примечение'*/
                    });
                } else {
                    this._cellActualInfo = new TimetableCellActualInfo({
                        parentNode: rowDomNode,
                        _nameOfCell: '_cellActualInfo',
                        dataFlightStatus: this.dataFlightStatus,
                        dataRealTime: this.dataRealTime,
                        dataNote: 'Стойка: 12'
                    });
                }
                // Создаём ячейку: Актуальное время

                if (this._view == 'header') {
                    this._cellActualTime = new TimetableCellActualTime({
                        view: 'header',
                        parentNode: rowDomNode,
                        text: 'Время фактическое'
                    });
                } else {
                    this._cellActualTime = new TimetableCellActualTime({
                        parentNode: rowDomNode,
                        _nameOfCell: '_cellActualTime',
                        text: this.dataRealTime
                    });
                }

                // Создаём ячейку: Примечание
                if (this._view == 'header') {
                    this._cellFlightNote = new TimetableCellFlightNote({
                        parentNode: rowDomNode,
                        view: 'header',
                        _nameOfCell: '_cellFlightNote',
                        text: 'Примечание'
                    });
                } else {
                    this._cellFlightNote = new TimetableCellFlightNote({
                        parentNode: rowDomNode,
                        _nameOfCell: '_cellFlightNote',
                        text: 'Стойка: 12 Выход: 23'
                    });
                }
                // Рендеримся

                this._render();

                //this._bindTo(this.getDomNode(), 'click', this._clickOnRow);

            },

            // инстанс-методы

            _render: function () {
                this.getDomNode().appendTo(this._parentNode);
            },
            _clickOnRow: function () {
                this.emit('click-on-row', this._rowNumber);
            },
            _mousedownOnRow: function () {
                this.emit('mousedown-on-row', this._rowNumber);
            },
            _mouseleaveOnRow: function () {
                this.emit('mouseleave-on-row', this._rowNumber);
            },
            _dragstartOnRow: function () {
                this.emit('dragstart-on-row', this._rowNumber);
            }

        }, {
            // статические методы

            _liveInit: function () {
                this._liveBind('click', function (e) {
                    this._clickOnRow();
                });
                this._liveBind('mousedown', function (e) {
                    this._mousedownOnRow();
                });
                this._liveBind('mouseleave', function (e) {
                    this._mouseleaveOnRow();
                });
                this._liveBind('dragstart', function (e) {
                    this._dragstartOnRow();
                });

            },

            getBlockName: function () {
                return 'timetable-row';
            },

        });

        provide(TimetableRow);
    });
