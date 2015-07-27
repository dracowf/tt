module.exports = function (bt) {

    bt.match('flight-timetable-cell', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
