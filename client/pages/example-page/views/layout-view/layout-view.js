modules.define(
    'layout-view',
    ['inherit', 'block'],
    function (provide, inherit, YBlock) {
        var layoutView = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);

            }

        }, {
            getBlockName: function () {
                return 'layout-view';
            }

        });

        provide(layoutView);
});
