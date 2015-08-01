module.exports = function (bt) {

    bt.match('timetable-view', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');

        ctx.setContent([
            {
                block: 'timetable-control-panel'
            },
            {
                block: 'timetable-main-layout'
            }
        ]);
    });

};
