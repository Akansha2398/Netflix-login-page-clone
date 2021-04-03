const tabitems = document.querySelectorAll('.tab-item');
const tabcontentitem = document.querySelectorAll('.tab-content-item');




//listen for tab click

tabitems.forEach(function(item){
    item.addEventListener('click' , selectitem)
})

//select tab item content

function selectitem(){
    //add border to curent tab

    

    removeborder();

    removeShow();
    
    this.classList.add('tab-border');


    //grab content item from do
    console.log(this.id)

    const tabcontentitems = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabcontentitems.classList.add('show');

    

}



function removeborder(){
    tabitems.forEach(function(item){
        item.classList.remove('tab-border');
    })
}





    function removeShow() {
        tabcontentitem.forEach(item => {
            item.classList.remove('show');
        });
    }
    





