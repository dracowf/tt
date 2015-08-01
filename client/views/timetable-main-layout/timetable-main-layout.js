modules.define(
    'timetable-main-layout',
    ['inherit',
        'block',
        'timetable-header',
        'timetable-header-hidden',
        'timetable-body'
    ],
    function (provide, inherit, YBlock, TimetableHeader,
              TimetableHeaderHidden, TimetableBody) {
        var TimetableMainLayout = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);

                console.log("Дошёл!");

                this._thisDomNode = this.getDomNode();

                // здесь описываем то, что происходит сразу после создания инстанса класса


                // Создаем шапку

                this._header = new TimetableHeader({
                    parentNode: this._thisDomNode
                });

                // Создаем скрытую шапку

                this._headerD = new TimetableHeaderHidden({
                    parentNode: this._thisDomNode
                });

                // Создаем тело

                this._body = new TimetableBody({
                    parentNode: this._thisDomNode
                });

                // Слушаем скролл

                this._bindTo($(window), 'scroll', this._isOnTop);


            },


            // Прикрепляем или открепляем шапку

            _isOnTop: function () {
                //console.log(this._thisDomNode.offset().top);
                if (this._thisDomNode.offset().top < $(window).scrollTop()) {
                    //this._header._setState('hidden');
                    this._headerD._setState('visible');
                } else {
                    //this._header._removeState('hidden');
                    this._headerD._removeState('visible');
                }
            }

            // инстанс-методы
        }, {
            getBlockName: function () {
                return 'timetable-main-layout';
            }

            // статические методы
        });

        provide(TimetableMainLayout);
    });
