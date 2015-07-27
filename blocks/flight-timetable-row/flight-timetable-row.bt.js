module.exports = function (bt) {

    bt.match('flight-timetable-row*', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
/*        ctx.setContent([
            {
                block: 'flight-timetable-cell-flight-type',
            },
            {
                block: 'flight-timetable-cell-flight-number',
            },
            {
                block: 'flight-timetable-cell-airline-company',
            },
            {
                block: 'flight-timetable-cell-aircraft-type',
            },
            {
                block: 'flight-timetable-cell-departure-city',
            },
            {
                block: 'flight-timetable-cell-scheduled-time',
            },
            {
                block: 'flight-timetable-cell-flight-status',
            },
            {
                block: 'flight-timetable-cell-flight-note',
            },

        ]);*/
    });

};
