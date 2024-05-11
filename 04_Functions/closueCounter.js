function counter(){
    var count = 0;

    function delhi(){
        count++;
        console.log(count);
    }
    return delhi;
}
var outer = counter();
outer();
outer();
outer();