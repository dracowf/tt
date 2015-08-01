module.exports = function (bt) {

    bt.match('timetable-cell-airline-company', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });
};
