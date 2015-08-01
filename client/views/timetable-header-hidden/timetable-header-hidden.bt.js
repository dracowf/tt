module.exports = function (bt) {

    bt.match('timetable-header-hidden', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
