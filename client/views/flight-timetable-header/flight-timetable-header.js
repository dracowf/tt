modules.define(
    'flight-timetable-header',
    ['inherit', 'block','flight-timetable-row'],
    function (provide, inherit, YBlock, FlightTimetableRow) {
        var FlightTimetableHeader = inherit(YBlock, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);

                // Получаем параметр с DOM-нодой родителя.

                this._parentNode = params.parentNode;

                this._thisDomNode = this.getDomNode();

                // Запоминаем изначальное положение шапки

                // this._innerOffsetTop = this._thisDomNode.offset().top;

                // this.emit('header-position', this._innerOffsetTop);

                // Создаем шапку

                this._row = new FlightTimetableRow({
                    parentNode: this._thisDomNode,
                    view: 'header',
                    flightNumber: 'Рейс',
                    planTime: 'Время',
                    aircraftType: 'Борт',
                    //CompanyLogo: 'Логотип компании',
                    AirlineCompany: 'Компания',
                    flightStatus: 'Статус',
                    realTime: 'Время2',
                    note: 'Доп.инфа'
                });

                this._render();

                this._bindTo($(window), 'scroll', this._headerOnTop);

                // здесь описываем то, что происходит сразу после создания инстанса класса
            },

            _render: function () {
                this.getDomNode().appendTo(this._parentNode);
            },

            // Если прокрутили ниже шапки - прикрепляем, если выше, то снимаем фикс

           _headerOnTop : function () {
                if ($(window).scrollTop() > this._parentNode.offset().top) {
                    if (!this._getState('hidden')) {
                        console.log("Поставил!");
                        this._setState('hidden')
                    }
                } else {
                        if (this._getState('hidden')) {
                            console.log("Снял");
                            this._removeState('hidden')
                        }
                }
            },

            // инстанс-методы
        }, {
            getBlockName: function () {
                return 'flight-timetable-header';
            }

            // статические методы
        });

        provide(FlightTimetableHeader);
});