class Greeter {

    timerToken: number;
    constructor(public greeting: string) { }
    greet() {
        let greetString = "<h1>" + this.greeting + "</h1>"
        let timestamp = "The current gaga timestamp is " + this.getTimestamp();
        return greetString + timestamp;
    }

    getTimestamp():string{
        return String(new Date().getTime());
    }

    start(){
        this.timerToken = setInterval(()=> document.body.innerHTML = greeter.greet(), 5000);
    }
};

var greeter = new Greeter("Hello, world!");
    
greeter.start();
