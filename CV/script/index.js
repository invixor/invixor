const tabHeaders = document.querySelectorAll('[data-tab]');
const headerContent = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function(item){
    item.addEventListener('click', function(){

        headerContent.forEach(function(item){
            item.classList.add('_hidden');
        });

        const contentBox = document.querySelector('#'+this.dataset.tab);
        contentBox.classList.remove('_hidden');
    });
});


