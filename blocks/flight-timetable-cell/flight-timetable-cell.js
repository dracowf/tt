modules.define(
    'flight-timetable-cell',
    ['inherit', 'block'],
    function (provide, inherit, YBlock) {
        var FlightTimetableCell = inherit(YBlock, {
                __constructor: function (params) {
                    this.__base.apply(this, arguments);

                    // Получаем параметр с DOM-нодой родителя.

                    this._parentNode = params.parentNode;

                    this._nameOfCell = params._nameOfCell;

                    this._text = params.text;

                    // Рендеримся

                    if (!!this._parentNode) {
                        this._render();
                    }

                    if (!!(typeof this._text === 'string')) {
                        this.getDomNode().text(this._text);

                    }

                    // Слушаем мышку

                    //this._bindTo(this.getDomNode(), 'mouseover', this._addhover);
                    //this._bindTo(this.getDomNode(), 'mouseout', this._removehover);
                },

                // Рендеримся внутри родительской DOM-ноды this._parentNode

                _render: function () {
                    this.getDomNode().appendTo(this._parentNode);
                    this.getDomNode().text(this._text);
                },


                _addhover: function () {
                    //console.log('mouseover_cell', this._nameOfCell);
                    this.emit('mouseover-cell', this._nameOfCell);
                },


                _removehover: function () {
                    //console.log('mouseout-cell-' + this._nameOfCell);
                    this.emit('mouseout-cell', this._nameOfCell);
                }

            }, {

                _liveInit: function () {
                    this._liveBind('mouseover', function (e) {
                        this._addhover();
                    });
                    this._liveBind('mouseout', function (e) {
                        this._removehover();
                    });
                },

                getBlockName: function () {
                    return 'flight-timetable-cell';
                }

            });

        provide(FlightTimetableCell);
    });

