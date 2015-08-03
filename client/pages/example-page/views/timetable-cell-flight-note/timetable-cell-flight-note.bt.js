module.exports = function (bt) {

    bt.match('timetable-cell-flight-note', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
