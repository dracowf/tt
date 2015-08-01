module.exports = function (bt) {

    bt.match('timetable-row*', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
/*        ctx.setContent([
            {
                block: 'timetable-cell-flight-type',
            },
            {
                block: 'timetable-cell-flight-number',
            },
            {
                block: 'timetable-cell-airline-company',
            },
            {
                block: 'timetable-cell-aircraft-type',
            },
            {
                block: 'timetable-cell-departure-city',
            },
            {
                block: 'timetable-cell-scheduled-time',
            },
            {
                block: 'timetable-cell-flight-status',
            },
            {
                block: 'timetable-cell-flight-note',
            },

        ]);*/
    });

};
