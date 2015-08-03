module.exports = function (bt) {

    bt.match('timetable-cell-general-info', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
