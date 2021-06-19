var horn = new Audio ();
horn.src = "car_horn_x.wav";

var cash = new Audio ();
cash.src = "cash_register_x.wav";

var clock = new Audio ();
clock.src = "cuckoo_clock2_x.wav";

var play1 = function (num) {
    horn.play();
}

var play2 = function (num) {
    cash.play();
}

var play3 = function (num) {
    clock.play();
}

var but1 = document.getElementById('button1');
var but2 = document.getElementById('button2');
var but3 = document.getElementById('button3');

but1.addEventListener("click", play1(1) )