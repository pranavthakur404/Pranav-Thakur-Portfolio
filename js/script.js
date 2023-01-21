const favIcon = document.querySelector('.fa-bars');
const menuList = document.querySelector('.menu-list');
favIcon.addEventListener('click',()=>{
    const menuList = document.querySelector('.menu-list');
    if(menuList.style.height == '50%'){
        menuList.style.lineHeight = '0px';
        menuList.style.padding = '0px';
        menuList.style.overflow = 'hidden';
        menuList.style.height = '0';
     }else{
        menuList.style.lineHeight = '40px';
        menuList.style.padding = ' 2% 5% 3% 6%';
        menuList.style.overflow = 'visible';
        menuList.style.height = '50%';
     }
        
})