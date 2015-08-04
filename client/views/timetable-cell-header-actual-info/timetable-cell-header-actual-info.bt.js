module.exports = function (bt) {

    bt.match('timetable-cell-header-actual-info', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
