module.exports = function (bt) {

    bt.match('timetable-control-panel', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');
        ctx.setContent('Control Panel');
    });

};
