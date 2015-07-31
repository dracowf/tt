module.exports = function (bt) {

    bt.match('flight-timetable-cell-flight-type', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
