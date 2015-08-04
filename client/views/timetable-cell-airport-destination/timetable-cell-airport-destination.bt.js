module.exports = function (bt) {

    bt.match('timetable-cell-airport-destination', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
