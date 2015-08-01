module.exports = function (bt) {

    bt.match('timetable-cell-company-logo', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
