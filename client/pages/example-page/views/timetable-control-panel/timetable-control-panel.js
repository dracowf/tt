modules.define(
    'timetable-control-panel',
    ['inherit', 'block'],
    function (provide, inherit, YBlock) {
        var TimetableControlPanel = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);



            }

        }, {
            getBlockName: function () {
                return 'timetable-control-panel';
            }

        });

        provide(TimetableControlPanel);
});
