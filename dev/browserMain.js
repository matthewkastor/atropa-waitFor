var waitFor = require('../src/atropa-waitFor.js');

try {
    Object.keys(waitFor).forEach(
        function (prop) {
            if(!atropa[prop]) {
                atropa[prop] = waitFor[prop];
            }
        }
    );
} catch (ignore) {
    atropa = require('../src/atropa-waitFor.js');
}

Object.keys(waitFor.data).filter(
    function (prop) {
        return prop !== 'requirements';
    }
).forEach(
    function (prop) {
        atropa.data[prop] = waitFor.data[prop];
    }
);
