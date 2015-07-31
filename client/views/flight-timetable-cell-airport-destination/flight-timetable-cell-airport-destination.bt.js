module.exports = function (bt) {

    bt.match('flight-timetable-cell-airport-destination', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
