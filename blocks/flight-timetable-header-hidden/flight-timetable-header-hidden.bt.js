module.exports = function (bt) {

    bt.match('flight-timetable-header-hidden', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
