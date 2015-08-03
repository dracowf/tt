module.exports = function (bt) {

    bt.match('timetable-cell-actual-info', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
