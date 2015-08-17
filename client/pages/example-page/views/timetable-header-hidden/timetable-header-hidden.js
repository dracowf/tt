modules.define(
    'timetable-header-hidden',
    ['inherit', 'timetable-header'],
    function (provide, inherit, TimetableHeader) {
        var TimetableHeaderHidden = inherit(TimetableHeader, {
            __constructor: function (params) {
                this.__base.apply(this, arguments);

            }

        }, {
            getBlockName: function () {
                return 'timetable-header-hidden';
            }

        });

        provide(TimetableHeaderHidden);
    });
