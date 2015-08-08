modules.define(
    'timetable-cell-actual-info',
    ['inherit', 'timetable-cell'],
    function (provide, inherit, TimetableCell) {
        var TimetableCellActualInfo = inherit(TimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);

                // Получаем параметр с DOM-нодой родителя

                this._parentNode = params.parentNode;

                // Получаем статус рейса

                this._dataFlightStatus = params.dataFlightStatus;

                // Получаем актуальное время

                this._dataRealTime = params.dataRealTime;


                // Получаем доп. информацию

                this._dataNote = params.dataNote;

                // Создаем элемент статус рейса

                this._flightStatus = this._createElement({
                    elem: 'flight-status'
                });

                // Создаем элемент актуальное время

                this._realTime = this._createElement({
                    elem: 'real-time'
                });

                // Создаем элемент дп. инфомрация

                this._note = this._createElement({
                    elem: 'note'
                });

                this._renderFlightStatus();
                this._renderRealTime();
                this._renderNote();
            },

            _renderFlightStatus: function () {
                this._flightStatus.appendTo(this.getDomNode());
                this._flightStatus.text(this._dataFlightStatus);
                console.log(this._dataFlightStatus);
                console.log(this._dataFlightStatus);
                switch  (this._dataFlightStatus) {
                    case 'Canceled':
                        this._setState('canceled');
                        break;
                    case 'Delayed':
                        this._setState('delayed');
                        break;
                    case 'Arrival':
                        this._setState('arrival');
                        break;
                    default:
                        this._flightStatus.text('--');
                }
            },

            _renderRealTime: function () {
                this._realTime.appendTo(this.getDomNode());
                this._realTime.text(this._dataRealTime);
            },

            _renderNote: function () {
                this._note.appendTo(this.getDomNode());
                this._note.text(this._dataNote);
            }
        }, {
            getBlockName: function () {
                return 'timetable-cell-actual-info';
            }
        });
        provide(TimetableCellActualInfo);
});

