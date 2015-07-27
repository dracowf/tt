module.exports = function (bt) {

    bt.match('header-view', function (ctx) {
        ctx.enableAutoInit();
        ctx.setTag('header');

        ctx.setContent("?");

    });

};
