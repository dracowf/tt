modules.define(
    'timetable-layout',
    ['inherit', 'block'],
    function (provide, inherit, YBlock) {
        var TimetableLayout = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);

            }

        }, {
            getBlockName: function () {
                return 'timetable-layout';
            }

        });

        provide(TimetableLayout);
});
