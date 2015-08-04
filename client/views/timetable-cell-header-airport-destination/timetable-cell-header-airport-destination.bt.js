module.exports = function (bt) {

    bt.match('timetable-cell-header-airport-destination', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
