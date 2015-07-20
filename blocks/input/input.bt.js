module.exports = function (bt) {

    bt.match('input*', function (ctx) {
        ctx.enableAutoInit();

        ctx.setContent([
            {
                elem: 'control',
                inputValue: ctx.getParam('value'),
                inputName: ctx.getParam('name'),
                placeholder: ctx.getParam('placeholder')
            },
            {
                elem: 'clear'
            }
        ]);
    });

    bt.match('input*__control', function (ctx) {
        ctx.setTag('input');

        var currentValue = ctx.getParam('inputValue');
        var currentName = ctx.getParam('inputName');
        var currentPlaceholder = ctx.getParam('placeholder');

        ctx.setAttr('value', currentValue);
        ctx.setAttr('name', currentName);
        ctx.setAttr('placeholder', currentPlaceholder);
    });

};