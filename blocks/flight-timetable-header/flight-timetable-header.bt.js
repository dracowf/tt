module.exports = function (bt) {

    bt.match('flight-timetable-header', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
