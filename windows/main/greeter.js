var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        var greetString = "<h1>" + this.greeting + "</h1>";
        var timestamp = "The current gaga timestamp is " + this.getTimestamp();
        return greetString + timestamp;
    };
    Greeter.prototype.getTimestamp = function () {
        return String(new Date().getTime());
    };
    Greeter.prototype.start = function () {
        this.timerToken = setInterval(function () { return document.body.innerHTML = greeter.greet(); }, 5000);
    };
    return Greeter;
}());
;
var greeter = new Greeter("Hello, world!");
greeter.start();
//# sourceMappingURL=greeter.js.map