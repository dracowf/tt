module.exports = function (bt) {

    bt.match('flight-timetable-cell-company-logo', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
