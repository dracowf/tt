module.exports = function (bt) {

    bt.match('flight-timetable-cell-flight-status', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
