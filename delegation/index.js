//event delegation
    const parentList = document.getElementById('parentList');
    parentList.addEventListener('click', parentListFunction);

    function parentListFunction(event){
        //console.log('parentList clicked', event.target.textContent);
        if(event.target.tagName === 'LI' || event.target.tagName === 'DIV'){
            //console.log('we clicked: ', event.target.textContent);
            event.target.style.color = 'blue';
            //event.target.style.textDecoration = 'line-through';
            //event.target.remove();
        }
    }
    