modules.define(
    'info-view',
    ['inherit', 'block'],
    function (provide, inherit, YBlock) {
        var info_view = inherit(YBlock, {
            __constructor: function () {
                this.__base.apply(this, arguments);

            }

        }, {
            getBlockName: function () {
                return 'info-view';
            }

        });

        provide(info_view);
});
