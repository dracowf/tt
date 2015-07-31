module.exports = function (bt) {

    bt.match('flight-timetable-cell-flight-note', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
