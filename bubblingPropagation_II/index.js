//
    const grandParent = document.querySelector('.grandParent');
    const parent = document.querySelector('.parent');
    const myBtn = document.querySelector('.btn');
    //

    grandParent.addEventListener('click', function(){
        grandParent.style.backgroundColor = 'yellow';
        grandParent.style.borderRadius = '20%';
    })
    //
    parent.addEventListener('click', function(e){
        // e.stopPropagation();
        parent.style.backgroundColor = 'pink';
        parent.style.borderRadius = '50%';
    })
    //
    myBtn.addEventListener('click', function(e){
        e.stopPropagation();
        console.log('button is clicked');
        myBtn.style.backgroundColor = 'skyBlue';
        // grandParent.style.backgroundColor = 'black';
        // parent.style.backgroundColor = 'green';
    })