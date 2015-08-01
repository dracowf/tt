modules.define(
    'timetable-body',
    [   'inherit',
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


                var number = Math.floor(Math.random()*900) + 100;
                var d = new Date();
                var type = 'Airbus A321';


                for (i = 0; i < 100; i++) {
                    if (i % 2 == 0) {
                        this._rows.push(new TimetableRow({
                            parentNode: this._thisDomNode,
                            view: 'light',
                            RowNumber: i,
                            flightNumber: 'SU ' + number + i,
                            planTime: d.getHours().toString() + ':' + (Number(d.getMinutes())+i).toString(),
                            aircraftType: type,
                            CompanyLogo: 'Aloha',
                            AirlineCompany: 'British Airways',
                            flightStatus: 'Canceled',
                            realTime: d.getHours().toString() + ':' + (Number(d.getMinutes())+i+1).toString(),
                            note: 'Gate 5'
                        }));
                        this._rowsD.push(new TimetableRowDetailed({
                            parentNode: this._thisDomNode,
                            //view: 'hide',
                            RowNumber: i
                        }));
                    } else {
                        this._rows.push(new TimetableRow({
                            parentNode: this._thisDomNode,
                            view: 'dark',
                            RowNumber: i,
                            flightNumber: 'SU ' + number + i,
                            planTime: d.getHours().toString() + ':' + (Number(d.getMinutes())+i).toString(),
                            aircraftType: type,
                            CompanyLogo: 'Aloha',
                            AirlineCompany: 'British Airways',
                            flightStatus: 'Canceled',
                            realTime: d.getHours().toString() + ':' + (Number(d.getMinutes())+i+1).toString(),
                            note: 'Gate 5'
                        }));
                        this._rowsD.push(new TimetableRowDetailed({
                            parentNode: this._thisDomNode,
                            //view: 'hide',
                            RowNumber: i
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
                }.bind(this));

                // Слушаем событие: клик по строке

                this._rows.forEach(function (row) {
                    row.on('click-on-row', this._clickOnRow, this);
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
                    //this._rowsD[e.data].slideToggle('slow');
                } else {
                    this._rowsD[e.data]._removeState('visible');

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
