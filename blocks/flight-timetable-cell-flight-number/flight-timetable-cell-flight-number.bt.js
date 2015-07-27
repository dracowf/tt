module.exports = function (bt) {

    bt.match('flight-timetable-cell-flight-number', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
