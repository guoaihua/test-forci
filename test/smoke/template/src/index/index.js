import {hello} from "./helloworld";
import '../common/util';
import "./index.scss";
import {a} from "../common/util";
document.write(hello());



document.querySelector("#btn").onclick = function () {
    import("../common/dymic.js").then(function (text) {
        console.log(text);
    });
};

