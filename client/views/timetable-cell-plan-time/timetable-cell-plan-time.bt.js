module.exports = function (bt) {

    bt.match('timetable-cell-plan-time', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
