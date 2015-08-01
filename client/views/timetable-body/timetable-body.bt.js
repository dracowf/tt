module.exports = function (bt) {

    bt.match('timetable-body', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
        /*ctx.setContent([
            {
                block: 'timetable-row'
            },
            {
                block: 'timetable-row',
            },
            {
                block: 'timetable-row'
            }
        ]);*/
    });

};
