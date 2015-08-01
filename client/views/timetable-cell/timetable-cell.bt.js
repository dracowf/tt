module.exports = function (bt) {

    bt.match('timetable-cell', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
