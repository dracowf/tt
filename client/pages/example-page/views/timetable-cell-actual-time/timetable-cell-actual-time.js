modules.define(
    'timetable-cell-actual-time',
    ['inherit', 'timetable-cell'],
    function (provide, inherit, TimetableCell) {
        var TimetableCellActualTime = inherit(TimetableCell, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);


                // Получаем параметр с DOM-нодой родителя

                this._parentNode = params.parentNode;

            }


        }, {
            getBlockName: function () {
                return 'timetable-cell-actual-time';
            }
        });
        provide(TimetableCellActualTime);
});

