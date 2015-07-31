module.exports = function (bt) {

    bt.match('flight-timetable-cell-aircraft-type', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
