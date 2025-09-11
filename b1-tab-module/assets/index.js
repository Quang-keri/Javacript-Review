const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menus = $$('.menu');
const panes = $$('.menu-pane');
const line = $('.menu-parent .line');

const setUpLinePos = ()=>{
  const menuActive = $('.menu.active');
  if(menuActive){
    line.style.left = menuActive.offsetLeft+'px';
    line.style.right= menuActive.offsetWidth+'px';
  }
}
function setLinePosition() {
    const menuActive = $('.menu.active');
    if (menuActive) {
        line.style.left = menuActive.offsetLeft + 'px';  
        console.log( line.style.left)
        line.style.width = menuActive.offsetWidth + 'px';
         console.log( line.style.width)
    }
}

setLinePosition(); 


menus.forEach((menu, index) => {
    menu.onclick = function () {
        const activeMenu = $('.menu.active');
        const activePane = $('.menu-pane.active');
        
        activeMenu.classList.remove('active');
        activePane.classList.remove('active');

        this.classList.add('active');
        panes[index].classList.add('active');

       
        setLinePosition();
    };
});

