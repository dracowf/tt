module.exports = function (bt) {

    bt.match('flight-timetable-cell-plan-time', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
