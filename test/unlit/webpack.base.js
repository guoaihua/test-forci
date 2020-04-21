const assert = require('assert');
describe('webpack test case', function () {
    const baseconfig = require("../../lib/webpack.base");
    it('entry', function () {
        assert.equal(baseconfig.entry.index.indexOf('/test/smoke/template/src/index/index.js') >-1 ,true);
        assert.equal(baseconfig.entry.test.indexOf("/test/smoke/template/src/test/index.js")>-1,true)
    });
});
