module.exports = function (bt) {

    bt.match('timetable-cell-header-airline-company', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });
};
