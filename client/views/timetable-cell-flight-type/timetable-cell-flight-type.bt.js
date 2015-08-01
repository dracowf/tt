module.exports = function (bt) {

    bt.match('timetable-cell-flight-type', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
