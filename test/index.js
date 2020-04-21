const path = require("path");
process.chdir(path.resolve(__dirname,'smoke/template'));

describe('webpack test case', function () {
    console.log(path.resolve(__dirname),process.cwd());
    require("./unlit/webpack.base");
});
