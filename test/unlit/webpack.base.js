const assert = require('assert');
describe('webpack test case', function () {
    const baseconfig = require("../../lib/webpack.base");
    it('entry', function () {
        assert.equal(baseconfig.entry.index, '/Users/ziming/Tools/webpackbuilder/test/smoke/template/src/index/index.js');
        assert.equal(baseconfig.entry.test,"/Users/ziming/Tools/webpackbuilder/test/smoke/template/src/test/index.js")
    });
});
