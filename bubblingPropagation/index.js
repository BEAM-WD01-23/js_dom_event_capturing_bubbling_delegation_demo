//
    const parent = document.getElementById('parent');
    const child = document.getElementById('child');
    const button = document.getElementById('button');

    //
    parent.addEventListener('click', function(e){
        // e.stopPropagation();
        console.log('parent element is clicked');
    },true);
    //
    child.addEventListener('click', function(e){
        e.stopPropagation();
        console.log('child element is clicked');
    },true);
    //
    button.addEventListener('click', function(){
        console.log('button is clicked');
    })