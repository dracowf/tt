module.exports = function (bt) {

    bt.match('timetable-header', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
