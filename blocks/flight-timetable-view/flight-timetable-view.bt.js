module.exports = function (bt) {

    bt.match('flight-timetable-view', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');

        ctx.setContent([
            {
                block: 'flight-timetable-control-panel'
            },
            {
                block: 'flight-timetable-main-layout'
            }
        ]);
    });

};
