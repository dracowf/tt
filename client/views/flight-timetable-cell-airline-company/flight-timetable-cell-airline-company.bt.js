module.exports = function (bt) {

    bt.match('flight-timetable-cell-airline-company', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });
};
