require("./lib/autoCurry.js")();
require("./lib/trim.js")();
require("./lib/docReady.js")();

window.docReady(init);

function init () {
    console.log("it worked!");
}
