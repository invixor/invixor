const tabHeaders = document.querySelectorAll('[data-tab]');
const headerContent = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(item=>{
    item.addEventListener('click', ()=>{
        const tabContent = item.nextElementSibling;
        tabContent.classList.toggle('_hidden');
    })
})

tabHeaders.forEach(item=>{
    item.classList.remove('tab_active');
    item.addEventListener('click', ()=>{
        item.classList.toggle('tab_active');
    })
})