module.exports = function (bt) {

    bt.match('choose-view', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('div');

        ctx.setContent('Страна и город');
    });

};
