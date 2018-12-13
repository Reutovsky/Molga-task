var _x = 1;

var foo = {
    _x: 2,
    bar: function() {
        return this._x;
    }
}

console.log('1. ', foo.bar());

var baz = foo.bar;
console.log('2. ', baz.call(foo));

setTimeout(function() {
    console.log('3. ', baz());
}, 0); 

var _x = 4;