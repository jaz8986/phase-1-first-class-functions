const receivesAFunction = (cb) => cb()

const returnsANamedFunction = function () {
    return function() {
        console.log("function")
    }
}
