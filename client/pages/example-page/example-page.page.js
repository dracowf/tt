module.exports = function (pages) {
    pages.declare('example-page', function (params) {
        var options = params.options;
        return {
            block: 'page',
            title: 'example page',
            styles: [
                {url: options.assetsPath + '.css'}
            ],
            scripts: [
                {url: options.assetsPath + '.' + params.lang + '.js'}
            ],
            body: [
                {
                    block: 'header-view'
                },
                {
                    block: 'layout-view'
                }
            ]
        };
    });
};
