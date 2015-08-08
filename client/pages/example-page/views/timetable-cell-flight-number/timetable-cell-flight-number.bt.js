module.exports = function (bt) {

    bt.match('timetable-cell-flight-number', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
