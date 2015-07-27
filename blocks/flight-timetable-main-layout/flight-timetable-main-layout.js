modules.define(
    'flight-timetable-main-layout',
    ['inherit',
        'block',
        'flight-timetable-header',
        'flight-timetable-header-hidden',
        'flight-timetable-body'
    ],
    function (provide, inherit, YBlock, FlightTimetableHeader, FlightTimetableHeaderHidden, FlightTimetableBody) {
        var flight_timetable_main_layout = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);

                this._thisDomNode = this.getDomNode();

                // здесь описываем то, что происходит сразу после создания инстанса класса


                // Создаем шапку

                this._header = new FlightTimetableHeader({
                    parentNode: this._thisDomNode
                });

                // Создаем скрытую шапку

                this._headerD = new FlightTimetableHeaderHidden({
                    parentNode: this._thisDomNode
                });

                // Создаем тело

                this._body = new FlightTimetableBody({
                    parentNode: this._thisDomNode
                });

                // Слушаем скролл

                this._bindTo($(window), 'scroll', this._isOnTop);


            },


            // Прикрепляем или открепляем шапку

            _isOnTop: function () {
                //console.log(this._thisDomNode.offset().top);
                if (this._thisDomNode.offset().top < $(window).scrollTop()) {
                    this._header._setState('hidden');
                    this._headerD._setState('visible');
                } else {
                    this._header._removeState('hidden');
                    this._headerD._removeState('visible');
                }
            }

            // инстанс-методы
        }, {
            getBlockName: function () {
                return 'flight-timetable-main-layout';
            }

            // статические методы
        });

        provide(flight_timetable_main_layout);
    });
