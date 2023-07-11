//
    //a
    const parentList = document.getElementById('parentList');
    const addItem = document.getElementById('addItem');

    //b
    addItem.addEventListener('click', function(){
        //console.log('add item clicked');
        const newLi = document.createElement('li');
        newLi.innerHTML = 'new item';
        //console.log(newLi);
        parentList.appendChild(newLi);
        //
        //d
        const dltBtn = document.createElement('button');
        dltBtn.innerHTML = 'delete';
        parentList.appendChild(dltBtn);
    })
    //
    //c
    parentList.addEventListener('click', function(e){
        if(e.target.tagName === 'LI'){
            //console.log('li clicked');
            //e.target.remove()
        }//e 
        else if(e.target.tagName === 'BUTTON'){
            //console.log('dlt btn is clicked');
            //e.target.remove();//deletes only the button
            //e.target.parentNode.remove();//deletes eveything
            let previousLi = e.target.previousElementSibling;
            let removeTheButton = e.target;
            previousLi.remove();
            removeTheButton.remove();

            //console.log(previousLi);
        }
        

    })