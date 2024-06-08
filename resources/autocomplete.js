/**
 * @param inputEle - the input field element
 * @param strings - an array of possible autocompleted values
 */
function autocomplete(inputEle, items) {

    let currentFocus;

    inputEle.addEventListener("input", function(e) {

        closeAllLists();

        if (!this.value) return false;

        currentFocus = -1;

        // create a DIV element that will contain the items

        const itemsWrapper = document.createElement('div');   
        
        itemsWrapper.setAttribute('id', this.id + '_autocompleteList');
        itemsWrapper.setAttribute('class', 'autocompleteList');
        this.parentNode.appendChild(itemsWrapper);

        let i, itemEle;

        for (i = 0; i < items.length; i++) {

            // check if the item starts with the same letters as the text field value
            if (items[i].substr(0, this.value.length).toUpperCase() == this.value.toUpperCase()) {

                itemEle = document.createElement('div');

                // make the matching letters bold
                itemEle.innerHTML = "<strong>" + items[i].substr(0, this.value.length) + "</strong>";
                itemEle.innerHTML += items[i].substr(this.value.length);

                // insert a input field that will hold the current array item's value
                itemEle.innerHTML += '<input type="hidden" value="' + items[i] + '">';

                itemEle.addEventListener("click", function(e) {
                    // insert the value for the autocomplete text field
                    inputEle.value = this.getElementsByTagName('input')[0].value;
                    // close the list of autocompleted values - or any other open lists of autocompleted values
                    closeAllLists();
                });

                itemsWrapper.appendChild(itemEle);
            }
        }
    });

    inputEle.addEventListener("keydown", function(e) {

        const itemsWrapper = document.getElementById(this.id + '_autocompleteList');
        let items = (itemsWrapper) ? itemsWrapper.getElementsByTagName('div') : null;

        if (e.keyCode == 40) {
            // arrow DOWN
            currentFocus++;
            if(items) makeActive(items);
        }
        
        else if (e.keyCode == 38) {
            // arrow UP
            currentFocus--;
            if(items) makeActive(items);
        }
        
        else if (e.keyCode == 13) {
            // ENTER key, prevent the form from being submitted, and click on the current item
            e.preventDefault();
            if(currentFocus > -1 && items) items[currentFocus].click();
        }
    });

    function makeActive(items) {

        //start by removing the "active" class on all items
        removeActive(items);

        if (currentFocus >= items.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (items.length - 1);

        items[currentFocus].classList.add('autocomplete-active');
    }

    function removeActive(items) {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('autocomplete-active');
        }
    }

    /**
     * close all autocomplete lists in the document, except the one passed as an argument
     * @param exceptEle - the element to be skipped 
     */
    function closeAllLists(exceptEle) {
        const lists = document.getElementsByClassName('autocompleteList');
        for (let i = 0; i < lists.length; i++) {
            if (exceptEle != lists[i] && exceptEle != inputEle) lists[i].parentNode.removeChild(lists[i]);
        }
    }

    // execute a function when someone clicks in the document
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}