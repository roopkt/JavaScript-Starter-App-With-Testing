function add(a,b) {
    $.publish('addition-complete');
    return a+b;
}