module.exports = function (bt) {

    bt.match('timetable-cell-flight-status', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
