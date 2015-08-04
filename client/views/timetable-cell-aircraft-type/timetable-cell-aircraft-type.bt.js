module.exports = function (bt) {

    bt.match('timetable-cell-aircraft-type', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
    });

};
