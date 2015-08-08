module.exports = function (bt) {

    bt.match('timetable-cell-header-general-info', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
