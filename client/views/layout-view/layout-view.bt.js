module.exports = function (bt) {

    bt.match('layout-view', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');

        ctx.setContent([
            {
                block: 'choose-view'
            },
            {
                block: 'info-view'
            },
            {
                block: 'flight-timetable-view'
            }
        ]);
    });

};
