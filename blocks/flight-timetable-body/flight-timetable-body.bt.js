module.exports = function (bt) {

    bt.match('flight-timetable-body', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
        /*ctx.setContent([
            {
                block: 'flight-timetable-row'
            },
            {
                block: 'flight-timetable-row',
            },
            {
                block: 'flight-timetable-row'
            }
        ]);*/
    });

};
