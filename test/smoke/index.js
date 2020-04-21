const path = require("path");
const webpack = require("webpack");
const rimraf = require("rimraf");
const Mocha = require('mocha');

const mocha = new Mocha({
    timout: '10000ms'
})
process.chdir(path.join(__dirname,'template'));

rimraf('./dist',()=>{
    const dev = require("../../lib/webpack.base");

    webpack(dev, (err,stats)=>{
        if(err){
            console.error(err);
            process.exit(2);
        }
        console.log(stats.toString({
            colors: true,
            modules: false,
            children: false
        }));
        console.log("test start");
        mocha.addFile(path.resolve(__dirname,"html-test.js"));
        mocha.run();
    })
})

describe('', function () {
    
});
