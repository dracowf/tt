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

                this._innerOffsetTop = this._thisDomNode.offset().top;

                // Создаем шапку

                this._row = new FlightTimetableRow({
                    parentNode: this._thisDomNode,
                    view: 'header'
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
                if ($(window).scrollTop() > this._innerOffsetTop) {
                    if (!this._getState('fixed')) {
                        console.log("Поставил!");
                        this._setState('fixed')
                    }
                } else {
                        if (this._getState('fixed')) {
                            console.log("Да ладно?!");
                            this._removeState('fixed')
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
