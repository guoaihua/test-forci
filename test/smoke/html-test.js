const glob = require("glob-all");
describe('check html', function () {
    it('should generate html', function (done) {
        const files = glob.sync([
          './dist/index.html',
          './dist/test.html'
        ]);
        if(files.length>0){
            done();
        }else {
            throw  new Error('no html')
        }
    });
});
