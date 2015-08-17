modules.define(
    'choose-view',
    ['inherit', 'block'],
    function (provide, inherit, YBlock) {
        var choose_view = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);

            }

        }, {
            getBlockName: function () {
                return 'choose-view';
            }

        });

        provide(choose_view);
});
