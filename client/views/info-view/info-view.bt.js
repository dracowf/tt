module.exports = function (bt) {

    bt.match('info-view', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');

        ctx.setContent('Инфо');
    });

};
