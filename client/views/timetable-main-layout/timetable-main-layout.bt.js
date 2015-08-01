module.exports = function (bt) {

    bt.match('timetable-main-layout', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
        /*ctx.setContent([
            {
                block: 'timetable-header'
            },
            {
                block: 'timetable-header-hidden'
            },
            {
                block: 'timetable-body'
            }
        ]);*/
    });

};
