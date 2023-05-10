const tabHeaders = document.querySelectorAll('[data-tab]');
const headerContent = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(item=>{
    item.addEventListener('click', ()=>{
        const tabContent = item.nextElementSibling;
        tabContent.classList.toggle('_hidden');
        leftSide.style.maxHeight = `${document.documentElement.scrollHeight}px`;
    })
})

tabHeaders.forEach(item=>{
    item.classList.remove('tab_active');
    item.addEventListener('click', ()=>{
        item.classList.toggle('tab_active');
    })
})



let leftSide = document.querySelector('.left__side');

leftSide.style.height = `${document.documentElement.scrollHeight}px`;
//window.onresize = ()=>{
//    leftSide.style.height = `${document.documentElement.scrollHeight}px`;
//}

window.addEventListener('resize', ()=>{
    console.log(document.documentElement.scrollHeight);
})