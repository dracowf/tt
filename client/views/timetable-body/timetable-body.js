modules.define(
    'timetable-body',
    ['inherit',
        'block',
        'timetable-row',
        'timetable-row-detailed'],
    function (provide, inherit, YBlock, TimetableRow, TimetableRowDetailed) {
        var TimetableBody = inherit(YBlock, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);

                this._parentNode = params.parentNode;

                this._thisDomNode = this.getDomNode();


                //var thisDomNode = this.getDomNode();

                // Создаем строки с данными

                this._rows = [];
                this._rowsD = [];


                // УДАЛИТЬ


                var number = Math.floor(Math.random() * 900) + 100;
                var d = new Date();
                var type = 'Airbus A321';


                for (i = 0; i < 100; i++) {
                    if (i % 2 == 0) {
                        this._rows.push(new TimetableRow({
                            parentNode: this._thisDomNode,
                            view: 'light',
                            rowNumber: i,
                            flightNumber: 'SU ' + number + i,
                            planTime: d.getHours().toString() + ':' + (Number(d.getMinutes()) + i).toString(),
                            aircraftType: type,
                            companyLogo: 'Aloha',
                            companyName: 'British Airways',
                            flightStatus: 'Canceled',
                            realTime: d.getHours().toString() + ':' + (Number(d.getMinutes()) + i + 1).toString(),
                            note: 'Gate 5'
                        }));
                        this._rowsD.push(new TimetableRowDetailed({
                            parentNode: this._thisDomNode,
                            //view: 'hide',
                            rowNumber: i
                        }));
                    } else {
                        this._rows.push(new TimetableRow({
                            parentNode: this._thisDomNode,
                            view: 'dark',
                            rowNumber: i,
                            flightNumber: 'SU ' + number + i,
                            planTime: d.getHours().toString() + ':' + (Number(d.getMinutes()) + i).toString(),
                            aircraftType: type,
                            companyLogo: 'Aloha',
                            companyName: 'British Airways',
                            flightStatus: 'Canceled',
                            realTime: d.getHours().toString() + ':' + (Number(d.getMinutes()) + i + 1).toString(),
                            note: 'Gate 5'
                        }));
                        this._rowsD.push(new TimetableRowDetailed({
                            parentNode: this._thisDomNode,
                            //view: 'hide',
                            rowNumber: i
                        }));
                    }

                }

                this._render();

                // Слушаем наведение на клетки таблицы

                this._rows.forEach(function (row) {
                    for (cell in row) {
                        if (cell.match('_cell')) {
                            row[cell].on('mouseover-cell', this._addHoverAllCells, this);
                            row[cell].on('mouseout-cell', this._removeHoverAllCells, this);
                        }
                    }
                    row.on('click-on-row', this._clickOnRow, this);
                    row.on('mousedown-on-row', this._mousedownOnRow, this);
                    row.on('mouseup-on-row', this._mouseupOnRow, this);
                }.bind(this));

                // Слушаем событие: клик по строке

                this._rows.forEach(function (row) {
                    //row.on('click-on-row', this._clickOnRow, this);

                }.bind(this));

            },

            _render: function () {
                this.getDomNode().appendTo(this._parentNode);
            },

            // Добавляем состояние _hover всем ячейкам столбца

            _addHoverAllCells: function (e) {
                var _currentCell = e.data;
                this._rows.forEach(function (row) {
                    row[_currentCell]._setState('hover');
                });
            },

            // Удаляем состояние _hover всем ячейкам столбца

            _removeHoverAllCells: function (e) {
                var _currentCell = e.data;
                this._rows.forEach(function (row) {
                    row[_currentCell]._removeState('hover');
                });
            },

            // Добавляем блок с подробностями

            _clickOnRow: function (e) {
                if (!this._rowsD[e.data]._getState('visible')) {
                    this._rowsD[e.data]._setState('visible');
                    this._rows[e.data]._setState('clicked');
                } else {
                    this._rowsD[e.data]._removeState('visible');
                    this._rows[e.data]._removeState('clicked');
                }
            },

            // Имитируем поведение кнопки

            _mousedownOnRow: function (e) {
                if (!this._rows[e.data]._getState('pushed')) {
                    this._rows[e.data]._setState('pushed');

                    // Защита от смены состояния при уходе со строки

                    var _row = this._rows[e.data];
                    _row.on('mouseleave-on-row', function () {
                        if (_row._getState('pushed')) {
                            _row._removeState('pushed')
                        }
                    });
                    _row.on('dragstart-on-row', function () {
                        if (_row._getState('pushed')) {
                            _row._removeState('pushed')
                        }
                    });
                }
            }

        }, {
            getBlockName: function () {
                return 'timetable-body';
            }

            // статические методы
        });

        provide(TimetableBody);
    });
