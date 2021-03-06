modules.define(
    'timetable-table',
    ['inherit',
        'block',
        'timetable-header',
        'timetable-header-hidden',
        'timetable-body'
    ],
    function (provide, inherit, YBlock, TimetableHeader,
              TimetableHeaderHidden, TimetableBody) {
        var TimetableTable = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);

                this._thisDomNode = this.getDomNode();

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

        }, {
            getBlockName: function () {
                return 'timetable-table';
            }

        });

        provide(TimetableTable);
    });
