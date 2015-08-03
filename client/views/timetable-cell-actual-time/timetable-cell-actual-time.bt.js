module.exports = function (bt) {

    bt.match('timetable-cell-actual-time', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
