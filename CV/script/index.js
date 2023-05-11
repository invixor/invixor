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



let leftSide = document.querySelector('.left__side');
let rightSide = document.querySelector('.right__side');


if (window.screen.width >= 1024) {
    leftSide.style.height = `${document.documentElement.scrollHeight}px`;
    window.addEventListener('resize', ()=>{
        leftSide.style.height = `${rightSide.scrollHeight}px`;
    })
}




if (window.screen.width >=1024) {
    tabHeaders.forEach(item=>{
        item.addEventListener('click', ()=>{
            leftSide.style.height = `${rightSide.scrollHeight}px`;
        })
    })
}