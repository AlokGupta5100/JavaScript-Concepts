function setUpEvent(){
    var count = 0;

    document.getElementById('myButton').addEventListener('click',function(){
        count++;
        console.log('Button click'+` `+  count +` `+  'times');
    })
}

setUpEvent();