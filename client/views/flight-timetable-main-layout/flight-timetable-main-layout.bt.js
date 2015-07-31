module.exports = function (bt) {

    bt.match('flight-timetable-main-layout', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
        /*ctx.setContent([
            {
                block: 'flight-timetable-header'
            },
            {
                block: 'flight-timetable-header-hidden'
            },
            {
                block: 'flight-timetable-body'
            }
        ]);*/
    });

};
